import React from "react";
import Link from "next/link";
import { Ship, Warehouse, Truck, Store, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

const operationIcons = [Ship, Truck, Store, Warehouse];

export default function OperationsSection() {
  return (
    <section className="py-20 bg-cream-50/70 border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sand-200 text-corporate-900 text-xs font-bold uppercase tracking-wider">
            Operational Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
            How Shreesha Incorporated Powers National Distribution
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From international shipping lanes to local pharmacy shelves across Nepal,
            our four core business activities ensure seamless supply continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.operations.map((op, idx) => {
            const Icon = operationIcons[idx] || Warehouse;
            return (
              <div
                key={op.title}
                className="scandi-card p-6 flex flex-col justify-between bg-white relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-corporate-50 border border-corporate-100 flex items-center justify-center text-corporate-900 group-hover:bg-corporate-900 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-bold text-sand-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-corporate-950 leading-snug">
                    {op.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {op.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-sand-100 text-[11px] font-semibold text-corporate-700">
                  National Operations
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/distribution"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-bold uppercase tracking-wider shadow-soft transition-all"
          >
            Explore Full Distribution Infrastructure
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
