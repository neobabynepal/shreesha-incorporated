"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Brands", href: "/brands" },
  { name: "Products", href: "/products" },
  { name: "Distribution", href: "/distribution" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Corporate Notice Bar */}
      <div className="bg-corporate-800 text-white text-xs py-2.5 px-4 border-b border-corporate-700 hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-white font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-white flex-shrink-0" />
              Official Importer & National Distributor in Nepal
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/90 font-medium">MumBuds USA & Bambo Nature Denmark</span>
          </div>
          <div className="flex items-center space-x-6 text-white/90">
            <a
              href={`tel:${companyData.phone}`}
              className="inline-flex items-center hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-white" />
              {companyData.phoneFormatted}
            </a>
            <a
              href={`mailto:${companyData.email}`}
              className="inline-flex items-center hover:text-white transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-white" />
              {companyData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-soft py-3"
            : "bg-cream-50/90 backdrop-blur-md border-b border-sand-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/shreesha-logo.png"
                alt="Shreesha Incorporated Pvt. Ltd."
                width={260}
                height={80}
                priority
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-corporate-900 bg-sand-200/70 font-semibold shadow-soft-xs"
                        : "text-slate-600 hover:text-corporate-900 hover:bg-sand-100/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/products"
                className="text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded-lg text-corporate-800 hover:bg-sand-200/50 transition-colors"
              >
                Catalogue
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-corporate-900 text-white shadow-soft hover:bg-corporate-800 transition-all duration-200 hover:shadow-soft-lg group"
              >
                Trade Inquiry
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-corporate-900 hover:bg-sand-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-sand-200 bg-cream-50/98 px-4 pt-3 pb-6 space-y-2 shadow-soft-xl animate-in slide-in-from-top-4 duration-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-corporate-900 bg-sand-200 font-semibold"
                      : "text-slate-700 hover:bg-sand-100 hover:text-corporate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-sand-200/80 space-y-3">
              <div className="px-3 text-xs text-slate-500">
                <p className="font-semibold text-corporate-900">National Distributor Nepal</p>
                <p>Maharajgunj-3, Kathmandu</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${companyData.phone}`}
                  className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-sand-200 text-corporate-900 text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" /> Call
                </a>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-sand-200 text-corporate-900 text-xs font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 mr-1.5" /> Email
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-corporate-900 text-white shadow-soft"
              >
                Wholesale & Trade Inquiries
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
