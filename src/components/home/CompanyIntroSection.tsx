import React from "react";
import Link from "next/link";
import { Building2, Compass, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export default function CompanyIntroSection() {
  return (
    <section className="py-20 bg-white border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Corporate Positioning Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sand-100 text-corporate-900 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-corporate-700" />
              <span>Company Positioning & Role</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
              An Import-Focused Distribution Powerhouse in Nepal
            </h2>

            {/* Strict quote from the PDF Section 8 */}
            <div className="p-6 rounded-2xl bg-cream-50 border-l-4 border-corporate-800 border-y border-r border-sand-200">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;Shreesha Incorporated Pvt. Ltd. is an import-focused distribution company
                representing MumBuds USA and Bambo Nature in Nepal. The company&apos;s central role is
                to connect international brands and their product ranges with Nepal&apos;s retail,
                wholesale, and consumer markets. It is positioned as an importer and national
                distributor, rather than as a manufacturer or a single-brand retailer.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-corporate-900 font-bold">
                <span>— Official Company Positioning Statement</span>
                <span>Maharajgunj-3, Kathmandu</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based at Maharajgunj-3, Kathmandu, we oversee the comprehensive supply chain—from
              customs clearance and climate-controlled storage to nationwide logistics routing
              supplying pharmacies, leading baby care specialty stores, and major distributors
              across all 7 provinces of Nepal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sand-50 border border-sand-200/80">
                <h4 className="font-bold text-corporate-950 text-sm mb-1">
                  Integrity & Authenticity
                </h4>
                <p className="text-xs text-slate-600">
                  Every carton imported directly from brand manufacturing facilities with intact
                  lot tracking and batch assurance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sand-50 border border-sand-200/80">
                <h4 className="font-bold text-corporate-950 text-sm mb-1">
                  Nationwide Distribution
                </h4>
                <p className="text-xs text-slate-600">
                  Reliable wholesale deliveries to Kathmandu Valley, Pokhara, Chitwan, Butwal,
                  Biratnagar, and regional markets.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-corporate-800 hover:text-corporate-950 underline underline-offset-4"
              >
                Learn More About Our Company & Operations →
              </Link>
            </div>
          </div>

          {/* Right: Quick Corporate Spec Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-corporate-950 text-slate-300 rounded-3xl p-7 sm:p-9 shadow-soft-xl border border-corporate-800 space-y-6">
              <div className="border-b border-corporate-800 pb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-sand-400">
                  Corporate Summary
                </p>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {companyData.legalName}
                </h3>
                <p className="text-xs text-sage-400 font-semibold mt-0.5">
                  National Distributor & Importer
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                    Business Role
                  </p>
                  <p className="text-white text-sm font-medium mt-0.5">
                    {companyData.businessType}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                    Headquarters
                  </p>
                  <p className="text-white text-sm font-medium mt-0.5">
                    {companyData.headquarters}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                    Territory Served
                  </p>
                  <p className="text-white text-sm font-medium mt-0.5">
                    Nepal (Nationwide Supply)
                  </p>
                </div>

                <div>
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                    Represented International Brands
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-corporate-800 text-slate-200 font-semibold">
                      MumBuds USA
                    </span>
                    <span className="px-2.5 py-1 rounded bg-sage-900 text-sage-200 font-semibold">
                      Bambo Nature (Denmark)
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-corporate-800 flex items-center justify-between text-slate-400">
                  <a
                    href={`tel:${companyData.phone}`}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-sand-400" />
                    {companyData.phoneFormatted}
                  </a>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1.5 text-sand-400" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
