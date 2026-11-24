import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-corporate-950 text-slate-300 border-t border-corporate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-corporate-800/80">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl inline-block border border-corporate-800 shadow-soft-xs">
                <Image
                  src="/images/shreesha-logo.png"
                  alt="Shreesha Incorporated Pvt. Ltd."
                  width={220}
                  height={60}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Nepal-based authorized importer and national distributor representing
              internationally acclaimed baby-care, maternal-care, and personal hygiene
              brands: <strong className="text-slate-200">MumBuds USA</strong> and{" "}
              <strong className="text-slate-200">Bambo Nature</strong>.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-sage-400 bg-corporate-900/60 p-3 rounded-xl border border-corporate-800">
              <ShieldCheck className="w-4 h-4 flex-shrink-0 text-sage-400" />
              <span>Registered Importer & National Distributor in Nepal</span>
            </div>
          </div>

          {/* Column 2: Represented Brands (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-sage-500 pl-2.5">
              Represented Brands
            </h4>
            <div className="space-y-4">
              <div className="bg-corporate-900/50 p-3.5 rounded-xl border border-corporate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-white px-2 py-1 rounded-lg">
                    <Image
                      src="/images/mumbuds-logo.png"
                      alt="MumBuds USA"
                      width={90}
                      height={32}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <a
                    href="https://mumbudsnepal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand-400 hover:text-white transition-colors"
                    aria-label="MumBuds Nepal Official Website"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Baby tape diapers, pants diapers, period panties & water wipes.
                </p>
                <a
                  href="https://mumbudsnepal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] text-sage-400 hover:text-sage-300 mt-2 font-medium"
                >
                  mumbudsnepal.com <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>

              <div className="bg-corporate-900/50 p-3.5 rounded-xl border border-corporate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-white px-2 py-1 rounded-lg">
                    <Image
                      src="/images/bambo-logo.png"
                      alt="Bambo Nature"
                      width={100}
                      height={32}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <a
                    href="https://bambo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand-400 hover:text-white transition-colors"
                    aria-label="Bambo Nature Official Website"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Danish eco-conscious diapers, wipes, baby skincare & maternal pads.
                </p>
                <a
                  href="https://bambo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] text-sage-400 hover:text-sage-300 mt-2 font-medium"
                >
                  bambo.com <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-sage-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/distribution" className="hover:text-white transition-colors">
                  Distribution Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-sage-500 pl-2.5">
              National Headquarters
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 mt-1 text-sand-400 flex-shrink-0" />
                <span className="text-slate-300">
                  {companyData.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-sand-400 flex-shrink-0" />
                <a
                  href={`tel:${companyData.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-sand-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {companyData.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-corporate-800 hover:bg-corporate-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-corporate-700"
              >
                Send Wholesale Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Shreesha Incorporated Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-slate-500">
            Shreesha Incorporated Pvt. Ltd. operates exclusively as an authorized importer and
            national distributor in Nepal. All brand names, trademarks, and logos belong to their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
