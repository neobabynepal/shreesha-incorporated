import React from "react";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-white border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Vision Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-corporate-900 to-corporate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-soft-xl border border-corporate-800">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-corporate-800 text-sand-300 text-xs font-bold uppercase tracking-wider border border-corporate-700">
                <Eye className="w-3.5 h-3.5 text-sand-400" />
                <span>Our Strategic Vision</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
                To become Nepal&apos;s most trusted importer and national distributor of international hygiene brands.
              </h3>

              <div className="p-5 rounded-2xl bg-corporate-800/60 border border-corporate-700/80">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{companyData.vision}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-corporate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-sand-300">Shreesha Incorporated</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Mission Card (7 cols) */}
          <div className="lg:col-span-7 scandi-card p-8 sm:p-10 flex flex-col justify-between bg-sand-50/50">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-sage-700" />
                <span>Our Core Mission</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-corporate-950 tracking-tight">
                  Six Commitments Driving Our Nationwide Distribution
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Guided by clear, sustainable distribution practices across the country.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyData.mission.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-sand-200/80 shadow-soft-xs flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sage-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-sand-200/60 text-xs text-slate-500">
              Building long-term, mutually beneficial relationships with Nepali businesses and international manufacturers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
