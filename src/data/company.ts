export interface CompanyInfo {
  name: string;
  legalName: string;
  businessType: string;
  headquarters: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  marketServed: string;
  representedBrands: {
    name: string;
    origin: string;
    website: string;
  }[];
  vision: string;
  mission: string[];
  positioning: string;
  operations: {
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Shreesha Incorporated",
  legalName: "Shreesha Incorporated Pvt. Ltd.",
  businessType: "Importer and national distributor",
  headquarters: "Maharajgunj-3, Kathmandu, Nepal",
  address: "Maharajgunj-3, Kathmandu, Nepal",
  phone: "9826278287",
  phoneFormatted: "+977 9826278287",
  email: "shreeshaincorporated@gmail.com",
  marketServed: "Nepal (Nationwide)",
  representedBrands: [
    {
      name: "MumBuds USA",
      origin: "United States",
      website: "https://mumbudsnepal.com/",
    },
    {
      name: "Bambo Nature",
      origin: "Denmark",
      website: "https://bambo.com/",
    },
  ],
  vision:
    "To become a leading and trusted importer and national distributor of international baby-care, maternal-care, and hygiene brands in Nepal, making quality products accessible to families throughout the country.",
  mission: [
    "Introduce internationally recognized baby-care and hygiene brands to the Nepali market.",
    "Support nationwide availability of MumBuds USA and Bambo Nature products.",
    "Build a reliable and efficient distribution network throughout Nepal.",
    "Develop long-term partnerships with retailers, wholesalers, and business associates.",
    "Expand access to baby, maternal, and personal-care products across different regions of Nepal.",
    "Establish strong and sustainable representation for the international brands the company distributes.",
  ],
  positioning:
    "Shreesha Incorporated Pvt. Ltd. is an import-focused distribution company representing MumBuds USA and Bambo Nature in Nepal. Its portfolio combines MumBuds baby tape diapers, pants diapers, period panties, and premium water wipes with Bambo Nature tape diapers, pants diapers, sunscreen, wet wipes, hair and body wash, soothing cream, baby oil, and Abena maternity pads. The company's central role is to connect international brands and their product ranges with Nepal's retail, wholesale, and consumer markets. It is positioned as an importer and national distributor, rather than as a manufacturer or a single-brand retailer.",
  operations: [
    {
      title: "International Product Importation",
      description:
        "The company imports products from its represented international brands, MumBuds USA and Bambo Nature, for supply to the Nepali market.",
    },
    {
      title: "National Distribution",
      description:
        "As the national distributor of both brands, Shreesha Incorporated manages the distribution of their products across Nepal.",
    },
    {
      title: "Wholesale & Retail Supply",
      description:
        "The company serves retailers, wholesalers, pharmacies, baby-product stores, and other relevant business partners.",
    },
    {
      title: "Brand Representation",
      description:
        "The company acts as the distribution channel for both brands in Nepal and supports their availability and market presence.",
    },
  ],
};
