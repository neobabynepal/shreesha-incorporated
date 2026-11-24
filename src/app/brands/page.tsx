import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Baby,
  Droplets,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { brandsData } from "@/data/brands";

export const metadata: Metadata = {
  title: "Our Represented Brands | MumBuds USA & Bambo Nature in Nepal",
  description:
    "Explore the official product ranges of MumBuds USA and Bambo Nature Denmark, imported and distributed exclusively across Nepal by Shreesha Incorporated Pvt. Ltd.",
};

export default function BrandsPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-corporate-800 text-white py-16 lg:py-24 border-b border-corporate-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Globe2 className="w-3.5 h-3.5 text-white" />
              <span>International Brand Representation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Our Represented Brands
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              Shreesha Incorporated Pvt. Ltd. connects international manufacturers of
              distinction with Nepal&apos;s healthcare, wholesale, and retail distribution
              networks.
            </p>
          </div>
        </div>
      </section>

      {/* Brand 1: MumBuds USA */}
      <section id="mumbuds" className="py-20 bg-white border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-sand-50 rounded-3xl p-6 border border-sand-200 shadow-soft relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-corporate-100 text-corporate-900 font-semibold">
                    USA Brand Portfolio
                  </span>
                  <a
                    href="https://mumbudsnepal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-corporate-800 hover:text-corporate-950"
                  >
                    mumbudsnepal.com <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white flex items-center justify-center p-4 border border-sand-100">
                  <Image
                    src="/images/brands/mumbuds-diaper.png"
                    alt="MumBuds USA Baby Diapers"
                    width={400}
                    height={300}
                    className="object-contain max-h-full"
                  />
                </div>

                <div className="mt-4 p-3 rounded-xl bg-corporate-50 border border-corporate-100 text-xs text-corporate-800 flex items-center justify-between">
                  <span className="font-semibold">Tape & Pants Diaper Packaging</span>
                  <span className="font-bold">NB to XXL</span>
                </div>
              </div>
            </div>

            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-corporate-800" />
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-700">
                    United States • Baby Hygiene & Personal Care
                  </span>
                </div>
                <div className="h-16 flex items-center">
                  <Image
                    src="/images/mumbuds-logo.png"
                    alt="MumBuds USA"
                    width={220}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-base text-slate-600 font-medium">
                  Everyday baby hygiene and personal care essentials built for active protection and comfort.
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                MumBuds offers baby hygiene and personal care products, including tape diapers,
                pants diapers, period panties, and premium water wipes. Its portfolio serves
                everyday baby-care and selected personal-hygiene needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-sand-50/70 border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Tape Diapers (NB – XXL)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Newborn (22 pcs), Small (42 pcs), Medium (40 pcs), Large (38 pcs), XL (36 pcs), XXL (34 pcs).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sand-50/70 border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Pants Diapers (M – XXL)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Medium (40 pcs), Large (38 pcs), Extra Large (36 pcs), Extra Extra Large (34 pcs).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sand-50/70 border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Period Panties
                  </h4>
                  <p className="text-xs text-slate-600">
                    660 mm length disposable pants. M/L (60–105 cm) & L/XL (70–120 cm) in 3 pcs packs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sand-50/70 border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Premium Water Wipes
                  </h4>
                  <p className="text-xs text-slate-600">
                    100 wipes per pack formulated for gentle daily cleaning and delicate skin hydration.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/products?brand=mumbuds"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-corporate-800 text-white text-xs font-bold uppercase tracking-wider shadow-soft hover:bg-corporate-900 transition-all"
                >
                  View MumBuds Catalogue
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>

                <a
                  href="https://mumbudsnepal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-corporate-900 text-xs font-bold uppercase tracking-wider transition-all border border-sand-300"
                >
                  Official Nepal Website
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand 2: Bambo Nature (UI layout matching MumBuds) */}
      <section id="bambo-nature" className="py-20 bg-cream-50/60 border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-sand-200 shadow-soft relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-corporate-100 text-corporate-900 font-semibold">
                    Danish Brand Portfolio
                  </span>
                  <a
                    href="https://bambo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-corporate-800 hover:text-corporate-950"
                  >
                    bambo.com <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-50/50 flex items-center justify-center p-4 border border-sand-100">
                  <Image
                    src="/images/brands/bambo-diaper.png"
                    alt="Bambo Nature Danish Baby Diapers"
                    width={400}
                    height={300}
                    className="object-contain max-h-full"
                  />
                </div>

                <div className="mt-4 p-3 rounded-xl bg-corporate-50 border border-corporate-100 text-xs text-corporate-800 flex items-center justify-between">
                  <span className="font-semibold">Tape & Pants Diaper Packaging</span>
                  <span className="font-bold">Sizes 1 to 6</span>
                </div>
              </div>
            </div>

            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-corporate-800" />
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-700">
                    Denmark (Abena Group) • Eco-Conscious Care
                  </span>
                </div>
                <div className="h-16 flex items-center">
                  <Image
                    src="/images/bambo-logo.png"
                    alt="Bambo Nature"
                    width={220}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-base text-slate-600 font-medium">
                  Certified eco-friendly baby diapers, skincare, and maternal hygiene from Denmark.
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Bambo Nature is a Danish baby-care brand with a product portfolio covering
                tape diapers, pants diapers, skincare, cleansing, sun protection, and maternal
                hygiene. Shreesha Incorporated Pvt. Ltd. imports and nationally distributes
                products from both brand portfolios in Nepal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Tape Diapers (Sizes 1–6)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Dermatologically tested with weight indicators from Size 1 (2–4 kg) to Size 6 (16+ kg).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Pants Diapers (Sizes 4–6)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Flexible training pants: Size 4 (7–12 kg), Size 5 (11–17 kg), Size 6 (15+ kg).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Baby Skincare & Cleansing
                  </h4>
                  <p className="text-xs text-slate-600">
                    Hair & Body Wash (150 ml), Soothing Cream (100 ml), Baby Oil (100 ml), and Free Wet Wipes (50 pcs).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-sand-200/80">
                  <h4 className="font-bold text-corporate-950 text-sm mb-1">
                    Sunscreen & Maternity
                  </h4>
                  <p className="text-xs text-slate-600">
                    BAMBO Sunscreen SPF50 (100 ml) and Danish Abena Maternity Pads (15 pcs).
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/products?brand=bambo-nature"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-corporate-800 text-white text-xs font-bold uppercase tracking-wider shadow-soft hover:bg-corporate-900 transition-all"
                >
                  View Bambo Nature Catalogue
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>

                <a
                  href="https://bambo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-corporate-900 text-xs font-bold uppercase tracking-wider transition-all border border-sand-300"
                >
                  Official Brand Website
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
