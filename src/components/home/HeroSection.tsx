"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Truck,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-sand-50 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-sand-200/70">
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-96 h-96 bg-sage-100/60 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-corporate-100/40 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National Distributor Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sand-300/80 shadow-soft-xs">
              <span className="flex h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-900">
                Official Importer & National Distributor in Nepal
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-corporate-950 tracking-tight leading-[1.12]">
              Connecting World-Class Baby & Maternal Care to Families Across{" "}
              <span className="relative inline-block text-corporate-800">
                Nepal
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-sage-400 opacity-60"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5C48 2.5 130 1.5 197.5 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-corporate-900 font-semibold">
                Shreesha Incorporated Pvt. Ltd.
              </strong>{" "}
              is the premier national distribution gateway in Nepal for international
              hygiene leaders{" "}
              <strong className="text-corporate-800 font-semibold">MumBuds USA</strong> and{" "}
              <strong className="text-corporate-800 font-semibold">Bambo Nature</strong>{" "}
              (Denmark)—serving pharmacies, baby-care retailers, wholesalers, and healthcare
              partners nationwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/brands"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-corporate-800 text-white font-semibold text-sm shadow-soft hover:bg-corporate-900 transition-all hover:shadow-soft-lg group"
              >
                Explore Our Brands
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-white border border-sand-300 text-corporate-900 font-semibold text-sm shadow-soft-xs hover:bg-sand-100/70 hover:border-sand-400 transition-all"
              >
                Partner & Contact Us
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-corporate-800 hover:text-corporate-950 transition-colors"
              >
                View Catalog
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-sand-200/90 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="flex items-center text-corporate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 mr-1 text-sage-600 flex-shrink-0" />
                  <span>100% Authentic</span>
                </div>
                <p className="text-xs text-slate-500">Direct Brand Consignments</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center text-corporate-900 font-bold text-sm">
                  <Truck className="w-4 h-4 mr-1 text-sage-600 flex-shrink-0" />
                  <span>Nationwide</span>
                </div>
                <p className="text-xs text-slate-500">All 7 Provinces in Nepal</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center text-corporate-900 font-bold text-sm">
                  <Globe2 className="w-4 h-4 mr-1 text-sage-600 flex-shrink-0" />
                  <span>USA & Denmark</span>
                </div>
                <p className="text-xs text-slate-500">Global Hygiene Standards</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Hero Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-xl border border-sand-200/80 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-sand-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-corporate-900">
                      National Portfolio
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">Kathmandu, Nepal</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative my-4 aspect-[4/3] rounded-2xl overflow-hidden bg-sand-50 flex items-center justify-center p-3 border border-sand-100">
                  <Image
                    src="/images/brands/mumbuds-diaper.png"
                    alt="MumBuds USA Baby Diaper Package"
                    width={400}
                    height={300}
                    priority
                    className="object-contain max-h-full hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-sand-200/80 flex items-center justify-between text-xs shadow-soft-xs">
                    <div>
                      <p className="font-bold text-corporate-950">MumBuds Premium Diapers</p>
                      <p className="text-[11px] text-slate-500">Tape & Pants Series (NB – XXL)</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-corporate-50 text-corporate-800">
                      USA
                    </span>
                  </div>
                </div>

                {/* Two Featured Brand Quick Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href="/brands#mumbuds"
                    className="p-3 rounded-xl bg-corporate-50/60 border border-corporate-100 hover:border-corporate-300 transition-colors block text-left"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Image
                        src="/images/mumbuds-logo.png"
                        alt="MumBuds USA"
                        width={90}
                        height={32}
                        className="h-5 w-auto object-contain"
                      />
                      <ExternalLink className="w-3 h-3 text-corporate-400" />
                    </div>
                    <p className="text-[11px] text-slate-500">Diapers, Period Panties, Wipes</p>
                  </Link>

                  <Link
                    href="/brands#bambo-nature"
                    className="p-3 rounded-xl bg-sage-50/70 border border-sage-100 hover:border-sage-300 transition-colors block text-left"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Image
                        src="/images/bambo-logo.png"
                        alt="Bambo Nature"
                        width={100}
                        height={32}
                        className="h-5 w-auto object-contain"
                      />
                      <ExternalLink className="w-3 h-3 text-sage-600" />
                    </div>
                    <p className="text-[11px] text-slate-500">Danish Diapers & Skincare</p>
                  </Link>
                </div>
              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-corporate-950 text-white px-4 py-2.5 rounded-2xl shadow-soft-lg flex items-center space-x-2.5 z-20 border border-corporate-800">
                <Sparkles className="w-4 h-4 text-sand-300" />
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-sand-300 leading-tight">
                    Authorised Distributor
                  </p>
                  <p className="text-[10px] text-slate-300 leading-tight">
                    Wholesale & Retail Supplies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
