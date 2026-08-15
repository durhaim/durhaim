import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { requireAdminRole } from "@/lib/admin-permissions";
import { isMissingSchemaError } from "@/lib/catalogue-data";

export const dynamic = "force-dynamic";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseSeriesBody(body: Record<string, unknown>) {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const slug = typeof body.slug === 'string' ? slugify(body.slug) : slugify(name);
  const category_id = typeof body.category_id === 'string' && body.category_id.trim() !== '' ? body.category_id.trim() : null;
  const display_order = typeof body.display_order === 'number' ? body.display_order : Number.parseInt(String(body.display_order), 10) || 0;

  if (!name || !slug) {
    return { error: 'Name and slug are required.' };
  }

  return { name, slug, category_id, display_order };
}

function handleSeriesError(error: unknown) {
  if (isMissingSchemaError(error)) {
    return NextResponse.json(
      { error: 'Database schema is not installed. Apply supabase/schema.sql.' },
      { status: 503 },
    );
  }

  if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
    return NextResponse.json({ error: 'Series slug already exists.' }, { status: 409 });
  }

  throw error;
}

export async function GET() {
  try {
    const supabase = createAdminClient();
    const authorization = await requireAdminRole(supabase, ["OWNER", "ADMIN", "STAFF"]);
    if (authorization.error) return authorization.error;

    const { data, error } = await supabase
      .from("product_series")
      .select("id, name, slug, display_order, category_id, categories(id, name, slug)")
      .order("display_order")
      .order("name");
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error("Error fetching product series:", error);
    return NextResponse.json({ error: "Product series are unavailable. Apply the storefront catalogue migration." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const authorization = await requireAdminRole(supabase, ['OWNER', 'ADMIN']);
    if (authorization.error) return authorization.error;

    const body = await req.json().catch(() => ({}));
    const parsed = parseSeriesBody(body);

    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('product_series')
      .insert({
        name: parsed.name,
        slug: parsed.slug,
        category_id: parsed.category_id,
        display_order: parsed.display_order,
      })
      .select('id, name, slug, display_order, category_id, categories(id, name, slug)')
      .single();

    if (error) return handleSeriesError(error);

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating product series:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const authorization = await requireAdminRole(supabase, ['OWNER', 'ADMIN']);
    if (authorization.error) return authorization.error;

    const body = await req.json().catch(() => ({}));
    const seriesId = typeof body.id === 'string' ? body.id : '';

    if (!seriesId) {
      return NextResponse.json({ error: 'Series id is required.' }, { status: 400 });
    }

    const parsed = parseSeriesBody(body);
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('product_series')
      .update({
        name: parsed.name,
        slug: parsed.slug,
        category_id: parsed.category_id,
        display_order: parsed.display_order,
      })
      .eq('id', seriesId)
      .select('id, name, slug, display_order, category_id, categories(id, name, slug)')
      .single();

    if (error) return handleSeriesError(error);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating product series:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const authorization = await requireAdminRole(supabase, ['OWNER', 'ADMIN']);
    if (authorization.error) return authorization.error;

    const { searchParams } = new URL(req.url);
    const seriesId = searchParams.get('id');

    if (!seriesId) {
      return NextResponse.json({ error: 'Series id is required.' }, { status: 400 });
    }

    const { error } = await supabase
      .from('product_series')
      .delete()
      .eq('id', seriesId);

    if (error) return handleSeriesError(error);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product series:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
