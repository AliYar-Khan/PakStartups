import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayEasy — PakStartups",
  description: "Making digital payments simple for Pakistan's SMEs.",
};

const milestones = [
  { n: "01", title: "Onboarded 2,500+ Active Merchants", desc: "Spread across Karachi, Lahore, and Islamabad within the first year of operations." },
  { n: "02", title: "Processed $10M+ in GMV", desc: "Achieved significant transaction volume milestone through our proprietary payment gateway." },
  { n: "03", title: "Seed Round of $2.5M Secured", desc: "Led by regional venture capital firms to accelerate engineering and sales efforts." },
];

const founders = [
  { name: "Zain Ahmed", role: "CEO" },
  { name: "Sara Khan", role: "CTO" },
];

const info = [
  { label: "Stage", value: "Seed Round" },
  { label: "Category", value: "FinTech" },
  { label: "City", value: "Karachi" },
  { label: "Founded", value: "2022" },
  { label: "Team Size", value: "25 – 50" },
];

const techs = ["Stripe APIs", "React Native", "Node.js", "AWS", "PostgreSQL"];

export default function StartupProfilePage() {
  return (
    <main className="max-w-8xl mx-auto px-8 py-8 bg-[#e8ffee] min-h-screen">
      {/* Startup Header Section */}
      <section className="relative mb-12 overflow-hidden rounded-xl bg-[#d5fde2]">
        <div className="h-48 w-full bg-[#b4ef9d]" />
        <div className="px-10 pb-10 flex flex-col md:flex-row items-end gap-8 -mt-12 relative z-10">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-[#bfc9c1]/10">
            <div className="w-32 h-32 rounded-lg bg-[#caf2d7] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0f5238] text-6xl">account_balance_wallet</span>
            </div>
          </div>
          <div className="flex-1 mb-2">
            <h1 className="text-4xl font-black tracking-tighter text-[#002112] mb-2">PayEasy</h1>
            <p className="text-lg text-[#404943] font-medium mb-4">Making digital payments simple for Pakistan&apos;s SMEs</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1 rounded-full bg-[#0f5238] text-white text-xs font-bold tracking-wider uppercase">Growth</span>
              <span className="px-4 py-1 rounded-full bg-[#b4ef9d] text-[#3b6e2c] text-xs font-bold tracking-wider uppercase">FinTech</span>
              <span className="px-4 py-1 rounded-full bg-[#002112] text-white text-xs font-bold tracking-wider uppercase">Karachi</span>
              <span className="px-4 py-1 rounded-full bg-[#caf2d7] text-[#404943] text-xs font-bold tracking-wider uppercase">Founded: 2022</span>
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#0f5238] text-white rounded-lg font-bold shadow-xl hover:translate-y-[-2px] transition-all active:scale-95">
              <span className="material-symbols-outlined text-xl">connect_without_contact</span>
              Connect with Founder
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0f5238]/20 text-[#0f5238] rounded-lg font-bold hover:bg-[#0f5238]/5 transition-all active:scale-95">
              <span className="material-symbols-outlined text-xl">bookmark</span>
              Save
            </button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="flex gap-10 mb-10 border-b border-[#bfc9c1]/20 px-4">
        {["About", "Team", "Updates", "Connect"].map((tab, i) => (
          <button key={tab} className={`pb-4 text-base transition-colors ${i === 0 ? "font-bold text-[#0f5238] border-b-2 border-[#0f5238]" : "font-semibold text-[#404943] hover:text-[#0f5238]"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white p-10 rounded-xl shadow-[0_8px_32px_rgba(15,82,56,0.04)]">
            <div className="mb-10">
              <h3 className="text-2xl font-black text-[#002112] mb-4 tracking-tight">Problem We Solve</h3>
              <p className="text-[#404943] leading-relaxed text-lg">
                Small and medium enterprises in Pakistan face massive hurdles in digitizing their collections. High merchant fees, complex integration processes, and slow settlement cycles prevent thousands of local shops from moving away from cash. This creates a ceiling for their growth in a digital-first economy.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-black text-[#002112] mb-4 tracking-tight">Our Solution</h3>
              <p className="text-[#404943] leading-relaxed text-lg">
                PayEasy offers a &apos;one-tap&apos; payment infrastructure specifically designed for the local merchant ecosystem. Our platform provides instant onboarding, lowest-in-market transaction fees, and a simplified dashboard that works flawlessly even on entry-level smartphones. We bridge the gap between traditional banking and the street-side vendor.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-black text-[#002112] mb-6 tracking-tight">Traction &amp; Milestones</h3>
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.n} className="flex gap-6 items-start">
                    <span className="text-4xl font-black text-[#0f5238]/20 leading-none">{m.n}</span>
                    <div className="pt-1">
                      <h4 className="font-bold text-[#002112] mb-1">{m.title}</h4>
                      <p className="text-[#404943]">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#002112] mb-6 tracking-tight">External Links</h3>
              <div className="flex flex-wrap gap-4">
                {[{ icon: "language", label: "Website" }, { icon: "share", label: "LinkedIn" }, { icon: "description", label: "Pitch Deck" }].map((link) => (
                  <a key={link.label} href="#" className="flex items-center gap-3 px-5 py-3 rounded-lg bg-[#d5fde2] hover:bg-[#caf2d7] transition-colors group">
                    <span className="material-symbols-outlined text-[#0f5238] group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="font-bold text-[#0f5238]">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Updates Feed */}
          <div className="bg-white p-10 rounded-xl shadow-[0_8px_32px_rgba(15,82,56,0.04)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-[#002112] tracking-tight">Latest Update</h3>
              <span className="text-sm font-bold text-[#404943]/60 uppercase tracking-widest">Oct 24, 2023</span>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#b4ef9d] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#0f5238]">person</span>
              </div>
              <div>
                <p className="text-[#404943] text-lg leading-relaxed mb-4">
                  &ldquo;Excited to announce our partnership with three major local retail chains! This expands our merchant network by over 400 locations across Punjab. Scaling fast!&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-black text-[#002112]">Zain Ahmed</span>
                  <span className="w-1 h-1 rounded-full bg-[#404943]/30" />
                  <span className="text-[#404943] text-sm font-medium">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Info */}
          <div className="bg-[#cff7dd] p-8 rounded-xl">
            <h4 className="text-xl font-black text-[#002112] mb-6">Startup Info</h4>
            <div className="space-y-4">
              {info.map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-[#002112]/5">
                  <span className="text-[#404943] font-medium">{row.label}</span>
                  <span className="font-bold text-[#0f5238]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founders */}
          <div className="bg-[#cff7dd] p-8 rounded-xl">
            <h4 className="text-xl font-black text-[#002112] mb-6">Founders</h4>
            <div className="space-y-6">
              {founders.map((f) => (
                <div key={f.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#b4ef9d] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#0f5238]">person</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#002112]">{f.name}</div>
                      <div className="text-xs text-[#404943] font-semibold">{f.role}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#0f5238]/60 cursor-pointer hover:text-[#0f5238]">link</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-[#cff7dd] p-8 rounded-xl">
            <h4 className="text-xl font-black text-[#002112] mb-6">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white text-[#404943] text-xs font-bold shadow-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
