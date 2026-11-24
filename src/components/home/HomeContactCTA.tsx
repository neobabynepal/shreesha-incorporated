import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { companyData } from "@/data/company";

export default function HomeContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-corporate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-soft-xl border border-corporate-800">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-800/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-800 text-sand-300 text-xs font-bold uppercase tracking-wider border border-corporate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-sand-400" />
              <span>National Distribution Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Partner with Nepal&apos;s National Distributor for MumBuds USA & Bambo Nature
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you operate a pharmacy, retail baby store, wholesale distribution firm,
              or healthcare center, connect with our Kathmandu distribution headquarters
              for trade catalogs, volume supply terms, and scheduled dispatches.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-corporate-950 font-bold text-sm hover:bg-sand-100 transition-all shadow-soft group"
              >
                Send Wholesale Inquiry
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${companyData.phone}`}
                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-corporate-900 border border-corporate-700 text-slate-200 hover:text-white hover:border-corporate-500 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 mr-2 text-sand-400" />
                Call {companyData.phoneFormatted}
              </a>
            </div>

            <div className="pt-6 border-t border-corporate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-sand-400" />
                Maharajgunj-3, Kathmandu, Nepal
              </span>
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-sand-400" />
                {companyData.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
