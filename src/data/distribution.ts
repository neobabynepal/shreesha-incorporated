export interface DistributionStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface PartnerChannel {
  title: string;
  role: string;
  coverage: string;
  description: string;
}

export interface LocalPartner {
  name: string;
  category: string;
  location: string;
  logo?: string;
}

export const distributionSteps: DistributionStep[] = [
  {
    step: "01",
    title: "International Importation",
    description:
      "Direct authorized consignment import of MumBuds USA and Bambo Nature Denmark inventory conforming to standard international safety specifications.",
    icon: "Ship",
  },
  {
    step: "02",
    title: "Central Warehousing & Quality Inspection",
    description:
      "Centrally handled at Maharajgunj, Kathmandu with strict batch control, hygiene preservation, and proper humidity-controlled product storage.",
    icon: "Warehouse",
  },
  {
    step: "03",
    title: "Nationwide Logistics Dispatch",
    description:
      "Scheduled fulfillment across Kathmandu Valley and delivery routing to retail distributors across all seven provinces of Nepal.",
    icon: "Truck",
  },
  {
    step: "04",
    title: "Retail, Pharmacy & Consumer Access",
    description:
      "Stocked on shelves of leading baby care boutiques, pharmacies, hospital retail outlets, supermarkets, and verified partner stores.",
    icon: "Store",
  },
];

export const partnerChannels: PartnerChannel[] = [
  {
    title: "Pharmacies & Healthcare Outlets",
    role: "Clinical & Hygiene Supply",
    coverage: "Nationwide Hospitals & Community Pharmacies",
    description:
      "Supplying hypoallergenic baby diapers, Abena maternity pads, and dermatologically tested skincare products to healthcare institutions and pharmacies.",
  },
  {
    title: "Specialty Baby Boutiques",
    role: "Premium Mother & Child Retail",
    coverage: "Kathmandu Valley, Pokhara, Chitwan, Butwal & Major Cities",
    description:
      "Dedicated shelf presence across premier baby care stores offering parents complete sizing selections in MumBuds and Bambo Nature.",
  },
  {
    title: "Wholesale & Regional Distributors",
    role: "B2B Bulk Supply",
    coverage: "All 7 Provinces Across Nepal",
    description:
      "Supplying regional stockists and trade merchants with dependable delivery timelines, transparent documentation, and authentic brand inventory.",
  },
  {
    title: "Modern Trade & Department Stores",
    role: "Everyday Consumer Convenience",
    coverage: "Supermarkets & Retail Chains",
    description:
      "Making water wipes, pants diapers, and personal hygiene essentials readily available for modern families shopping daily.",
  },
];

export const verifiedRetailers: LocalPartner[] = [
  { name: "Baby Land", category: "Baby Care Specialty", location: "Kathmandu" },
  { name: "Kids Pasal", category: "Infant Care & Toys", location: "Kathmandu" },
  { name: "Kids Kottage", category: "Baby Store", location: "Kathmandu" },
  { name: "Baby Essentials Hub", category: "Mother & Baby", location: "Kathmandu" },
  { name: "NeoBuds", category: "Baby & Toddler Boutique", location: "Kathmandu" },
  { name: "Royal Kids", category: "Children's Store", location: "Kathmandu" },
  { name: "Zero to Ten", category: "Kids & Maternity", location: "Kathmandu" },
  { name: "StarKids", category: "Baby Gear & Care", location: "Kathmandu" },
];
