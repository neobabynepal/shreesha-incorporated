"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Filter,
  CheckCircle2,
  Layers,
  ArrowRight,
  Package,
  ShieldCheck,
  Tag,
  CreditCard,
  Boxes,
} from "lucide-react";
import { productsData, ProductItem, ProductCategory, categoryLabels } from "@/data/products";

type BrandFilter = "all" | "mumbuds" | "bambo-nature";
type CatFilter = "all" | ProductCategory;

export default function ProductCatalogView() {
  const searchParams = useSearchParams();
  const initialBrand = (searchParams.get("brand") as BrandFilter) || "all";
  const initialCategory = (searchParams.get("category") as CatFilter) || "all";

  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>(initialBrand);
  const [selectedCategory, setSelectedCategory] = useState<CatFilter>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Brand Filter
      if (selectedBrand !== "all" && product.brandId !== selectedBrand) {
        return false;
      }
      // Category Filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query);
        const matchesBrand = product.brandName.toLowerCase().includes(query);
        const matchesVariants = product.variants.some(
          (v) =>
            v.size.toLowerCase().includes(query) ||
            (v.productCode && v.productCode.toLowerCase().includes(query)) ||
            (v.weightRange && v.weightRange.toLowerCase().includes(query))
        );
        return matchesName || matchesCategory || matchesBrand || matchesVariants;
      }
      return true;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filtering Control Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-soft border border-sand-200/80 mb-10 space-y-6">
        {/* Row 1: Search and Brand Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Brand Tabs */}
          <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-sand-100/80 border border-sand-200">
            <button
              onClick={() => setSelectedBrand("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedBrand === "all"
                  ? "bg-corporate-800 text-white shadow-soft-xs"
                  : "text-slate-600 hover:text-corporate-950"
              }`}
            >
              All Brands ({productsData.length})
            </button>
            <button
              onClick={() => setSelectedBrand("mumbuds")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedBrand === "mumbuds"
                  ? "bg-corporate-800 text-white shadow-soft-xs"
                  : "text-slate-600 hover:text-corporate-950"
              }`}
            >
              MumBuds USA
            </button>
            <button
              onClick={() => setSelectedBrand("bambo-nature")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedBrand === "bambo-nature"
                  ? "bg-corporate-800 text-white shadow-soft-xs"
                  : "text-slate-600 hover:text-corporate-950"
              }`}
            >
              Bambo Nature
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products by code, size, weight..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sand-200 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-800 bg-sand-50/50 text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Category Filter Pills */}
        <div className="space-y-2 pt-2 border-t border-sand-100">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Filter className="w-3.5 h-3.5 text-corporate-700" />
            <span>Filter by Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-corporate-800 text-white font-semibold"
                  : "bg-sand-100 text-slate-700 hover:bg-sand-200"
              }`}
            >
              All Categories
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => {
              const isActive = selectedCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as ProductCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-corporate-800 text-white font-semibold"
                      : "bg-sand-100 text-slate-700 hover:bg-sand-200"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count & Current Filter Indicators */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
        <span>
          Showing <strong className="text-corporate-950">{filteredProducts.length}</strong> verified product listings
        </span>
        {(selectedBrand !== "all" || selectedCategory !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedBrand("all");
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-corporate-800 hover:underline font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid (Pure clean typography without category images) */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 space-y-4">
          <p className="text-lg font-display font-bold text-corporate-950">
            No products match the selected criteria.
          </p>
          <p className="text-sm text-slate-500">
            Try adjusting your search query or reset your brand/category filter.
          </p>
          <button
            onClick={() => {
              setSelectedBrand("all");
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-corporate-800 text-white text-xs font-bold uppercase tracking-wider"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const hasMrp = product.variants.some((v) => v.mrp);
            const hasCtn = product.variants.some((v) => v.cartonPack);

            return (
              <div
                key={product.id}
                className="scandi-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-white border border-sand-200 shadow-soft"
              >
                {/* Brand color badge stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-corporate-800" />

                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-corporate-50 text-corporate-900 border border-corporate-200">
                          {product.brandName}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {product.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-extrabold text-corporate-950">
                        {product.name}
                      </h3>
                    </div>

                    <span className="p-2.5 rounded-xl bg-sand-50 border border-sand-200 text-corporate-800 flex-shrink-0">
                      <Package className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Verified Packaging, Size & Carton Schedule Table */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold uppercase tracking-wider flex items-center text-corporate-900">
                        <Tag className="w-3.5 h-3.5 mr-1 text-corporate-700" />
                        Official Sizing, Packaging & Master Carton Schedule
                      </span>
                    </div>

                    <div className="overflow-x-auto border border-sand-200 rounded-xl shadow-soft-xs">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-sand-100/80 text-corporate-950 border-b border-sand-200 font-bold">
                          <tr>
                            <th className="py-2.5 px-3">Size / Spec</th>
                            {product.variants[0]?.weightRange && (
                              <th className="py-2.5 px-3">Baby Weight</th>
                            )}
                            {product.variants[0]?.waistRange && (
                              <th className="py-2.5 px-3">Waist Fit</th>
                            )}
                            <th className="py-2.5 px-3">
                              {product.variants[0]?.weightRange ||
                              product.category === "tape-diapers" ||
                              product.category === "pants-diapers" ||
                              product.category === "period-panties" ||
                              product.category === "wipes" ||
                              product.category === "maternal-hygiene"
                                ? "Pieces (PCS)"
                                : "Volume / Unit"}
                            </th>
                            {hasCtn && (
                              <th className="py-2.5 px-3">Pkt/Ctn</th>
                            )}
                            {hasMrp && (
                              <th className="py-2.5 px-3 text-right">Official MRP</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-sand-100 text-slate-700">
                          {product.variants.map((v, idx) => (
                            <tr key={idx} className="hover:bg-sand-50/60 transition-colors">
                              <td className="py-2.5 px-3 font-semibold text-corporate-950">
                                {v.size}
                                {v.productCode && (
                                  <span className="block text-[10px] text-slate-400 font-normal">
                                    {v.productCode}
                                  </span>
                                )}
                              </td>
                              {v.weightRange && (
                                <td className="py-2.5 px-3 text-slate-600 font-medium">
                                  {v.weightRange}
                                </td>
                              )}
                              {v.waistRange && (
                                <td className="py-2.5 px-3 text-slate-600 font-medium">
                                  {v.waistRange}
                                </td>
                              )}
                              <td className="py-2.5 px-3 font-bold text-corporate-900">
                                {v.packCount}
                              </td>
                              {hasCtn && (
                                <td className="py-2.5 px-3 text-slate-700 font-semibold">
                                  {v.cartonPack || "—"}
                                </td>
                              )}
                              {hasMrp && (
                                <td className="py-2.5 px-3 text-right font-extrabold text-corporate-900">
                                  {v.mrp ? (
                                    <span className="px-2 py-0.5 rounded bg-corporate-50 text-corporate-800 border border-corporate-200">
                                      {v.mrp}
                                    </span>
                                  ) : (
                                    "—"
                                  )}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Specifications Grid */}
                  <div className="pt-2 border-t border-sand-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {product.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center text-slate-600">
                        <span className="font-semibold text-corporate-900 mr-1.5">
                          {spec.label}:
                        </span>
                        <span>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-sand-100 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs text-corporate-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Nationally Imported & Supplied</span>
                  </div>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `Wholesale inquiry for ${product.name}`
                    )}`}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-corporate-800 text-white hover:bg-corporate-900 transition-colors shadow-soft-xs"
                  >
                    Trade Inquiry
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
