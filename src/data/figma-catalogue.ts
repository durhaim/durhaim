import type { RegionalPrices } from '@/lib/commerce';

export type FigmaCatalogueSeed = {
  name: string;
  slug: string;
  description: string;
  price: number | null;
  regional_prices: RegionalPrices;
  category: string;
  series: { name: string; slug: string };
  colorway: string;
  display_order: number;
  specifications: string[];
  images: string[];
};

export const figmaCatalogueSeeds: FigmaCatalogueSeed[] = [
  {
    "name": "Green Cobra",
    "slug": "green-cobra",
    "description": "Cobra Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Green",
    "display_order": 2,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-008391.webp"
    ]
  },
  {
    "name": "King Chitto Mark 2",
    "slug": "king-chitto-mark-2",
    "description": "Chitto Series / King",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Chitto Series",
      "slug": "chitto-series"
    },
    "colorway": "King",
    "display_order": 3,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099341.webp"
    ]
  },
  {
    "name": "Multicam Black Rattle Belt",
    "slug": "multicam-black-rattle-belt-2",
    "description": "Rattle Belt / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "belt",
    "series": {
      "name": "Rattle Belt",
      "slug": "rattle-belt"
    },
    "colorway": "Multicam Black",
    "display_order": 4,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-056111.webp"
    ]
  },
  {
    "name": "Royale Anaconda",
    "slug": "royale-anaconda",
    "description": "Anaconda Backpack / Royale",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Anaconda Backpack",
      "slug": "anaconda"
    },
    "colorway": "Royale",
    "display_order": 5,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-004311.webp"
    ]
  },
  {
    "name": "Multicam Black Chitto Mark 2",
    "slug": "multicam-black-chitto-mark-2",
    "description": "Chitto Series / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Chitto Series",
      "slug": "chitto-series"
    },
    "colorway": "Multicam Black",
    "display_order": 6,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-003471.webp"
    ]
  },
  {
    "name": "Cobra Multicam Tropic",
    "slug": "cobra-multicam-tropic",
    "description": "Cobra Series / Multicam Tropic",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Multicam Tropic",
    "display_order": 7,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/multicam-tropic-1.webp"
    ]
  },
  {
    "name": "Black Mamba Mark 2",
    "slug": "black-mamba-mark-2",
    "description": "Mamba Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Mamba Series",
      "slug": "mamba-series"
    },
    "colorway": "Black",
    "display_order": 8,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-000161.webp"
    ]
  },
  {
    "name": "Cobra Tiger Stripe Camo",
    "slug": "cobra-tiger-stripe-camo-2",
    "description": "Cobra Series / Tiger Stripe Camo",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Tiger Stripe Camo",
    "display_order": 9,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-005611.webp"
    ]
  },
  {
    "name": "Black Chitto Mark 2",
    "slug": "black-chitto-mark-2",
    "description": "Chitto Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Chitto Series",
      "slug": "chitto-series"
    },
    "colorway": "Black",
    "display_order": 10,
    "specifications": [
      "Black Color",
      "Laser Cut Design",
      "Fabric 1000 D Triple Coating (Milspec)",
      "Triple Magazine Rifle Modular Pouch (Placard)",
      "Shoulder Quick Release",
      "Cummerbund Quick Release",
      "Laser Cut Molle",
      "Velcro Patch Area",
      "2 Medic/Utility Pouch",
      "Abdomen Pouch",
      "Waterbag/Utility Bag",
      "Weight 2.8 kg",
      "Compatible With Sapi Plate Size M"
    ],
    "images": [
      "/storefront/figma/product/chitto-black/dsc-089012.webp",
      "/storefront/figma/product/chitto-black/dsc-089032.webp",
      "/storefront/figma/product/chitto-black/dsc-089081.webp",
      "/storefront/figma/product/chitto-black/dsc-089131.webp",
      "/storefront/figma/product/chitto-black/dsc-089171.webp"
    ]
  },
  {
    "name": "Royale Mamba Mark 2",
    "slug": "royale-mamba-mark-2",
    "description": "Mamba Series / Royale",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Mamba Series",
      "slug": "mamba-series"
    },
    "colorway": "Royale",
    "display_order": 11,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-096541.webp"
    ]
  },
  {
    "name": "Green Chitto Mark 2",
    "slug": "green-chitto-mark-2",
    "description": "Chitto Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Chitto Series",
      "slug": "chitto-series"
    },
    "colorway": "Green",
    "display_order": 12,
    "specifications": [
      "Green Color",
      "Laser Cut Design",
      "Fabric 1000 D Triple Coating (Milspec)",
      "Triple Magazine Rifle Modular Pouch (Placard)",
      "Shoulder Quick Release",
      "Cummerbund Quick Release",
      "Laser Cut Molle",
      "Velcro Patch Area",
      "2 Medic/Utility Pouch",
      "Abdomen Pouch",
      "Waterbag/Utility Bag",
      "Weight 2.8 kg",
      "Compatible With Sapi Plate Size M"
    ],
    "images": [
      "/storefront/figma/product/chitto-green/gjh-064871.webp",
      "/storefront/figma/product/chitto-green/gjh-064842.webp",
      "/storefront/figma/product/chitto-green/gjh-064851.webp",
      "/storefront/figma/product/chitto-green/gjh-064881.webp",
      "/storefront/figma/product/chitto-green/gjh-064891.webp"
    ]
  },
  {
    "name": "Multicam Black Mamba Mark 2",
    "slug": "multicam-black-mamba-mark-2",
    "description": "Mamba Series / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Mamba Series",
      "slug": "mamba-series"
    },
    "colorway": "Multicam Black",
    "display_order": 13,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/mamba-mk-2-mcb-21.webp"
    ]
  },
  {
    "name": "Royale Mamba Modular",
    "slug": "royale-mamba-modular",
    "description": "Mamba Series / Royale",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Mamba Series",
      "slug": "mamba-series"
    },
    "colorway": "Royale",
    "display_order": 14,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-004951.webp"
    ]
  },
  {
    "name": "Green Mamba Modular",
    "slug": "green-mamba-modular-2",
    "description": "Mamba Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Mamba Series",
      "slug": "mamba-series"
    },
    "colorway": "Green",
    "display_order": 15,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-098221.webp"
    ]
  },
  {
    "name": "Green Fabric Holster",
    "slug": "green-fabric-holster-2",
    "description": "Fabric Holster / Green",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Fabric Holster",
      "slug": "fabric-holster"
    },
    "colorway": "Green",
    "display_order": 16,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-088871.webp"
    ]
  },
  {
    "name": "King Viper Kangguru",
    "slug": "king-viper-kangguru-2",
    "description": "Viper Series / King",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "King",
    "display_order": 17,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-006241.webp"
    ]
  },
  {
    "name": "Green Viper Kangguru",
    "slug": "green-viper-kangguru",
    "description": "Viper Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "Green",
    "display_order": 18,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-076041.webp",
      "/storefront/figma/catalogue/open/dsc-065231.webp",
      "/storefront/figma/catalogue/open/dpn-1.webp"
    ]
  },
  {
    "name": "Black Cobra",
    "slug": "black-cobra",
    "description": "Cobra Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Black",
    "display_order": 20,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-007961.webp"
    ]
  },
  {
    "name": "King Cobra",
    "slug": "king-cobra",
    "description": "Cobra Series / King",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "King",
    "display_order": 21,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-06553-edit-1.webp"
    ]
  },
  {
    "name": "Cobra Multicam Black",
    "slug": "cobra-multicam-black",
    "description": "Cobra Series / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Multicam Black",
    "display_order": 22,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-09708-edit-1.webp"
    ]
  },
  {
    "name": "Cobra Desert Night Camo",
    "slug": "cobra-desert-night-camo",
    "description": "Cobra Series / Desert Night Camo",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Desert Night Camo",
    "display_order": 24,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-002301.webp"
    ]
  },
  {
    "name": "Black Chitto Mark 2",
    "slug": "black-chitto-mark-2-2",
    "description": "Chitto Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Chitto Series",
      "slug": "chitto-series"
    },
    "colorway": "Black",
    "display_order": 25,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-089011.webp"
    ]
  },
  {
    "name": "Green Chitto Mark 2",
    "slug": "green-chitto-mark-2-2",
    "description": "Chitto Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Chitto Series",
      "slug": "chitto-series"
    },
    "colorway": "Green",
    "display_order": 26,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-064841.webp"
    ]
  },
  {
    "name": "Black Viper Mark 2",
    "slug": "black-viper-mark-2",
    "description": "Viper Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "Black",
    "display_order": 27,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-096591.webp"
    ]
  },
  {
    "name": "Multicam Black Viper Mark 2",
    "slug": "multicam-black-viper-mark-2",
    "description": "Viper Series / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "Multicam Black",
    "display_order": 28,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-095211.webp"
    ]
  },
  {
    "name": "Green Viper Mark 2",
    "slug": "green-viper-mark-2",
    "description": "Viper Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "Green",
    "display_order": 29,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-008541.webp"
    ]
  },
  {
    "name": "Black Viper Kangguru",
    "slug": "black-viper-kangguru",
    "description": "Viper Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "Black",
    "display_order": 30,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-063701.webp"
    ]
  },
  {
    "name": "Multicam Black Viper Kangguru",
    "slug": "multicam-black-viper-kangguru",
    "description": "Viper Series / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Viper Series",
      "slug": "viper-series"
    },
    "colorway": "Multicam Black",
    "display_order": 31,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-073711.webp"
    ]
  },
  {
    "name": "Black Thunder",
    "slug": "black-thunder",
    "description": "Thunder Chestrig Series / Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Thunder Chestrig Series",
      "slug": "thunder-chestrig-series"
    },
    "colorway": "Black",
    "display_order": 32,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-09483-x-1.webp"
    ]
  },
  {
    "name": "Green Thunder",
    "slug": "green-thunder",
    "description": "Thunder Chestrig Series / Green",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Thunder Chestrig Series",
      "slug": "thunder-chestrig-series"
    },
    "colorway": "Green",
    "display_order": 33,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-007971.webp"
    ]
  },
  {
    "name": "Multicam Black Thunder",
    "slug": "multicam-black-thunder",
    "description": "Thunder Chestrig Series / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Thunder Chestrig Series",
      "slug": "thunder-chestrig-series"
    },
    "colorway": "Multicam Black",
    "display_order": 34,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-09470-x-1.webp"
    ]
  },
  {
    "name": "Black Aim Vortex",
    "slug": "black-aim-vortex",
    "description": "Aim Vortex Rifle Bag / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Aim Vortex Rifle Bag",
      "slug": "aim-vortex-rifle-bag"
    },
    "colorway": "Black",
    "display_order": 35,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-005461.webp"
    ]
  },
  {
    "name": "Multicam Black Aim Vortex",
    "slug": "multicam-black-aim-vortex",
    "description": "Aim Vortex Rifle Bag / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Aim Vortex Rifle Bag",
      "slug": "aim-vortex-rifle-bag"
    },
    "colorway": "Multicam Black",
    "display_order": 36,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-006031.webp"
    ]
  },
  {
    "name": "Black Anaconda",
    "slug": "black-anaconda",
    "description": "Anaconda Backpack / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Anaconda Backpack",
      "slug": "anaconda"
    },
    "colorway": "Black",
    "display_order": 37,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-076341.webp"
    ]
  },
  {
    "name": "Multicam Black Anaconda",
    "slug": "multicam-black-anaconda",
    "description": "Anaconda Backpack / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Anaconda Backpack",
      "slug": "anaconda"
    },
    "colorway": "Multicam Black",
    "display_order": 38,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-096261.webp"
    ]
  },
  {
    "name": "Black Bite Bee",
    "slug": "black-bite-bee",
    "description": "Bite Bee Handbag / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Bite Bee Handbag",
      "slug": "bite-bee-handbag"
    },
    "colorway": "Black",
    "display_order": 39,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-000301.webp"
    ]
  },
  {
    "name": "Multicam Black Bite Bee",
    "slug": "multicam-black-bite-bee",
    "description": "Bite Bee Handbag / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Bite Bee Handbag",
      "slug": "bite-bee-handbag"
    },
    "colorway": "Multicam Black",
    "display_order": 40,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-097811.webp"
    ]
  },
  {
    "name": "Black Mag Pouch",
    "slug": "black-mag-pouch",
    "description": "Rifle Mag Pouch / Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Black",
    "display_order": 41,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-004461.webp"
    ]
  },
  {
    "name": "Multicam Tropic Bite Bee",
    "slug": "multicam-tropic-bite-bee",
    "description": "Bite Bee Handbag / Multicam Tropic",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Bite Bee Handbag",
      "slug": "bite-bee-handbag"
    },
    "colorway": "Multicam Tropic",
    "display_order": 42,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-097921.webp"
    ]
  },
  {
    "name": "Black Cobra Backpack",
    "slug": "black-cobra-backpack",
    "description": "Cobra Backpack / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Cobra Backpack",
      "slug": "cobra-backpack"
    },
    "colorway": "Black",
    "display_order": 43,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-059531.webp"
    ]
  },
  {
    "name": "Green Cobra Backpack",
    "slug": "green-cobra-backpack",
    "description": "Cobra Backpack / Green",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Cobra Backpack",
      "slug": "cobra-backpack"
    },
    "colorway": "Green",
    "display_order": 44,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099621.webp"
    ]
  },
  {
    "name": "Black Dregon Head Backpack",
    "slug": "black-dregon-head-backpack",
    "description": "Dregon Head Backpack / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Dregon Head Backpack",
      "slug": "dregon-head-backpack"
    },
    "colorway": "Black",
    "display_order": 45,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-0746821.webp"
    ]
  },
  {
    "name": "Multicam Black Dregon Head Backpack",
    "slug": "multicam-black-dregon-head-backpack",
    "description": "Dregon Head Backpack / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Dregon Head Backpack",
      "slug": "dregon-head-backpack"
    },
    "colorway": "Multicam Black",
    "display_order": 46,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-097461.webp"
    ]
  },
  {
    "name": "Black Dump Pouch",
    "slug": "black-dump-pouch-2",
    "description": "Dump Pouch / Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Dump Pouch",
      "slug": "dump-pouch"
    },
    "colorway": "Black",
    "display_order": 47,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-065241.webp"
    ]
  },
  {
    "name": "Green Dump Pouch",
    "slug": "green-dump-pouch-2",
    "description": "Dump Pouch / Green",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Dump Pouch",
      "slug": "dump-pouch"
    },
    "colorway": "Green",
    "display_order": 48,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-065171.webp"
    ]
  },
  {
    "name": "Multicam Tropic Dump Pouch",
    "slug": "multicam-tropic-dump-pouch-2",
    "description": "Dump Pouch / Multicam Tropic",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Dump Pouch",
      "slug": "dump-pouch"
    },
    "colorway": "Multicam Tropic",
    "display_order": 49,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099741.webp"
    ]
  },
  {
    "name": "Multicam Dump Pouch",
    "slug": "multicam-dump-pouch-2",
    "description": "Dump Pouch / Multicam",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Dump Pouch",
      "slug": "dump-pouch"
    },
    "colorway": "Multicam",
    "display_order": 50,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-087031.webp"
    ]
  },
  {
    "name": "Royale Dump Pouch",
    "slug": "royale-dump-pouch-2",
    "description": "Dump Pouch / Royale",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Dump Pouch",
      "slug": "dump-pouch"
    },
    "colorway": "Royale",
    "display_order": 51,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-096201.webp"
    ]
  },
  {
    "name": "Multicam Black Dump Pouch",
    "slug": "multicam-black-dump-pouch-2",
    "description": "Dump Pouch / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Dump Pouch",
      "slug": "dump-pouch"
    },
    "colorway": "Multicam Black",
    "display_order": 52,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-065261.webp"
    ]
  },
  {
    "name": "Black Fabric Holster",
    "slug": "black-fabric-holster-2",
    "description": "Fabric Holster / Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Fabric Holster",
      "slug": "fabric-holster"
    },
    "colorway": "Black",
    "display_order": 53,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-087601.webp"
    ]
  },
  {
    "name": "Royale Fabric Holster",
    "slug": "royale-fabric-holster-2",
    "description": "Fabric Holster / Royale",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Fabric Holster",
      "slug": "fabric-holster"
    },
    "colorway": "Royale",
    "display_order": 54,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-088891.webp"
    ]
  },
  {
    "name": "Multicam Black Fabric Holster",
    "slug": "multicam-black-fabric-holster-2",
    "description": "Fabric Holster / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Fabric Holster",
      "slug": "fabric-holster"
    },
    "colorway": "Multicam Black",
    "display_order": 55,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-089381.webp"
    ]
  },
  {
    "name": "Multicam Tropic Rifle Mag Pouch",
    "slug": "multicam-tropic-rifle-mag-pouch",
    "description": "Rifle Mag Pouch / Multicam Tropic",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Multicam Tropic",
    "display_order": 56,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-089591.webp"
    ]
  },
  {
    "name": "Multicam Fabric Holster",
    "slug": "multicam-fabric-holster",
    "description": "Fabric Holster / Multicam",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Fabric Holster",
      "slug": "fabric-holster"
    },
    "colorway": "Multicam",
    "display_order": 57,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-089611.webp"
    ]
  },
  {
    "name": "Multicam Rifle Mag Pouch",
    "slug": "multicam-rifle-mag-pouch",
    "description": "Rifle Mag Pouch / Multicam",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Multicam",
    "display_order": 58,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-059951.webp"
    ]
  },
  {
    "name": "Green HG Double Mag Pouch",
    "slug": "green-hg-double-mag-pouch-2",
    "description": "Handgun Double Mag Pouch / Green",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Handgun Double Mag Pouch",
      "slug": "handgun-double-mag-pouch"
    },
    "colorway": "Green",
    "display_order": 59,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-059821.webp"
    ]
  },
  {
    "name": "Multicam Black Rifle Mag Pouch",
    "slug": "multicam-black-rifle-mag-pouch",
    "description": "Rifle Mag Pouch / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Multicam Black",
    "display_order": 60,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-060291.webp"
    ]
  },
  {
    "name": "Multicam Tropic HG Double Mag Pouch",
    "slug": "multicam-tropic-hg-double-mag-pouch-2",
    "description": "Handgun Double Mag Pouch / Multicam Tropic",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Handgun Double Mag Pouch",
      "slug": "handgun-double-mag-pouch"
    },
    "colorway": "Multicam Tropic",
    "display_order": 61,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099931.webp"
    ]
  },
  {
    "name": "Royale HG Double Mag Pouch",
    "slug": "royale-hg-double-mag-pouch-2",
    "description": "Handgun Double Mag Pouch / Royale",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Handgun Double Mag Pouch",
      "slug": "handgun-double-mag-pouch"
    },
    "colorway": "Royale",
    "display_order": 62,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-060101.webp"
    ]
  },
  {
    "name": "Multicam HG Double Mag Pouch",
    "slug": "multicam-hg-double-mag-pouch-2",
    "description": "Handgun Double Mag Pouch / Multicam",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Handgun Double Mag Pouch",
      "slug": "handgun-double-mag-pouch"
    },
    "colorway": "Multicam",
    "display_order": 63,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099811.webp"
    ]
  },
  {
    "name": "Black Rifle Mag Pouch",
    "slug": "black-rifle-mag-pouch-2",
    "description": "Rifle Mag Pouch / Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Black",
    "display_order": 64,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-060381.webp"
    ]
  },
  {
    "name": "Royale Rifle Mag Pouch",
    "slug": "royale-rifle-mag-pouch",
    "description": "Rifle Mag Pouch / Royale",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Royale",
    "display_order": 65,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-060681.webp",
      "/storefront/figma/catalogue/open/gjh-060511.webp"
    ]
  },
  {
    "name": "Multicam Black Rifle Mag Pouch",
    "slug": "multicam-black-rifle-mag-pouch-2",
    "description": "Rifle Mag Pouch / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Multicam Black",
    "display_order": 67,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-060831.webp"
    ]
  },
  {
    "name": "Multicam Tropic Rifle Mag Pouch",
    "slug": "multicam-tropic-rifle-mag-pouch-2",
    "description": "Rifle Mag Pouch / Multicam Tropic",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Multicam Tropic",
    "display_order": 68,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099891.webp"
    ]
  },
  {
    "name": "Multicam Rifle Mag Pouch",
    "slug": "multicam-rifle-mag-pouch-2",
    "description": "Rifle Mag Pouch / Multicam",
    "price": null,
    "regional_prices": {},
    "category": "accessories",
    "series": {
      "name": "Rifle Mag Pouch",
      "slug": "rifle-mag-pouch"
    },
    "colorway": "Multicam",
    "display_order": 69,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-099761.webp"
    ]
  },
  {
    "name": "Black Snake Head Sling Bag",
    "slug": "black-snake-head-sling-bag-2",
    "description": "Snake Head Sling Bag / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Snake Head Sling Bag",
      "slug": "snake-head-sling-bag"
    },
    "colorway": "Black",
    "display_order": 70,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-078841.webp"
    ]
  },
  {
    "name": "Royale Snake Head Sling Bag",
    "slug": "royale-snake-head-sling-bag-2",
    "description": "Snake Head Sling Bag / Royale",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Snake Head Sling Bag",
      "slug": "snake-head-sling-bag"
    },
    "colorway": "Royale",
    "display_order": 71,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-003981.webp"
    ]
  },
  {
    "name": "Multicam Black Snake Head Sling Bag",
    "slug": "multicam-black-snake-head-sling-bag-2",
    "description": "Snake Head Sling Bag / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Snake Head Sling Bag",
      "slug": "snake-head-sling-bag"
    },
    "colorway": "Multicam Black",
    "display_order": 72,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-090721.webp"
    ]
  },
  {
    "name": "Multicam Black Wolven Messenger Bag",
    "slug": "multicam-black-wolven-messenger-bag-2",
    "description": "Wolven Messenger Bag / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Wolven Messenger Bag",
      "slug": "wolven-messenger-bag"
    },
    "colorway": "Multicam Black",
    "display_order": 73,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-096321.webp"
    ]
  },
  {
    "name": "Royal Cobra",
    "slug": "royal-cobra",
    "description": "Cobra Series / Royal",
    "price": null,
    "regional_prices": {},
    "category": "vest",
    "series": {
      "name": "Cobra Series",
      "slug": "cobra-series"
    },
    "colorway": "Royal",
    "display_order": 74,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-008231.webp"
    ]
  },
  {
    "name": "Black Wolven Messenger Bag",
    "slug": "black-wolven-messenger-bag-2",
    "description": "Wolven Messenger Bag / Black",
    "price": null,
    "regional_prices": {},
    "category": "pack",
    "series": {
      "name": "Wolven Messenger Bag",
      "slug": "wolven-messenger-bag"
    },
    "colorway": "Black",
    "display_order": 75,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-095841.webp"
    ]
  },
  {
    "name": "Black Rattle Belt",
    "slug": "black-rattle-belt-2",
    "description": "Rattle Belt / Black",
    "price": null,
    "regional_prices": {},
    "category": "belt",
    "series": {
      "name": "Rattle Belt",
      "slug": "rattle-belt"
    },
    "colorway": "Black",
    "display_order": 76,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-055901.webp"
    ]
  },
  {
    "name": "Black Trojan Pro Warbelt",
    "slug": "black-trojan-pro-warbelt-2",
    "description": "Trojan Pro Warbelt / Black",
    "price": null,
    "regional_prices": {},
    "category": "belt",
    "series": {
      "name": "Trojan Pro Warbelt",
      "slug": "trojan-pro-warbelt"
    },
    "colorway": "Black",
    "display_order": 77,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-087311.webp"
    ]
  },
  {
    "name": "Green Trojan Pro Warbelt",
    "slug": "green-trojan-pro-warbelt-2",
    "description": "Trojan Pro Warbelt / Green",
    "price": null,
    "regional_prices": {},
    "category": "belt",
    "series": {
      "name": "Trojan Pro Warbelt",
      "slug": "trojan-pro-warbelt"
    },
    "colorway": "Green",
    "display_order": 78,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/gjh-097351.webp"
    ]
  },
  {
    "name": "Multicam Black Trojan Pro Warbelt",
    "slug": "multicam-black-trojan-pro-warbelt-2",
    "description": "Trojan Pro Warbelt / Multicam Black",
    "price": null,
    "regional_prices": {},
    "category": "belt",
    "series": {
      "name": "Trojan Pro Warbelt",
      "slug": "trojan-pro-warbelt"
    },
    "colorway": "Multicam Black",
    "display_order": 79,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-065791.webp"
    ]
  },
  {
    "name": "Royale Trojan Pro Warbelt",
    "slug": "royale-trojan-pro-warbelt-2",
    "description": "Trojan Pro Warbelt / Royale",
    "price": null,
    "regional_prices": {},
    "category": "belt",
    "series": {
      "name": "Trojan Pro Warbelt",
      "slug": "trojan-pro-warbelt"
    },
    "colorway": "Royale",
    "display_order": 80,
    "specifications": [],
    "images": [
      "/storefront/figma/catalogue/open/dsc-086121.webp"
    ]
  }
];
