"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getB2BDemands, getB2BSolutions, type B2BDemand, type B2BSolution } from "@/lib/services/b2b";

const CATEGORIES = ["All Categories", "Tech & Dev", "Marketing", "Legal", "Finance", "Design", "Operations"];

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl p-8 animate-pulse border border-[#e0e0e0]">
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#e0e0e0] rounded-lg" />
            <div className="h-4 w-20 bg-[#e0e0e0] rounded" />
          </div>
          <div className="h-6 w-3/4 bg-[#e0e0e0] rounded mb-2" />
          <div className="h-4 w-full bg-[#e0e0e0] rounded mb-1" />
          <div className="h-4 w-2/3 bg-[#e0e0e0] rounded" />
        </div>
        <div className="md:w-72 border-l border-[#e0e0e0] md:pl-8 space-y-3">
          <div className="h-4 w-full bg-[#e0e0e0] rounded" />
          <div className="h-4 w-full bg-[#e0e0e0] rounded" />
          <div className="h-10 w-full bg-[#e0e0e0] rounded-lg mt-4" />
        </div>
      </div>
    </div>
  );
}

type TabType = "Browse Demands" | "Browse Solutions" | "AI Matches ✨";

export default function B2BPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Browse Demands");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [demands, setDemands] = useState<B2BDemand[]>([]);
  const [solutions, setSolutions] = useState<B2BSolution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const cat = activeCategory === "All Categories" ? undefined : activeCategory;
    if (activeTab === "Browse Demands") {
      getB2BDemands(cat).then(setDemands).catch(console.error).finally(() => setLoading(false));
    } else if (activeTab === "Browse Solutions") {
      getB2BSolutions(cat).then(setSolutions).catch(console.error).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [activeTab, activeCategory]);

  return (
    <>
      {/* Page Header */}
      <header className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#002112] mb-4 leading-tight">B2B Marketplace</h1>
            <p className="text-xl text-[#404943] font-medium">
              Connect with the services your startup needs. High-velocity solutions for the modern entrepreneur.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/b2b/post-demand" className="px-8 py-4 bg-[#0f5238] text-white rounded-lg font-bold text-lg flex items-center gap-2 shadow-xl shadow-[#0f5238]/10 hover:opacity-90 transition-all">
                <span className="material-symbols-outlined">add_circle</span>
                Post a Demand
              </Link>
              <Link href="/b2b/list-solution" className="px-8 py-4 bg-[#caf2d7] text-[#0f5238] rounded-lg font-bold text-lg border border-[#0f5238]/10 hover:bg-[#c4ecd2] transition-all">
                List Your Solution
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-md aspect-square bg-[#d5fde2] rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-[120px] text-[#0f5238] opacity-20">storefront</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* AI Match Banner */}
        <div className="mb-12 bg-[#0f5238] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-[#0f5238]/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2d6a4f] flex items-center justify-center text-[#a8e7c5]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">AI-powered matching available</h3>
              <p className="text-[#a8e7c5] text-sm">Our AI matches your profile with relevant demands and solutions.</p>
            </div>
          </div>
          <button onClick={() => setActiveTab("AI Matches ✨")} className="px-6 py-2 border-2 border-[#a8e7c5] text-[#a8e7c5] rounded-lg font-bold hover:bg-[#a8e7c5] hover:text-[#0f5238] transition-all whitespace-nowrap">
            See AI Matches →
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-[#bfc9c1]/20 overflow-x-auto pb-1 no-scrollbar">
          {(["Browse Demands", "Browse Solutions", "AI Matches ✨"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 whitespace-nowrap ${activeTab === tab ? "text-[#0f5238] font-bold border-b-4 border-[#0f5238]" : "text-[#404943] font-medium hover:text-[#0f5238] transition-colors"}`}
            >
              {tab}
            </button>
          ))}
          <Link href="/b2b/post-demand" className="pb-4 whitespace-nowrap text-[#404943] font-medium hover:text-[#0f5238] transition-colors ml-auto">Post a Demand</Link>
          <Link href="/b2b/list-solution" className="pb-4 whitespace-nowrap text-[#404943] font-medium hover:text-[#0f5238] transition-colors">List a Solution</Link>
        </div>

        {/* Category Filter */}
        {activeTab !== "AI Matches ✨" && (
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm ${activeCategory === cat ? "bg-[#0f5238] text-white shadow-md" : "bg-white text-[#404943] hover:bg-[#caf2d7] transition-all"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Demand Cards */}
        {activeTab === "Browse Demands" && (
          loading ? (
            <div className="grid grid-cols-1 gap-6">
              {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : demands.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-[#e0e0e0]">
              <span className="material-symbols-outlined text-5xl text-[#bfc9c1] mb-3">inbox</span>
              <h3 className="text-xl font-bold text-[#002112]">No demands yet</h3>
              <p className="text-[#404943] mt-2 mb-6">Be the first to post a demand and get matched with service providers.</p>
              <Link href="/b2b/post-demand" className="px-8 py-3 bg-[#0f5238] text-white rounded-lg font-bold hover:bg-[#2d6a4f] transition-all inline-block">
                Post a Demand
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6">
                {demands.map((d) => (
                  <div key={d.id} className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(15,82,56,0.04)] hover:shadow-xl transition-all border border-transparent hover:border-[#0f5238]/5 group">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-[#cff7dd] flex items-center justify-center text-[#0f5238]">
                            <span className="material-symbols-outlined">{d.icon}</span>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#0f5238]">{d.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#002112] mb-2 group-hover:text-[#0f5238] transition-colors">{d.title}</h3>
                        <p className="text-[#404943] mb-6 line-clamp-2">{d.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {d.tags.map((t) => (
                            <span key={t} className="px-3 py-1 bg-[#b7f2a0] text-[#032100] rounded-full text-xs font-bold">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="md:w-72 flex flex-col justify-between border-l border-[#bfc9c1]/10 md:pl-8">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-[#404943]">Budget</span>
                            <span className="font-bold text-[#0f5238]">{d.budget}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-[#404943]">Deadline</span>
                            <span className="font-bold text-[#002112]">{d.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#bfc9c1]/10">
                            {d.ownerAvatar && (
                              <div className="w-8 h-8 rounded-full overflow-hidden">
                                <Image width={32} height={32} src={d.ownerAvatar} alt="Poster" className="w-full h-full object-cover" />
                              </div>
                            )}
                            <span className="text-sm font-medium">{d.ownerName}</span>
                          </div>
                        </div>
                        <button className="mt-6 w-full py-3 bg-[#0f5238] text-white rounded-lg font-bold active:scale-95 transition-all hover:bg-[#2d6a4f]">
                          View &amp; Respond
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <button className="px-8 py-3 text-[#0f5238] font-bold border-2 border-[#0f5238] rounded-lg hover:bg-[#0f5238] hover:text-white transition-all">
                  Load More Demands
                </button>
              </div>
            </>
          )
        )}

        {activeTab === "Browse Solutions" && (
          loading ? (
            <div className="grid grid-cols-1 gap-6">{[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}</div>
          ) : solutions.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-[#bfc9c1]/20">
              <span className="material-symbols-outlined text-4xl text-[#bfc9c1] mb-2">storefront</span>
              <h3 className="text-xl font-bold text-[#002112]">Service Directory</h3>
              <p className="text-[#404943] mt-2 mb-6">No solutions listed yet. Be first to list your agency or service.</p>
              <Link href="/b2b/list-solution" className="px-8 py-3 bg-[#0f5238] text-white rounded-lg font-bold hover:bg-[#2d6a4f] transition-all inline-block">
                List Your Agency
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((s) => (
                <div key={s.id} className="bg-white rounded-xl p-6 border border-[#e0e0e0] hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#cff7dd] flex items-center justify-center text-[#0f5238]">
                      <span className="material-symbols-outlined">{s.icon}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0f5238]">{s.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002112] mb-2 group-hover:text-[#0f5238] transition-colors">{s.title}</h3>
                  <p className="text-[#404943] text-sm mb-4 line-clamp-2">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-[#b7f2a0] text-[#032100] rounded-full text-xs font-bold">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
                    <span className="font-bold text-[#0f5238]">{s.priceRange}</span>
                    <button className="px-4 py-2 bg-[#0f5238] text-white rounded-lg text-sm font-bold hover:bg-[#2d6a4f] transition-all">Contact</button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}

        {activeTab === "AI Matches ✨" && (
          <div className="text-center py-20 bg-white rounded-xl border border-[#bfc9c1]/20">
            <span className="material-symbols-outlined text-4xl text-[#0f5238] mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h3 className="text-xl font-bold text-[#002112]">Your AI Matches</h3>
            <p className="text-[#404943] mt-2 mb-6">Our system uses your profile skills and recent activity to instantly pair you with relevant demands or solutions.</p>
            <button className="px-8 py-3 bg-[#0f5238] text-white rounded-lg font-bold hover:bg-[#2d6a4f] transition-all inline-block active:scale-95">
              Generate New Matches
            </button>
          </div>
        )}
      </main>
    </>
  );
}
