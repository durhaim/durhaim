'use client';

import { Edit, Layers, Plus, Search, Trash2 } from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';

type Category = {
  id: string;
  name: string;
  slug: string;
};

type ProductSeries = {
  id: string;
  name: string;
  slug: string;
  display_order: number;
  category_id?: string | null;
  categories?: Category | Category[] | null;
};

type SeriesForm = {
  id?: string;
  name: string;
  slug: string;
  category_id: string;
  display_order: string;
};

const emptyForm: SeriesForm = {
  name: '',
  slug: '',
  category_id: '',
  display_order: '0',
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeSlugInput(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+/, '');
}

function seriesToForm(series: ProductSeries): SeriesForm {
  return {
    id: series.id,
    name: series.name,
    slug: series.slug,
    category_id: series.category_id ?? '',
    display_order: String(series.display_order ?? 0),
  };
}

export default function AdminSeriesPage() {
  const [seriesList, setSeriesList] = useState<ProductSeries[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showSeriesForm, setShowSeriesForm] = useState(false);
  const [seriesPendingDelete, setSeriesPendingDelete] = useState<ProductSeries | null>(null);
  const [form, setForm] = useState<SeriesForm>(emptyForm);

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  const fetchData = async () => {
    setLoading(true);
    setError('');

    try {
      const [seriesRes, catRes] = await Promise.all([
        fetch('/api/admin/product-series'),
        fetch('/api/admin/categories')
      ]);

      const seriesData = await seriesRes.json().catch(() => ([]));
      const catData = await catRes.json().catch(() => ([]));

      if (!seriesRes.ok) {
        setError(seriesData.error || 'Failed to load series.');
      }
      if (!catRes.ok) {
        setError(catData.error || 'Failed to load categories.');
      }

      setSeriesList(Array.isArray(seriesData) ? seriesData : []);
      setCategories(Array.isArray(catData) ? catData : []);
    } catch (fetchError) {
      console.error('Failed to load data:', fetchError);
      setError('Failed to connect to API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredSeries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return seriesList.filter((item) => {
      const catName = Array.isArray(item.categories) ? item.categories[0]?.name : item.categories?.name;
      const catId = item.category_id ?? '';

      const matchesCategory =
        selectedCategoryFilter === 'all' ||
        (selectedCategoryFilter === 'unassigned' && !catId) ||
        catId === selectedCategoryFilter;

      const matchesQuery =
        !normalizedQuery ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.slug.toLowerCase().includes(normalizedQuery) ||
        (catName ?? '').toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [seriesList, query, selectedCategoryFilter]);

  const openNewSeriesForm = () => {
    setForm({ ...emptyForm, category_id: categories[0]?.id ?? '' });
    setMessage('');
    setShowSeriesForm(true);
  };

  const openEditSeriesForm = (item: ProductSeries) => {
    setForm(seriesToForm(item));
    setMessage('');
    setShowSeriesForm(true);
  };

  const setField = (field: keyof SeriesForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleNameChange = (value: string) => {
    setForm((current) => ({
      ...current,
      name: value,
      slug: current.id ? current.slug : slugify(value),
    }));
  };

  const handleSaveSeries = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/admin/product-series', {
        method: form.id ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || 'Failed to save series.');
        return;
      }

      setMessage('Series saved.');
      setShowSeriesForm(false);
      await fetchData();
    } catch (saveError) {
      console.error('Failed to save series:', saveError);
      setError('Failed to connect to API.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSeries = async (item: ProductSeries) => {
    setSaving(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch(`/api/admin/product-series?id=${encodeURIComponent(item.id)}`, {
        method: 'DELETE',
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || 'Failed to delete series.');
        return;
      }

      setMessage('Series deleted.');
      setSeriesPendingDelete(null);
      if (form.id === item.id) {
        setShowSeriesForm(false);
        setForm(emptyForm);
      }
      await fetchData();
    } catch (deleteError) {
      console.error('Failed to delete series:', deleteError);
      setError('Failed to connect to API.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-stack-lg animate-in fade-in duration-500">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-display-xl text-headline-lg text-stark-white uppercase">Product Series</h1>
          <p className="font-body-md text-on-surface-variant">Manage product series names, slugs, and their order within categories.</p>
        </div>
        <div className="border border-surface-container-highest bg-charcoal-field px-4 py-3">
          <div className="flex items-center gap-2 text-signal-orange">
            <Layers className="h-4 w-4" />
            <span className="font-data-mono text-data-mono">{seriesList.length}</span>
          </div>
          <div className="font-label-caps text-xs uppercase text-on-surface-variant">Total Series</div>
        </div>
      </div>

      <div className="bg-charcoal-field border border-surface-container-highest">
        {error && (
          <div className="border-b border-error bg-error-container/20 p-4 font-body-md text-error">
            {error}
          </div>
        )}
        {message && (
          <div className="border-b border-operator-green bg-operator-green/10 p-4 font-body-md text-operator-green">
            {message}
          </div>
        )}

        <div className="border-b border-surface-container-highest p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
            <form className="flex max-w-md flex-1 items-center border border-surface-container-highest bg-tactical-black px-3 py-2">
              <Search className="mr-2 h-5 w-5 text-on-surface-variant" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full border-none bg-transparent font-data-mono text-stark-white placeholder:text-on-surface-variant focus:outline-none"
                placeholder="Search series..."
                type="search"
              />
            </form>
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="border border-surface-container-highest bg-tactical-black px-3 py-2 font-label-caps text-xs text-stark-white uppercase focus:border-signal-orange focus:outline-none"
            >
              <option value="all">All Categories</option>
              <option value="unassigned">Unassigned</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={openNewSeriesForm}
            className="inline-flex items-center justify-center gap-2 bg-signal-orange px-4 py-2 font-label-caps text-tactical-black hover:bg-stark-white"
          >
            <Plus className="h-4 w-4" />
            New Series
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-surface-container-highest bg-surface-container-lowest">
                <th className="px-4 py-3 font-label-caps uppercase text-on-surface-variant">Name</th>
                <th className="px-4 py-3 font-label-caps uppercase text-on-surface-variant">Slug</th>
                <th className="px-4 py-3 font-label-caps uppercase text-on-surface-variant">Category</th>
                <th className="px-4 py-3 text-right font-label-caps uppercase text-on-surface-variant">Actions</th>
              </tr>
            </thead>
            <tbody className="font-data-mono text-sm text-stark-white">
              {loading ? (
                <tr>
                  <td className="px-4 py-8 text-center text-on-surface-variant" colSpan={4}>Loading series...</td>
                </tr>
              ) : filteredSeries.length === 0 ? (
                <tr>
                  <td className="px-4 py-8 text-center text-on-surface-variant" colSpan={4}>No series found.</td>
                </tr>
              ) : (
                filteredSeries.map((item) => {
                  const catName = Array.isArray(item.categories) ? item.categories[0]?.name : item.categories?.name;
                  return (
                    <tr key={item.id} className="border-b border-surface-container-highest/50 hover:bg-surface-container-highest/30">
                      <td className="px-4 py-3 text-signal-orange">{item.name}</td>
                      <td className="px-4 py-3 text-on-surface-variant">{item.slug}</td>
                      <td className="px-4 py-3 text-on-surface-variant">{catName ?? '-'}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex flex-wrap justify-end gap-3">
                          <button type="button" onClick={() => openEditSeriesForm(item)} className="inline-flex items-center gap-1 text-on-surface-variant underline hover:text-signal-orange">
                            <Edit className="h-3 w-3" />
                            Edit
                          </button>
                          <button type="button" onClick={() => setSeriesPendingDelete(item)} className="inline-flex items-center gap-1 text-error underline hover:text-error/80">
                            <Trash2 className="h-3 w-3" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showSeriesForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-tactical-black/80 p-4 backdrop-blur-sm">
          <form onSubmit={handleSaveSeries} className="grid max-h-[90vh] w-full max-w-3xl gap-4 overflow-y-auto border border-surface-container-highest bg-charcoal-field p-stack-lg shadow-2xl lg:grid-cols-3">
            <div className="lg:col-span-3">
              <h2 className="font-headline-md uppercase text-stark-white">{form.id ? 'Edit Series' : 'New Series'}</h2>
            </div>
            <div>
              <label htmlFor="series-name" className="block font-label-caps text-on-surface-variant mb-2">Name</label>
              <input
                id="series-name"
                value={form.name}
                onChange={(event) => handleNameChange(event.target.value)}
                className="h-12 w-full bg-tactical-black border border-surface-container-highest px-3 text-stark-white focus:border-signal-orange focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="series-slug" className="block font-label-caps text-on-surface-variant mb-2">Slug</label>
              <input
                id="series-slug"
                value={form.slug}
                onChange={(event) => setField('slug', normalizeSlugInput(event.target.value))}
                onBlur={() => setField('slug', slugify(form.slug))}
                className="h-12 w-full bg-tactical-black border border-surface-container-highest px-3 text-stark-white focus:border-signal-orange focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="series-category" className="block font-label-caps text-on-surface-variant mb-2">
                Category
              </label>
              <select
                id="series-category"
                value={form.category_id}
                onChange={(event) => setField('category_id', event.target.value)}
                className="h-12 w-full bg-tactical-black border border-surface-container-highest px-3 text-stark-white focus:border-signal-orange focus:outline-none"
              >
                <option value="">Unassigned</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end gap-3 lg:col-span-3">
              <button type="button" onClick={() => setShowSeriesForm(false)} className="border border-surface-container-highest px-4 py-2 font-label-caps text-stark-white hover:text-signal-orange">Cancel</button>
              <button type="submit" disabled={saving} className="bg-signal-orange px-4 py-2 font-label-caps text-tactical-black hover:bg-stark-white disabled:opacity-60">
                {saving ? 'Saving...' : 'Save Series'}
              </button>
            </div>
          </form>
        </div>
      )}

      {seriesPendingDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-tactical-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md border border-surface-container-highest bg-charcoal-field p-stack-lg shadow-2xl">
            <h2 className="font-headline-md uppercase text-stark-white">Confirm Delete</h2>
            <p className="mt-stack-sm font-body-md text-on-surface-variant">
              Delete {seriesPendingDelete.name}? Products in this series will become unassigned.
            </p>
            <div className="mt-stack-lg flex justify-end gap-3">
              <button type="button" onClick={() => setSeriesPendingDelete(null)} className="border border-surface-container-highest px-4 py-2 font-label-caps text-stark-white hover:text-signal-orange">Cancel</button>
              <button type="button" onClick={() => handleDeleteSeries(seriesPendingDelete)} disabled={saving} className="bg-error px-4 py-2 font-label-caps text-stark-white hover:bg-error/80 disabled:opacity-60">
                {saving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
