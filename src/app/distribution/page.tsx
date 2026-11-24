import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Ship,
  Warehouse,
  Store,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import {
  distributionSteps,
  partnerChannels,
  verifiedRetailers,
} from "@/data/distribution";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Distribution Network & Operations | Shreesha Incorporated Nepal",
  description:
    "Explore Shreesha Incorporated's nationwide distribution network across Nepal, connecting MumBuds USA and Bambo Nature Denmark with pharmacies, wholesalers, and retail stores.",
};

const provinces = [
  { name: "Koshi Province", hub: "Biratnagar / Dharan", status: "Active Network" },
  { name: "Madhesh Province", hub: "Birgunj / Janakpur", status: "Active Network" },
  { name: "Bagmati Province", hub: "Kathmandu Valley (Central HQ)", status: "Direct Hub" },
  { name: "Gandaki Province", hub: "Pokhara", status: "Active Network" },
  { name: "Lumbini Province", hub: "Butwal / Bhairahawa", status: "Active Network" },
  { name: "Karnali Province", hub: "Surkhet", status: "Regional Supply" },
  { name: "Sudurpashchim Province", hub: "Dhangadhi", status: "Regional Supply" },
];

export default function DistributionPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-corporate-950 text-white py-16 lg:py-24 border-b border-corporate-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sage-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-800 text-sand-300 text-xs font-bold uppercase tracking-wider border border-corporate-700">
              <Truck className="w-3.5 h-3.5 text-sand-400" />
              <span>Nationwide Operations & Logistics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Our National Distribution Network
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Managing end-to-end import logistics and nationwide distribution across Nepal
              to ensure dependable shelf availability for MumBuds USA and Bambo Nature.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Distribution Process */}
      <section className="py-20 bg-white border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-700 bg-sand-100 px-3 py-1 rounded-full">
              Supply Chain Continuity
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
              The Journey from Factory to Family
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every package of MumBuds and Bambo Nature follows a strictly governed,
              hygienic supply process managed by Shreesha Incorporated Pvt. Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionSteps.map((step) => (
              <div
                key={step.step}
                className="scandi-card p-6 sm:p-7 bg-sand-50/50 flex flex-col justify-between relative group hover:border-corporate-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-corporate-900/30 group-hover:text-corporate-900 transition-colors">
                      {step.step}
                    </span>
                    <span className="p-2.5 rounded-xl bg-sand-100 text-corporate-900 group-hover:bg-corporate-900 group-hover:text-white transition-colors">
                      {step.icon === "Ship" && <Ship className="w-5 h-5" />}
                      {step.icon === "Warehouse" && <Warehouse className="w-5 h-5" />}
                      {step.icon === "Truck" && <Truck className="w-5 h-5" />}
                      {step.icon === "Store" && <Store className="w-5 h-5" />}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-corporate-950">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-sand-200/60 text-[11px] font-semibold text-sage-700 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-sage-600" />
                  Verified Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Channels Grid */}
      <section className="py-20 bg-cream-50/70 border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-700 bg-sage-100 px-3 py-1 rounded-full">
              Trade Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
              Distribution Channels We Serve
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Serving business partners, institutional buyers, and retail points across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {partnerChannels.map((channel, idx) => (
              <div
                key={idx}
                className="scandi-card p-8 bg-white border border-sand-200 shadow-soft flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-800 bg-sage-50 px-2.5 py-1 rounded border border-sage-200">
                      {channel.role}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {channel.coverage}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-corporate-950">
                    {channel.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-sand-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-corporate-800">
                    Direct Consignment Supply
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-corporate-900 hover:text-corporate-700 flex items-center"
                  >
                    Partner with us →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincial Coverage Matrix */}
      <section className="py-20 bg-white border-b border-sand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-700 bg-sand-100 px-3 py-1 rounded-full">
                Geographic Reach
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-corporate-950 tracking-tight">
                All 7 Provinces in Nepal Covered
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Operating from our central corporate headquarters in Maharajgunj-3,
                Kathmandu, Shreesha Incorporated maintains reliable freight links with regional
                wholesalers, stockists, and delivery partners connecting eastern, central, and
                western Nepal.
              </p>

              <div className="p-6 rounded-2xl bg-cream-50 border border-sand-200 space-y-3">
                <h4 className="font-bold text-corporate-950 text-sm">
                  Kathmandu Central Fulfillment Hub
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Same-day and next-day dispatches for Kathmandu Valley retail orders, pharmacy
                  re-stocks, and scheduled express regional cargo.
                </p>
                <div className="flex items-center text-xs font-semibold text-corporate-800 pt-1">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-sand-500" />
                  Maharajgunj-3, Kathmandu, Nepal
                </div>
              </div>
            </div>

            {/* Right Province Table (6 cols) */}
            <div className="lg:col-span-6">
              <div className="scandi-card p-6 bg-sand-50/50 border border-sand-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-sand-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-950">
                    Nepal Provincial Routing
                  </span>
                  <span className="text-xs text-slate-400">Status</span>
                </div>

                <div className="space-y-2">
                  {provinces.map((prov) => (
                    <div
                      key={prov.name}
                      className="p-3 rounded-xl bg-white border border-sand-200/80 flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-corporate-950">{prov.name}</p>
                        <p className="text-slate-500 text-[11px]">{prov.hub}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-sage-50 text-sage-800 border border-sage-200">
                        {prov.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-display font-extrabold text-corporate-950">
            Expand Your Store&apos;s Hygiene Portfolio
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Join hundreds of trusted retail stores and pharmacies across Nepal who stock
            MumBuds USA and Bambo Nature Denmark with full distributor backing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-corporate-900 text-white font-bold text-xs uppercase tracking-wider shadow-soft hover:bg-corporate-800 transition-all"
            >
              Submit Trade Distribution Application
            </Link>
            <a
              href={`tel:${companyData.phone}`}
              className="px-6 py-3.5 rounded-xl bg-white border border-sand-300 text-corporate-900 font-bold text-xs uppercase tracking-wider hover:bg-sand-100 transition-all"
            >
              Call {companyData.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
