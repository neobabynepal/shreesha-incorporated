import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Target,
  Eye,
  MapPin,
  Truck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Shreesha Incorporated Pvt. Ltd.",
  description:
    "Learn about Shreesha Incorporated Pvt. Ltd., the premier Nepal-based importer and national distributor of MumBuds USA and Bambo Nature baby care and hygiene products.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-corporate-950 text-white py-16 lg:py-24 border-b border-corporate-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sage-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-800 text-sand-300 text-xs font-bold uppercase tracking-wider border border-corporate-700">
              <Building2 className="w-3.5 h-3.5 text-sand-400" />
              <span>Company Profile & Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Shreesha Incorporated Pvt. Ltd.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Nepal-based authorized importer and national distributor specializing in
              premium baby care, maternal care, hygiene, and personal care products.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Profile Table Section */}
      <section className="py-16 bg-white border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Overview Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sage-700 bg-sage-100/80 px-3 py-1 rounded-full">
                1. Company Overview
              </span>
              <h2 className="text-3xl font-display font-bold text-corporate-950 tracking-tight">
                National Distributor for MumBuds USA and Bambo Nature in Nepal
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                Shreesha Incorporated Pvt. Ltd. is a Nepal-based import and distribution
                company specializing in baby care, maternal care, hygiene, and personal care
                products. Based in Maharajgunj-3, Kathmandu, the company serves as the national
                distributor in Nepal for two international brands:{" "}
                <strong className="text-corporate-950 font-semibold">MumBuds USA</strong> and{" "}
                <strong className="text-corporate-950 font-semibold">Bambo Nature</strong>.
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                The company imports the products within both brand portfolios and distributes
                them nationally through the Nepali market. Its business connects international
                brands with retailers, wholesalers, pharmacies, baby-product stores, other
                business partners, and consumers across Nepal.
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                Through its representation of MumBuds USA and Bambo Nature, Shreesha Incorporated
                offers a broad product portfolio that includes baby diapers, pants diapers,
                period panties, wet wipes, baby skincare, cleansing products, sun protection,
                and maternity hygiene products.
              </p>

              {/* Crucial Positioning Highlight */}
              <div className="p-6 rounded-2xl bg-cream-50 border-l-4 border-corporate-800 border-y border-r border-sand-200 mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-corporate-900 mb-2">
                  Company Positioning
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{companyData.positioning}&rdquo;
                </p>
              </div>
            </div>

            {/* Structured Company Data Card & Office Showcase (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Image Showcase Card */}
              <div className="scandi-card p-4 sm:p-5 bg-white border border-sand-200/80 shadow-soft overflow-hidden group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-100 border border-sand-200/60">
                  <Image
                    src="/images/shreesha-office.jpg"
                    alt="Shreesha Incorporated Corporate Office - Maharajgunj-3, Kathmandu"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-corporate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs flex items-center justify-between border border-white/10">
                    <span className="font-semibold flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-sand-300" />
                      Corporate Office
                    </span>
                    <span className="text-[11px] text-slate-200">Maharajgunj-3, Kathmandu</span>
                  </div>
                </div>
              </div>

              {/* Particulars Card */}
              <div className="scandi-card p-6 sm:p-8 bg-sand-50/60">
                <div className="border-b border-sand-200 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Official Particulars
                  </span>
                  <h3 className="text-xl font-display font-bold text-corporate-950 mt-1">
                    Company Information
                  </h3>
                </div>

                <div className="divide-y divide-sand-200/80 text-sm">
                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">
                      Company Name
                    </span>
                    <span className="font-bold text-corporate-950 mt-1 sm:mt-0">
                      {companyData.legalName}
                    </span>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">
                      Business Type
                    </span>
                    <span className="font-semibold text-corporate-900 mt-1 sm:mt-0">
                      {companyData.businessType}
                    </span>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">
                      Headquarters
                    </span>
                    <span className="font-semibold text-corporate-900 mt-1 sm:mt-0">
                      {companyData.headquarters}
                    </span>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${companyData.phone}`}
                      className="font-semibold text-corporate-900 hover:text-corporate-700 mt-1 sm:mt-0"
                    >
                      {companyData.phone}
                    </a>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="font-semibold text-corporate-900 hover:text-corporate-700 mt-1 sm:mt-0 break-all"
                    >
                      {companyData.email}
                    </a>
                  </div>

                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">
                      Market Served
                    </span>
                    <span className="font-semibold text-corporate-900 mt-1 sm:mt-0">
                      Nepal (Nationwide)
                    </span>
                  </div>

                  <div className="py-3">
                    <span className="text-slate-500 font-medium text-xs uppercase tracking-wider block mb-2">
                      Represented Brands
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-lg bg-corporate-100 text-corporate-900 font-semibold text-xs border border-corporate-200">
                        MumBuds USA
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-corporate-100 text-corporate-900 font-semibold text-xs border border-corporate-200">
                        Bambo Nature (Denmark)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-cream-50/70 border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sand-500 bg-sand-200/70 px-3 py-1 rounded-full">
              7. Strategic Foundation
            </span>
            <h2 className="text-3xl font-display font-extrabold text-corporate-950 tracking-tight">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Vision Card */}
            <div className="lg:col-span-5 bg-corporate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-soft-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-corporate-800 flex items-center justify-center text-sand-300">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold">Our Vision</h3>
                <p className="text-slate-200 text-base leading-relaxed italic">
                  &ldquo;{companyData.vision}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-corporate-800 text-xs text-slate-400">
                Making quality international hygiene accessible across Nepal.
              </div>
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-7 scandi-card p-8 sm:p-10 bg-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-corporate-950">
                      Our Mission
                    </h3>
                    <p className="text-xs text-slate-500">Core operational principles</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {companyData.mission.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Operations Section */}
      <section className="py-16 bg-white border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-700 bg-corporate-50 px-3 py-1 rounded-full border border-corporate-200">
              6. Operations & Distribution
            </span>
            <h2 className="text-3xl font-display font-extrabold text-corporate-950 tracking-tight">
              Business Operations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Four fundamental operational capabilities driving our national distribution network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.operations.map((op, idx) => (
              <div
                key={op.title}
                className="scandi-card p-6 bg-sand-50/50 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-sage-700">Pillar 0{idx + 1}</span>
                  <h3 className="text-lg font-display font-bold text-corporate-950">
                    {op.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-corporate-900 text-white text-xs font-bold uppercase tracking-wider shadow-soft hover:bg-corporate-800 transition-all"
            >
              Contact Our Distribution Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
