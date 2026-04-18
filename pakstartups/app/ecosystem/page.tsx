import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem Directory — PakStartups",
  description: "Find the organizations that will help you grow. Our curated database connects founders with Pakistan's top-tier support systems.",
};

const orgs = [
  { name: "The Nest i/o", type: "Incubator", city: "Karachi", desc: "Pakistan's premier technology incubator providing state-of-the-art infrastructure...", tags: ["EARLY STAGE", "TECH FOCUS"], icon: "rocket_launch" },
  { name: "Plan9", type: "Accelerator", city: "Lahore", desc: "The first and largest tech incubator in Pakistan, empowering tech-based...", tags: ["SEED FUNDING", "SCALE UP"], icon: "trending_up" },
  { name: "Kickstart", type: "Co-Working", city: "Islamabad", desc: "Dynamic workspace designed for entrepreneurs and remote teams lookin...", tags: ["COMMUNITY", "WORKSPACE"], icon: "groups" },
  { name: "Lakson VC", type: "Venture Capital", city: "Karachi", desc: "Investing in the next generation of disruptive technology startups in Pakistan.", tags: ["SERIES A", "FUNDING"], icon: "payments" },
  { name: "NIC Pakistan", type: "Government", city: "Islamabad", desc: "A collaborative effort to build a thriving startup ecosystem and drive innovation.", tags: ["POLICY", "PUBLIC-PRIVATE"], icon: "account_balance" },
  { name: "Dawood Foundation", type: "Innovation Hub", city: "Karachi", desc: "Fostering learning and innovation through curated spaces and social impact...", tags: ["SOCIAL IMPACT", "PHILANTHROPY"], icon: "volunteer_activism" },
];

const typeColors: Record<string,string> = {
  "Incubator": "bg-[#0f5238] text-white",
  "Accelerator": "bg-[#2d6a4f] text-white",
  "Co-Working": "bg-[#376a28] text-white",
  "Venture Capital": "bg-[#1e5111] text-white",
  "Government": "bg-[#2d6a4f] text-white",
  "Innovation Hub": "bg-[#0f5238] text-white",
};

export default function EcosystemPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#d5fde2] py-20 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[#002112] tracking-tight mb-4">Ecosystem Directory</h1>
        <p className="text-[#404943] text-lg max-w-2xl mx-auto">
          Find the organizations that will help you grow. Our curated database connects founders with Pakistan&apos;s top-tier support systems.
        </p>
      </section>

      {/* Category tabs */}
      <div className="bg-[#d5fde2] border-b border-[#bfc9c1]/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-6 overflow-x-auto py-2">
            {["ALL","INCUBATORS","ACCELERATORS","CO-WORKING SPACES","VENTURE STUDIOS","FOUNDER COMMUNITIES","INNOVATION HUBS"].map((tab, i) => (
              <button key={tab} className={`py-3 text-xs font-black uppercase tracking-widest whitespace-nowrap ${i===0 ? "text-[#0f5238] border-b-2 border-[#0f5238]" : "text-[#404943] hover:text-[#0f5238] transition-colors"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Region filter + count */}
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-[#002112] uppercase tracking-wider">Region:</span>
          {["All","Karachi","Lahore","Islamabad","Peshawar"].map((city, i) => (
            <button key={city} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${i===0 ? "bg-[#0f5238] text-white" : "border border-[#bfc9c1] text-[#404943] hover:border-[#0f5238] hover:text-[#0f5238]"}`}>
              {city}
            </button>
          ))}
        </div>
        <span className="text-sm text-[#404943]">Showing <b>48</b> organizations</span>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orgs.map((org) => (
            <div key={org.name} className="bg-white rounded-xl p-8 shadow-[0_4px_24px_rgba(15,82,56,0.06)] hover:shadow-[0_12px_40px_rgba(15,82,56,0.1)] transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#d5fde2] rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#0f5238] text-2xl">{org.icon}</span>
                </div>
                <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${typeColors[org.type]}`}>
                  {org.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#002112] mb-1">{org.name}</h3>
              <p className="text-[#404943] text-sm flex items-center gap-1 mb-3">
                <span className="material-symbols-outlined text-sm">location_on</span>{org.city}
              </p>
              <p className="text-[#404943] text-sm mb-4 line-clamp-2">{org.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {org.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-[#d5fde2] text-[#0f5238] text-[10px] font-bold rounded uppercase">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
                <a href="#" className="text-[#0f5238] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Apply / Contact <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <button className="text-[#707973] hover:text-[#0f5238] transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Add Organization */}
        <div className="mt-16 bg-[#133725] rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-black mb-3">Missing an organization?</h2>
            <p className="text-[#a8e7c5] max-w-lg">
              Help us build the most comprehensive directory of Pakistani startups and support organizations.
            </p>
          </div>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#0f5238] transition-all whitespace-nowrap uppercase tracking-wider text-sm">
            Add Organization
          </button>
        </div>
      </div>
    </>
  );
}
