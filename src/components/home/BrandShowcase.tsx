import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { brandsData } from "@/data/brands";

export default function BrandShowcase() {
  return (
    <section className="py-20 bg-white border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sand-100 text-corporate-900 text-xs font-bold uppercase tracking-wider">
            Represented Brands Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
            Distributing Internationally Renowned Baby & Hygiene Brands
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Shreesha Incorporated Pvt. Ltd. holds exclusive national distribution rights
            in Nepal for these world-leading manufacturers, ensuring safe, certified,
            and dependable hygiene supplies for Nepali families.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {brandsData.map((brand) => {
            const isMumBuds = brand.id === "mumbuds";
            return (
              <div
                key={brand.id}
                className="scandi-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-corporate-800" />

                <div className="space-y-6">
                  {/* Brand Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-corporate-50 text-corporate-900 border border-corporate-200/70">
                          {brand.origin}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Official National Distribution
                        </span>
                      </div>

                      {/* Official Brand Logo */}
                      <div className="h-14 sm:h-16 flex items-center mb-2">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={200}
                          height={70}
                          className="max-h-12 sm:max-h-14 w-auto object-contain"
                        />
                      </div>

                      <p className="text-sm font-semibold text-slate-500 mt-1">
                        {brand.tagline}
                      </p>
                    </div>

                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-sand-50 border border-sand-200 text-slate-600 hover:text-corporate-950 hover:bg-white hover:border-corporate-300 transition-all flex-shrink-0"
                      aria-label={`Visit official ${brand.name} website`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Brand Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {brand.description}
                  </p>

                  {/* Product Category Tags */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Product Portfolio:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brand.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-sand-100 text-corporate-900 border border-sand-200/60"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Brand Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-sand-100">
                    {brand.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 text-corporate-700" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-8 mt-6 border-t border-sand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-corporate-900 transition-colors"
                  >
                    Official Site ({brand.website.replace("https://", "").replace("/", "")})
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>

                  <Link
                    href={`/products?brand=${brand.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all group-hover:shadow-soft-lg bg-corporate-800 hover:bg-corporate-900"
                  >
                    View {brand.name} Products
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
