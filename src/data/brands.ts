export interface Brand {
  id: "mumbuds" | "bambo-nature";
  name: string;
  origin: string;
  tagline: string;
  description: string;
  website: string;
  logo: string;
  badge: string;
  accentColor: string;
  categories: string[];
  highlights: string[];
}

export const brandsData: Brand[] = [
  {
    id: "mumbuds",
    name: "MumBuds USA",
    origin: "United States",
    tagline: "Everyday Baby Hygiene & Personal Care Essentials",
    description:
      "MumBuds offers baby hygiene and personal care products, including tape diapers, pants diapers, period panties, and premium water wipes. Its portfolio serves everyday baby-care and selected personal-hygiene needs across households.",
    website: "https://mumbudsnepal.com/",
    logo: "/images/mumbuds-logo.png",
    badge: "USA Brand Portfolio",
    accentColor: "from-blue-600 to-indigo-800",
    categories: ["Tape Diapers", "Pants Diapers", "Period Panties", "Premium Water Wipes"],
    highlights: [
      "Tape diapers with full size coverage from Newborn to XXL",
      "Elastic waist pants diapers for active toddlers (M to XXL)",
      "High-absorbency period panties with ergonomic 660 mm coverage",
      "99% Pure water wipes (100 wipes/pack) for gentle skin care",
    ],
  },
  {
    id: "bambo-nature",
    name: "Bambo Nature",
    origin: "Denmark (Abena Group)",
    tagline: "Eco-Conscious Scandinavian Baby & Maternal Care",
    description:
      "Bambo Nature is a Danish baby-care brand with a product portfolio covering tape diapers, pants diapers, skincare, cleansing, sun protection, and maternal hygiene. Renowned internationally for gentle skin compatibility and eco-conscious design.",
    website: "https://bambo.com/",
    logo: "/images/bambo-logo.png",
    badge: "Danish Heritage",
    accentColor: "from-emerald-700 to-teal-900",
    categories: [
      "Tape Diapers",
      "Pants Diapers",
      "Baby Skincare",
      "Cleansing Products",
      "Sun Protection",
      "Maternal Hygiene",
    ],
    highlights: [
      "Danish certified dermatologically tested tape diapers (Sizes 1-6)",
      "Breathable pants diapers for comfortable motion (Sizes 4-6)",
      "Certified organic soothing cream, baby oil & tear-free hair/body wash",
      "Abena maternity pads providing comprehensive postpartum care",
    ],
  },
];
