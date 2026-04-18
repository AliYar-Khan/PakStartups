"use client";

import { useState } from "react";

const steps = ["Basic Info", "Team & Stage", "Validation", "Submit"];
const categories = ["FinTech", "AgriTech", "HealthTech", "EdTech", "E-Commerce", "SaaS", "Logistics", "Cleantech", "Prop-Tech", "HR-Tech", "Other"];
const stages = ["Idea", "MVP", "Growth", "Scaling", "Profitable"];
const cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi", "Peshawar", "Quetta", "Multan", "Other"];

export default function SubmitStartupPage() {
  const [step, setStep] = useState(0);

  return (
    <>
      {/* Header */}
      <section className="bg-[#d5fde2] py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <a href="/startups" className="flex items-center gap-2 text-[#0f5238] font-bold text-sm mb-6 hover:gap-3 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Directory
          </a>
          <h1 className="text-5xl font-black text-[#002112] tracking-tight mb-3">Submit Your Startup</h1>
          <p className="text-[#404943] text-lg">Get discovered by investors, co-founders, and talent in Pakistan&apos;s largest startup directory.</p>
        </div>
      </section>

      {/* Step Progress */}
      <div className="bg-white border-b border-[#e0e0e0] px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-0">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setStep(i)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                    i < step ? "bg-[#0f5238] text-white" : i === step ? "bg-[#0f5238] text-white ring-4 ring-[#0f5238]/20" : "bg-[#f0f0f0] text-[#404943]"
                  }`}
                >
                  {i < step ? <span className="material-symbols-outlined text-sm">check</span> : i + 1}
                </button>
                <span className={`text-xs font-bold mt-1 ${i === step ? "text-[#0f5238]" : "text-[#707973]"}`}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-2 rounded-full transition-all ${i < step ? "bg-[#0f5238]" : "bg-[#e0e0e0]"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-3xl mx-auto px-8 py-12">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-[#002112]">Basic Information</h2>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Startup Name *</label>
                <input type="text" placeholder="e.g. PayEasy" className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Tagline *</label>
                <input type="text" placeholder="One line description of your startup" className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Description *</label>
                <textarea rows={4} placeholder="Tell us more about what your startup does, the problem it solves, and for whom..." className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] resize-none transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Category *</label>
                  <select className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all">
                    <option value="">Select category...</option>
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">City *</label>
                  <select className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all">
                    <option value="">Select city...</option>
                    {cities.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Website URL</label>
                <input type="url" placeholder="https://yourstartup.pk" className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all" />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-[#002112]">Team &amp; Stage</h2>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-3 uppercase tracking-wider">Current Stage *</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {stages.map((s, i) => (
                    <button
                      key={s}
                      type="button"
                      className={`py-3 rounded-lg font-bold text-sm border-2 transition-all ${i === 1 ? "bg-[#0f5238] text-white border-[#0f5238]" : "bg-white text-[#404943] border-[#e0e0e0] hover:border-[#0f5238] hover:text-[#0f5238]"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Team Size</label>
                <select className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all">
                  <option>1 (Solo Founder)</option>
                  <option>2–5</option>
                  <option>6–15</option>
                  <option>16–50</option>
                  <option>50+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">Founders (comma-separated full names)</label>
                <input type="text" placeholder="Ahmed Khan, Sara Malik" className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#404943] mb-2 uppercase tracking-wider">LinkedIn Page</label>
                <input type="url" placeholder="https://linkedin.com/company/..." className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#0f5238]/40 focus:border-[#0f5238] outline-none text-[#002112] transition-all" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-[#002112]">Validation &amp; Review</h2>
              <div className="bg-[#d5fde2] rounded-xl p-8 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#404943]">Startup Name</span><span className="font-bold text-[#002112]">—</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#404943]">Category</span><span className="font-bold text-[#002112]">—</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#404943]">City</span><span className="font-bold text-[#002112]">—</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#404943]">Stage</span><span className="font-bold text-[#002112]">—</span>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#b7f2a0]/30 rounded-xl p-4">
                <span className="material-symbols-outlined text-[#0f5238] mt-0.5">info</span>
                <p className="text-sm text-[#404943]">
                  Your listing will be reviewed by our team within <strong>48 hours</strong>. You&apos;ll receive an email once approved. All listings must follow our community guidelines.
                </p>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded text-[#0f5238] focus:ring-[#0f5238]" />
                <span className="text-sm text-[#404943]">
                  I confirm all information is accurate and agree to PakStartups{" "}
                  <a href="/terms" className="text-[#0f5238] font-bold hover:underline">Terms of Service</a>.
                </span>
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#d5fde2] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[#0f5238] text-5xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-black text-[#002112] mb-4">Submission Received!</h2>
              <p className="text-[#404943] mb-8">Our team will review your listing within 48 hours. We&apos;ll notify you by email.</p>
              <a href="/startups" className="bg-[#0f5238] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2d6a4f] transition-all">
                Back to Directory
              </a>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(Math.max(0, step - 1))}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold border-2 border-[#e0e0e0] text-[#404943] hover:border-[#0f5238] hover:text-[#0f5238] transition-all ${step === 0 ? "opacity-30 pointer-events-none" : ""}`}
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(Math.min(3, step + 1))}
                className="flex items-center gap-2 px-8 py-3 bg-[#0f5238] text-white rounded-lg font-bold hover:bg-[#2d6a4f] transition-all"
              >
                {step === 2 ? "Submit" : "Continue"} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
