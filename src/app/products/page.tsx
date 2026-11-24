import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProductCatalogView from "@/components/products/ProductCatalogView";
import { Package, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Product Catalogue & Packaging Specifications | MumBuds USA & Bambo Nature Nepal",
  description:
    "Official product catalogue and verified specifications for MumBuds USA and Bambo Nature in Nepal. Detailed size breakdowns, piece counts, pack quantities, and master carton packaging.",
};

export default function ProductsPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-corporate-800 text-white py-14 sm:py-16 border-b border-corporate-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                <Package className="w-3.5 h-3.5 text-white" />
                <span>Verified Product Catalogue & Official Sizing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                Products Distributed Across Nepal
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                Official specification schedules for MumBuds USA and Bambo Nature Denmark inventory,
                including verified pack quantities, piece counts, baby weight brackets, and master carton packing.
              </p>
            </div>

            {/* Quick Assurance Badges */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 flex items-center space-x-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-white flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">100% Genuine Importer</p>
                  <p className="text-[11px] text-slate-300">Direct Brand Consignments</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 flex items-center space-x-3 text-xs">
                <Truck className="w-5 h-5 text-white flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Nationwide Dispatch</p>
                  <p className="text-[11px] text-slate-300">All 7 Provinces in Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Catalog View with Suspense */}
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500 text-sm">
            Loading product catalog...
          </div>
        }
      >
        <ProductCatalogView />
      </Suspense>
    </div>
  );
}
