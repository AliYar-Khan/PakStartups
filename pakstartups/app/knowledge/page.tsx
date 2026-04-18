import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Hub — PakStartups",
  description: "Everything you need to start, validate, and grow your startup in Pakistan.",
};

const sections = [
  { icon: "book_2", title: "Learning Guides", desc: "Step-by-step playbooks for founders navigating the early stages of Pakistani entrepreneurship.", cta: "Explore Guides" },
  { icon: "build", title: "Operational Toolkit", desc: "Ready-to-use templates, financial tools & calculators designed for local compliance and scaling.", cta: "Open Toolkit" },
  { icon: "bar_chart", title: "Market Intelligence", desc: "In-depth sector reports, consumer surveys & benchmarking data for the Pakistan market.", cta: "View Reports" },
  { icon: "account_balance", title: "Resource Directory", desc: "Access a curated list of grants, updated regulations & local investor directories.", cta: "Browse Resources" },
];

const recent = [
  { tag: "GUIDES", label: "NEW", title: "SECP Compliance Checklist 2024", read: "12 min read" },
  { tag: "INTELLIGENCE", label: "NEW", title: "FinTech Market Share Analysis Q3", read: "18 min read" },
  { tag: "TOOLKIT", label: "NEW", title: "Equity Dilution Simulator for Seed Stage", read: "Tool" },
  { tag: "RESOURCES", label: "NEW", title: "2024 Angel Investor Directory: AgriTec...", read: "5 min read" },
];

export default function KnowledgePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#d5fde2] py-20 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#002112] mb-4">Knowledge Hub</h1>
        <p className="text-[#404943] text-lg mb-10 max-w-xl mx-auto">
          Everything you need to start, validate, and grow your startup in Pakistan
        </p>
        {/* Search */}
        <div className="max-w-xl mx-auto relative mb-6">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#707973]">search</span>
          <input
            type="text"
            placeholder="Search guides, tools, resources..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-none shadow-[0_4px_24px_rgba(15,82,56,0.08)] focus:ring-2 focus:ring-[#0f5238]/40 outline-none text-[#002112] text-lg"
          />
        </div>
        <div className="flex justify-center gap-6 text-xs font-bold text-[#0f5238] uppercase tracking-widest flex-wrap">
          {["Company Registration", "Idea Validation", "Burn Rate Calculator"].map((q) => (
            <button key={q} className="hover:underline">{q}</button>
          ))}
        </div>
      </section>

      {/* 4 Section Cards */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-10 border-l-4 border-[#0f5238] shadow-[0_4px_24px_rgba(15,82,56,0.06)] hover:shadow-[0_12px_40px_rgba(15,82,56,0.1)] transition-all group">
              <div className="w-12 h-12 bg-[#d5fde2] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#0f5238] text-2xl">{s.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#002112] mb-3">{s.title}</h2>
              <p className="text-[#404943] mb-6">{s.desc}</p>
              <a href="#" className="text-[#0f5238] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                {s.cta} <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="bg-[#d5fde2]/30 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-xs font-bold text-[#0f5238] uppercase tracking-widest mb-1">New Arrivals</p>
              <h2 className="text-3xl font-black text-[#002112]">Recently Added</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border-2 border-[#cff7dd] flex items-center justify-center hover:border-[#0f5238] transition-all">
                <span className="material-symbols-outlined text-[#002112]">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-[#cff7dd] flex items-center justify-center hover:border-[#0f5238] transition-all">
                <span className="material-symbols-outlined text-[#002112]">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recent.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(15,82,56,0.06)] hover:shadow-[0_12px_40px_rgba(15,82,56,0.1)] transition-all cursor-pointer">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-[#0f5238] text-white text-[10px] font-bold rounded uppercase">{r.label}</span>
                  <span className="px-2 py-0.5 bg-[#d5fde2] text-[#0f5238] text-[10px] font-bold rounded uppercase">{r.tag}</span>
                </div>
                <p className="font-bold text-[#002112] text-sm mb-4 line-clamp-2">{r.title}</p>
                <p className="text-xs text-[#707973] flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  {r.read}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="bg-[#0f5238] py-20 px-8 mx-8 rounded-3xl my-12 max-w-7xl lg:mx-auto">
        <p className="text-[#95d4b3] text-xs font-bold uppercase tracking-widest mb-4">Featured This Week</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 max-w-lg">
          The Ultimate Guide to Series A Funding in Pakistan
        </h2>
        <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#0f5238] transition-all">
          Start Learning →
        </button>
      </section>
    </>
  );
}
