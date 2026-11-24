import React from "react";
import Link from "next/link";
import {
  Baby,
  Sparkles,
  ShieldAlert,
  Droplets,
  HeartHandshake,
  Sun,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    id: "tape-diapers",
    title: "Baby Tape Diapers",
    brands: "MumBuds USA & Bambo Nature",
    description:
      "Full spectrum tape diapers ranging from Newborn (22 pcs) up to XXL (34 pcs) and Bambo Nature Size 1 to Size 6 with leak guards.",
    icon: Baby,
    spec: "Sizes: NB, S, M, L, XL, XXL & Sizes 1–6",
    link: "/products?category=tape-diapers",
  },
  {
    id: "pants-diapers",
    title: "Baby Pants Diapers",
    brands: "MumBuds USA & Bambo Nature",
    description:
      "All-around flexible 360° elastic waistband pull-up training diapers for active toddlers and infants on the move.",
    icon: Sparkles,
    spec: "Sizes: M, L, XL, XXL & Sizes 4–6",
    link: "/products?category=pants-diapers",
  },
  {
    id: "period-panties",
    title: "Disposable Period Panties",
    brands: "MumBuds USA",
    description:
      "660 mm extended length disposable menstrual pants offering 360° leak protection and breathable overnight comfort.",
    icon: HeartHandshake,
    spec: "M/L (60–105 cm) & L/XL (70–120 cm) | 3 pcs",
    link: "/products?category=period-panties",
  },
  {
    id: "wipes",
    title: "Pure Water & Wet Wipes",
    brands: "MumBuds USA & Bambo Nature",
    description:
      "Formulated with gentle cleansing bases. MumBuds 100-pack pure water wipes and Bambo Nature fragrance-free 50-pack.",
    icon: Droplets,
    spec: "Packs of 100 pcs & 50 pcs",
    link: "/products?category=wipes",
  },
  {
    id: "skincare",
    title: "Baby Skincare & Cleansing",
    brands: "Bambo Nature Denmark",
    description:
      "Dermatologically tested tear-free Hair & Body Wash (150 ml), Soothing Cream (100 ml), and infant Baby Oil (100 ml).",
    icon: Sparkles,
    spec: "Gentle Scandinavian dermatological care",
    link: "/products?category=skincare",
  },
  {
    id: "sun-protection",
    title: "Sun & Maternal Hygiene",
    brands: "Bambo Nature & Abena",
    description:
      "BAMBO Sunscreen SPF50 (100 ml) for gentle infant UV protection and Abena anatomically shaped Maternity Pads (15 pcs).",
    icon: Sun,
    spec: "SPF50 High Protection & Abena Postpartum",
    link: "/products?category=sun-protection",
  },
];

export default function ProductCategoryShowcase() {
  return (
    <section className="py-20 bg-sand-50/60 border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-700 bg-sage-100/80 px-3 py-1 rounded-full">
              Product Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
              Essential Care Across Every Baby & Maternal Milestone
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore the complete range imported and distributed by Shreesha Incorporated,
              adhering strictly to international safety and packaging specifications.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-corporate-800 hover:text-corporate-950 group"
          >
            Explore Complete Catalogue
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.link}
                className="scandi-card p-6 sm:p-7 flex flex-col justify-between group hover:border-corporate-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sand-100 flex items-center justify-center text-corporate-900 group-hover:bg-corporate-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sage-700">
                      {cat.brands}
                    </span>
                    <h3 className="text-xl font-display font-bold text-corporate-950 mt-0.5 group-hover:text-corporate-700 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-sand-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{cat.spec}</span>
                  <span className="text-corporate-800 font-bold group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
