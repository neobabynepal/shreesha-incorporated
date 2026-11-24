"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Send, CheckCircle2, AlertCircle, Phone, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledSubject = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    phone: "",
    email: "",
    city: "",
    inquiryType: "Wholesale & Bulk Supply",
    subject: prefilledSubject || "Trade & Distribution Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: prefilledSubject,
        inquiryType: "Wholesale & Bulk Supply",
      }));
    }
  }, [prefilledSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured email body
    const bodyText = `Trade Inquiry for Shreesha Incorporated Pvt. Ltd.
--------------------------------------------------
Sender Name: ${formData.name}
Organization / Business: ${formData.organization || "N/A"}
Phone: ${formData.phone}
Email: ${formData.email}
City / Location in Nepal: ${formData.city || "Kathmandu"}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

--------------------------------------------------
Sent from Shreesha Incorporated Web Portal`;

    const generatedMailto = `mailto:${companyData.email}?subject=${encodeURIComponent(
      `[${formData.inquiryType}] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(bodyText)}`;

    setMailtoUrl(generatedMailto);
    setIsSubmitted(true);

    // Open user's email client
    window.location.href = generatedMailto;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-lg border border-sand-200">
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-display font-bold text-corporate-950">
          Send a Trade & Wholesale Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Fill in the details below. This form creates a pre-formatted inquiry message
          and opens directly in your default email client for secure, direct communication
          with our Kathmandu distribution desk.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-6 rounded-2xl bg-sage-50 border border-sage-200 space-y-4 animate-in fade-in">
          <div className="flex items-center space-x-3 text-sage-800">
            <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-sage-600" />
            <h4 className="font-bold text-base">Inquiry Prepared in Your Email App</h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Your email client should have opened with all your company and stock details
            pre-filled to <strong className="text-corporate-900">{companyData.email}</strong>.
          </p>

          <p className="text-xs text-slate-600">
            If your email application did not launch automatically, click the button below:
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={mailtoUrl}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-corporate-900 text-white text-xs font-bold uppercase tracking-wider shadow-soft hover:bg-corporate-800"
            >
              <Mail className="w-4 h-4 mr-2" />
              Open Email App Again
            </a>

            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2.5 rounded-xl bg-sand-200 text-corporate-900 text-xs font-bold"
            >
              Edit Form Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Adhikari"
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Business / Store Name
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Kathmandu Baby Care Boutique"
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="98xxxxxxxx"
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@business.com"
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                City / Location in Nepal
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Kathmandu / Pokhara"
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Inquiry Nature *
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none text-slate-800"
              >
                <option value="Wholesale & Bulk Supply">Wholesale & Bulk Supply</option>
                <option value="Pharmacy Stockist Partnership">Pharmacy Stockist Partnership</option>
                <option value="Baby Specialty Store Retailer">Baby Specialty Store Retailer</option>
                <option value="Regional Sub-Distributor Application">Regional Sub-Distributor Application</option>
                <option value="Product Sizing & Information Query">Product Sizing & Information Query</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Subject Line *
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Specific Requirements or Quantities *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please specify brand (MumBuds USA or Bambo Nature), preferred diaper sizes, quantities, and delivery location..."
              className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:ring-2 focus:ring-corporate-800 focus:outline-none"
            />
          </div>

          {/* Honest Transparency Note */}
          <div className="flex items-start space-x-2 text-xs text-slate-500 bg-sand-100/60 p-3 rounded-xl border border-sand-200/60">
            <AlertCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
            <span>
              Clicking &quot;Send via Email Client&quot; creates an official message pre-filled to{" "}
              <strong>{companyData.email}</strong> in your computer or phone email app.
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-corporate-900 text-white font-bold text-xs uppercase tracking-wider shadow-soft hover:bg-corporate-800 transition-all hover:shadow-soft-lg group"
          >
            Send via Email Client
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
