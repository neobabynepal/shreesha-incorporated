import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Building2,
  Navigation,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Shreesha Incorporated Pvt. Ltd.",
  description:
    "Get in touch with Shreesha Incorporated Pvt. Ltd., Maharajgunj-3, Kathmandu, Nepal. Contact our national distribution team for MumBuds USA and Bambo Nature.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-corporate-950 text-white py-16 lg:py-24 border-b border-corporate-900 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sage-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-800 text-sand-300 text-xs font-bold uppercase tracking-wider border border-corporate-700">
              <Mail className="w-3.5 h-3.5 text-sand-400" />
              <span>Direct Communication</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Contact & Trade Inquiries
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Connect directly with our Kathmandu distribution headquarters for wholesale
              orders, retail store supply, pharmacy partnerships, or brand inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Particulars (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="bg-corporate-950 text-white rounded-3xl p-8 shadow-soft-xl border border-corporate-800 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sand-400">
                    National Distribution Office
                  </span>
                  <h3 className="text-2xl font-display font-bold mt-1 text-white">
                    {companyData.legalName}
                  </h3>
                  <p className="text-xs text-sage-400 font-semibold mt-0.5">
                    Official Importer & National Distributor
                  </p>
                </div>

                <div className="space-y-5 pt-4 border-t border-corporate-800 text-sm">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 rounded-xl bg-corporate-900 border border-corporate-800 text-sand-400 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        Office Location
                      </p>
                      <p className="text-slate-100 font-medium mt-0.5">
                        {companyData.address}
                      </p>
                      <a
                        href="https://maps.google.com/?q=Maharajgunj-3+Kathmandu+Nepal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-sand-300 hover:text-white mt-1.5 font-semibold"
                      >
                        <Navigation className="w-3.5 h-3.5 mr-1" />
                        View on Google Maps Directions
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 rounded-xl bg-corporate-900 border border-corporate-800 text-sand-400 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        Direct Phone Contact
                      </p>
                      <a
                        href={`tel:${companyData.phone}`}
                        className="text-slate-100 font-medium text-base hover:text-white transition-colors block mt-0.5"
                      >
                        {companyData.phoneFormatted}
                      </a>
                      <span className="text-[11px] text-slate-400">
                        Sunday – Friday • Standard Business Hours
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 rounded-xl bg-corporate-900 border border-corporate-800 text-sand-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        Official Inquiries Email
                      </p>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-slate-100 font-medium text-sm hover:text-white transition-colors break-all block mt-0.5"
                      >
                        {companyData.email}
                      </a>
                      <span className="text-[11px] text-slate-400">
                        Prompt response for retail & wholesale requests
                      </span>
                    </div>
                  </div>
                </div>

                {/* Represented Brand Portals */}
                <div className="pt-4 border-t border-corporate-800 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Brand Portals:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href="https://mumbudsnepal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-corporate-900 border border-corporate-800 hover:border-corporate-600 transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold text-slate-200">MumBuds Nepal</span>
                      <ExternalLink className="w-3.5 h-3.5 text-sand-400" />
                    </a>

                    <a
                      href="https://bambo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-corporate-900 border border-corporate-800 hover:border-corporate-600 transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold text-slate-200">Bambo Nature</span>
                      <ExternalLink className="w-3.5 h-3.5 text-sage-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Wholesale Support Note */}
              <div className="scandi-card p-6 bg-white border border-sand-200 space-y-2">
                <div className="flex items-center space-x-2 text-corporate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-sage-600" />
                  <span>Wholesale Verification Policy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Registered pharmacies, clinics, hospitals, and licensed baby care retailers
                  receive authorized distributor price schedules upon business registration
                  verification.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-white rounded-3xl p-10 text-center text-slate-500">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
