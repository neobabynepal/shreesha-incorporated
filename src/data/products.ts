export type BrandId = "mumbuds" | "bambo-nature";

export type ProductCategory =
  | "tape-diapers"
  | "pants-diapers"
  | "period-panties"
  | "wipes"
  | "skincare"
  | "cleansing"
  | "sun-protection"
  | "maternal-hygiene";

export interface ProductVariant {
  productCode?: string;
  size: string;
  weightRange?: string;
  waistRange?: string;
  length?: string;
  packCount: string;
  cartonPack?: string; // Pkt/Ctn from official packing schedule
  mrp?: string; // Optional MRP if provided
  notes?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brandId: BrandId;
  brandName: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  variants: ProductVariant[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const categoryLabels: Record<ProductCategory, string> = {
  "tape-diapers": "Tape Diapers",
  "pants-diapers": "Pants Diapers",
  "period-panties": "Period Panties",
  wipes: "Wet & Water Wipes",
  skincare: "Baby Skincare",
  cleansing: "Cleansing Care",
  "sun-protection": "Sun Protection",
  "maternal-hygiene": "Maternal Hygiene",
};

export const productsData: ProductItem[] = [
  // --- MUMBUDS USA PRODUCTS ---
  {
    id: "mumbuds-tape-diapers",
    name: "Disposable MumBuds Zip-lock Baby Tape Diapers",
    brandId: "mumbuds",
    brandName: "MumBuds USA",
    category: "tape-diapers",
    categoryLabel: "Tape Diapers",
    shortDescription:
      "Premium zip-lock packaging tape baby diapers engineered for maximum comfort, reliable leakage barriers, and gentle softness across all newborn and growing baby stages.",
    variants: [
      {
        productCode: "Disposable MumBuds Zip-lock Baby Tape Diaper NB22",
        size: "Newborn (NB)",
        weightRange: "2–5 kg / 4–11 lbs",
        packCount: "22 pcs",
        cartonPack: "10 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Tape Diaper S42",
        size: "Small (S)",
        weightRange: "4–8 kg / 9–18 lbs",
        packCount: "42 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Tape Diaper M40",
        size: "Medium (M)",
        weightRange: "7–12 kg / 15–26 lbs",
        packCount: "40 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Tape Diaper L38",
        size: "Large (L)",
        weightRange: "9–14 kg / 20–31 lbs",
        packCount: "38 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Tape Diaper XL36",
        size: "Extra Large (XL)",
        weightRange: "12–17 kg / 26–37 lbs",
        packCount: "36 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Tape Diaper XXL34",
        size: "Extra Extra Large (XXL)",
        weightRange: "16–22 kg / 35–48 lbs",
        packCount: "34 pcs",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "MumBuds USA" },
      { label: "Packaging Type", value: "Hygienic Reusable Zip-lock Pack" },
      { label: "Available Sizes", value: "NB, S, M, L, XL, XXL" },
      { label: "Carton Packaging", value: "10 packets (NB) / 6 packets (S–XXL)" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "mumbuds-pants-diapers",
    name: "Disposable MumBuds Zip-lock Baby Pant Diapers",
    brandId: "mumbuds",
    brandName: "MumBuds USA",
    category: "pants-diapers",
    categoryLabel: "Pants Diapers",
    shortDescription:
      "Easy pull-up pants style diapers with an all-around 360° flexible elastic waistband and zip-lock freshness packaging, tailored for active infants and toddlers.",
    variants: [
      {
        productCode: "Disposable MumBuds Zip-lock Baby Pant Diaper M40",
        size: "Medium (M)",
        weightRange: "7–12 kg / 15–26 lbs",
        packCount: "40 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Pant Diaper L38",
        size: "Large (L)",
        weightRange: "9–14 kg / 20–31 lbs",
        packCount: "38 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Pant Diaper XL36",
        size: "Extra Large (XL)",
        weightRange: "12–17 kg / 26–37 lbs",
        packCount: "36 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Zip-lock Baby Pant Diaper XXL34",
        size: "Extra Extra Large (XXL)",
        weightRange: "16–22 kg / 35–48 lbs",
        packCount: "34 pcs",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "MumBuds USA" },
      { label: "Style", value: "360° Elastic Pull-Up Pant" },
      { label: "Packaging Type", value: "Hygienic Zip-lock Pack" },
      { label: "Carton Packaging", value: "6 packets per carton" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "mumbuds-period-panties",
    name: "Disposable MumBuds Sanitary Period Panties",
    brandId: "mumbuds",
    brandName: "MumBuds USA",
    category: "period-panties",
    categoryLabel: "Period Panties",
    shortDescription:
      "High-absorbency disposable menstrual period panties offering 660 mm full anatomical coverage, 360-degree leak protection, and breathable overnight comfort.",
    variants: [
      {
        productCode: "Disposable MumBuds Sanitary Period Panty M/L3",
        size: "M/L",
        length: "660 mm",
        waistRange: "60–105 cm",
        packCount: "3 pcs",
        cartonPack: "36 pkt/ctn",
      },
      {
        productCode: "Disposable MumBuds Sanitary Period Panty L/XL3",
        size: "L/XL",
        length: "660 mm",
        waistRange: "70–120 cm",
        packCount: "3 pcs",
        cartonPack: "36 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "MumBuds USA" },
      { label: "Product Type", value: "Disposable Sanitary Period Panty" },
      { label: "Coverage", value: "660 mm Extended Length" },
      { label: "Pack Size", value: "3 pieces per pack" },
      { label: "Carton Packaging", value: "36 packets per carton" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "mumbuds-premium-water-wipes",
    name: "MumBuds Baby Wipes (100% Pure Water)",
    brandId: "mumbuds",
    brandName: "MumBuds USA",
    category: "wipes",
    categoryLabel: "Wet & Water Wipes",
    shortDescription:
      "Ultra-soft, pure water-based cleansing wipes formulated for baby's delicate and sensitive skin, ideal for diaper changes, face, and hand cleaning.",
    variants: [
      {
        productCode: "MumBuds baby Wipes",
        size: "Standard Pack",
        packCount: "100 pcs",
        cartonPack: "10 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "MumBuds USA" },
      { label: "Product Type", value: "Water-Based Baby Cleansing Wipes" },
      { label: "Pack Quantity", value: "100 wipes per pack" },
      { label: "Carton Packaging", value: "10 packets per carton" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },

  // --- BAMBO NATURE PRODUCTS ---
  {
    id: "bambo-nature-tape-diapers",
    name: "Bambo Nature Eco-Conscious Tape Diapers",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "tape-diapers",
    categoryLabel: "Tape Diapers",
    shortDescription:
      "Danish premium eco-friendly baby tape diapers, crafted with breathable materials to minimize diaper rash and maintain natural skin health.",
    variants: [
      {
        productCode: "Bambo Nature Baby Diaper Tape Size 1 XS",
        size: "Size 1 (XS)",
        weightRange: "2–4 kg",
        packCount: "22 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Tape Size 2 S",
        size: "Size 2 (S)",
        weightRange: "3–6 kg",
        packCount: "30 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Tape Size 3 M",
        size: "Size 3 (M)",
        weightRange: "4–8 kg",
        packCount: "28 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Tape Size 4 L",
        size: "Size 4 (L)",
        weightRange: "7–14 kg",
        packCount: "24 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Tape Size 5 XL",
        size: "Size 5 (XL)",
        weightRange: "12–18 kg",
        packCount: "22 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Tape Size 6 XXL",
        size: "Size 6 (XXL)",
        weightRange: "16+ kg",
        packCount: "20 pcs",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Origin", value: "Denmark (Abena Group)" },
      { label: "Product Type", value: "Dermatologically Tested Tape Diapers" },
      { label: "Available Sizes", value: "Size 1 (XS) to Size 6 (XXL)" },
      { label: "Carton Packaging", value: "6 packets per carton" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "bambo-nature-pants-diapers",
    name: "Bambo Nature Eco-Conscious Pants Diapers",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "pants-diapers",
    categoryLabel: "Pants Diapers",
    shortDescription:
      "Flexible, ultra-absorbent pull-up pants diapers designed for active infants and toddlers, combining Danish eco-design with leakage barriers.",
    variants: [
      {
        productCode: "Bambo Nature Baby Diaper Pants Size 4 L",
        size: "Size 4 (L)",
        weightRange: "7–12 kg",
        packCount: "20 pcs",
        cartonPack: "6 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Pants Size 5 XL",
        size: "Size 5 (XL)",
        weightRange: "11–17 kg",
        packCount: "19 pcs",
        cartonPack: "5 pkt/ctn",
      },
      {
        productCode: "Bambo Nature Baby Diaper Pants Size 6 XXL",
        size: "Size 6 (XXL)",
        weightRange: "15+ kg",
        packCount: "18 pcs",
        cartonPack: "5 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Origin", value: "Denmark (Abena Group)" },
      { label: "Product Type", value: "Pull-Up Training Pants" },
      { label: "Available Sizes", value: "Size 4 (L), Size 5 (XL), Size 6 (XXL)" },
      { label: "Carton Packaging", value: "6 pkts/ctn (Size 4) / 5 pkts/ctn (Size 5–6)" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "bambo-plastic-free-wet-wipes",
    name: "Bambo Nature Plastic-Free Wet Wipes",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "wipes",
    categoryLabel: "Wet & Water Wipes",
    shortDescription:
      "Gentle, fragrance-free, 100% plastic-free biodegradable wet wipes manufactured with soft materials, safe for everyday skin hydration and cleaning from day one.",
    variants: [
      {
        productCode: "Bambo Nature Plastic-Free Wet Wipes",
        size: "Standard Pack",
        packCount: "50 pcs",
        cartonPack: "14 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Category", value: "Plastic-Free Wet Wipes" },
      { label: "Pack Size", value: "50 pieces" },
      { label: "Carton Packaging", value: "14 packets per carton" },
      { label: "Properties", value: "100% plastic-free, fragrance-free, sensitive skin safe" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "bambo-baby-oil",
    name: "Bambo Nature Baby Oil",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "skincare",
    categoryLabel: "Baby Skincare",
    shortDescription:
      "Nourishing, dermatologically formulated baby body oil for moisturizing infant massage, bath hydration, and cradle cap softening.",
    variants: [
      {
        productCode: "Bambo Nature Baby Oil",
        size: "100 ml Bottle",
        packCount: "100 ml",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Category", value: "Baby Oil / Massage" },
      { label: "Volume / Size", value: "100 ml" },
      { label: "Carton Packaging", value: "6 packets per carton" },
      { label: "Usage", value: "Infant massage, bath water additive, skin softening" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "bambo-hair-and-body-wash",
    name: "Bambo Nature Hair & Body Wash",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "cleansing",
    categoryLabel: "Cleansing Care",
    shortDescription:
      "Tear-free, mild cleansing wash for baby's hair and sensitive scalp, balancing natural moisture with Scandinavian quality standards.",
    variants: [
      {
        productCode: "Bambo Nature Hair & Body Wash",
        size: "150 ml Bottle",
        packCount: "150 ml",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Category", value: "Cleansing / Bath" },
      { label: "Volume / Size", value: "150 ml" },
      { label: "Carton Packaging", value: "6 packets per carton" },
      { label: "Formula", value: "Tear-free, mild baby cleansing" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "bambo-sunscreen-spf50",
    name: "Bambo Nature Sunscreen SPF50",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "sun-protection",
    categoryLabel: "Sun Protection",
    shortDescription:
      "High-protection broad spectrum SPF50 mineral sunscreen formulated specifically for delicate infant and children's skin.",
    variants: [
      {
        productCode: "Bambo Nature Sunscreen SPF50",
        size: "100 ml Tube",
        packCount: "100 ml",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Category", value: "Sun Protection" },
      { label: "Volume / Size", value: "100 ml" },
      { label: "SPF Factor", value: "SPF 50 High Protection" },
      { label: "Carton Packaging", value: "6 packets per carton" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "abena-maternity-pads",
    name: "Abena Maternity Pads Premium",
    brandId: "bambo-nature",
    brandName: "Bambo Nature / Abena",
    category: "maternal-hygiene",
    categoryLabel: "Maternal Hygiene",
    shortDescription:
      "Anatomically shaped premium postpartum maternity pads from Denmark's Abena healthcare group, engineered for high absorbency and postnatal recovery.",
    variants: [
      {
        productCode: "Abena Maternity Pads Premium",
        size: "Postpartum Maternity Pack",
        packCount: "15 pcs",
        cartonPack: "18 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Abena / Bambo Nature" },
      { label: "Origin", value: "Denmark" },
      { label: "Category", value: "Maternal Hygiene / Postpartum Care" },
      { label: "Pack Size", value: "15 pieces" },
      { label: "Carton Packaging", value: "18 packets per carton" },
      { label: "Design", value: "Anatomically shaped with side barriers" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
  {
    id: "bambo-soothing-cream",
    name: "Bambo Nature Soothing Cream",
    brandId: "bambo-nature",
    brandName: "Bambo Nature",
    category: "skincare",
    categoryLabel: "Baby Skincare",
    shortDescription:
      "Protective and restorative soothing barrier cream designed to calm irritated patches, red cheeks, and diaper zone sensitive skin.",
    variants: [
      {
        productCode: "Bambo Nature Soothing Cream",
        size: "100 ml Tube",
        packCount: "100 ml",
        cartonPack: "6 pkt/ctn",
      },
    ],
    specifications: [
      { label: "Brand", value: "Bambo Nature" },
      { label: "Category", value: "Baby Skincare" },
      { label: "Volume / Size", value: "100 ml" },
      { label: "Carton Packaging", value: "6 packets per carton" },
      { label: "Skin Zone", value: "Diaper area and dry sensitive skin patches" },
      { label: "Official Distributor", value: "Shreesha Incorporated Pvt. Ltd." },
    ],
  },
];
