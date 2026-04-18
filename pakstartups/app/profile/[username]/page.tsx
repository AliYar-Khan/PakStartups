import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ahmad Raza — PakStartups",
  description: "Founder at PayPak, building Pakistan's next fintech unicorn.",
};

const skills = ["Product Strategy", "FinTech", "Go-to-Market", "Venture Capital", "Blockchain", "Mentorship"];
const social = [
  { icon: "link", label: "LinkedIn" },
  { icon: "forum", label: "Discord" },
  { icon: "alternate_email", label: "Twitter/X" },
];

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-[#e8ffee]">
      {/* Profile Header Banner */}
      <section className="relative">
        <div className="h-64 w-full bg-gradient-to-r from-[#b4ef9d] to-[#caf2d7] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(#0f5238 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative -mt-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#bfc9c1]/10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-[#b4ef9d] overflow-hidden shadow-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#0f5238] text-7xl">person</span>
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-black text-[#002112] tracking-tighter">Ahmad Raza</h1>
                  <span className="bg-[#2d6a4f] text-[#a8e7c5] px-3 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase">
                    Founder
                  </span>
                </div>
                <p className="text-lg text-[#404943] font-medium">Building Pakistan&apos;s next fintech unicorn</p>
                <div className="flex items-center gap-4 text-[#404943] text-sm font-medium">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Lahore, Pakistan
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">link</span> paypak.pk
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-2">
              <button className="bg-[#bfc9c1]/20 hover:bg-[#bfc9c1]/40 text-[#002112] font-bold px-6 py-2.5 rounded-lg text-sm transition-all active:scale-95">
                Message
              </button>
              <button className="bg-gradient-to-br from-[#0f5238] to-[#2d6a4f] text-white font-bold px-8 py-2.5 rounded-lg text-sm shadow-xl shadow-[#0f5238]/20 transition-all active:scale-95 hover:opacity-90">
                Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Tab Bar */}
      <nav className="sticky top-20 z-40 bg-[#e8ffee]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 border-b border-[#bfc9c1]/10">
          <div className="flex gap-8 overflow-x-auto">
            {["Overview", "Startups", "Activity", "Co-Founder Card"].map((tab, i) => (
              <button key={tab} className={`py-4 text-sm whitespace-nowrap ${i === 0 ? "font-bold text-[#0f5238] border-b-2 border-[#0f5238]" : "font-medium text-[#404943] hover:text-[#0f5238] transition-colors"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Canvas */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(15,82,56,0.02)]">
              <h2 className="text-xl font-bold text-[#002112] mb-4">About</h2>
              <p className="text-[#404943] leading-relaxed">
                Passionate entrepreneur with 8+ years of experience in digital finance and banking infrastructure. I&apos;m currently focused on solving the cross-border payment gap for Pakistani freelancers and SMEs through PayPak. My mission is to integrate Pakistan&apos;s talented workforce into the global digital economy through seamless financial rails.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(15,82,56,0.02)]">
              <h2 className="text-xl font-bold text-[#002112] mb-6">Skills &amp; Interests</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="bg-[#b7f2a0] text-[#1e5111] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Linked Startups */}
            <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(15,82,56,0.02)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#002112]">Linked Startups</h2>
                <button className="text-[#0f5238] text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="p-6 bg-[#d5fde2] rounded-xl flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-[#2d6a4f] rounded-xl flex items-center justify-center text-[#a8e7c5]">
                  <span className="material-symbols-outlined text-4xl">account_balance_wallet</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-extrabold text-[#002112]">PayPak</h3>
                  <p className="text-[#404943] text-sm mb-3">Empowering Pakistan&apos;s freelance economy with borderless payments.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="text-xs font-bold flex items-center gap-1 bg-[#c4ecd2] px-2 py-1 rounded text-[#0f5238]">
                      <span className="material-symbols-outlined text-xs">rocket_launch</span> MVP STAGE
                    </span>
                    <span className="text-xs font-bold flex items-center gap-1 text-[#404943]">
                      <span className="material-symbols-outlined text-xs">location_on</span> Karachi
                    </span>
                  </div>
                </div>
                <Link href="/startups/paypak" className="bg-white text-[#0f5238] p-2 rounded-lg border border-[#0f5238]/10 hover:bg-[#0f5238] hover:text-white transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: 1/3 */}
          <div className="space-y-8">
            {/* Presence */}
            <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(15,82,56,0.02)]">
              <h2 className="text-sm font-black text-[#002112] tracking-widest uppercase mb-6 opacity-50">Presence</h2>
              <div className="space-y-4">
                {social.map((s) => (
                  <a key={s.label} href="#" className="flex items-center justify-between group">
                    <span className="flex items-center gap-3 text-[#404943] group-hover:text-[#0f5238] font-medium transition-colors">
                      <span className="material-symbols-outlined">{s.icon}</span> {s.label}
                    </span>
                    <span className="material-symbols-outlined text-[#404943] opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Member Since */}
            <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(15,82,56,0.02)] border-l-4 border-[#0f5238]">
              <h2 className="text-sm font-black text-[#002112] tracking-widest uppercase mb-2 opacity-50">Member Since</h2>
              <p className="text-2xl font-black text-[#002112]">March 2022</p>
              <p className="text-xs text-[#404943] mt-1">Verified Community Contributor</p>
            </div>

            {/* Looking For */}
            <div className="bg-[#2d6a4f] p-8 rounded-xl shadow-xl shadow-[#0f5238]/10 text-[#a8e7c5]">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined">search</span>
                <h2 className="text-sm font-black tracking-widest uppercase">Looking for</h2>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                &ldquo;Currently seeking a Co-founder with a strong background in Regulatory Compliance and State Bank licensing to help PayPak scale our operations in the MENA region.&rdquo;
              </p>
              <button className="mt-6 w-full bg-white text-[#0f5238] font-bold py-3 rounded-lg text-sm hover:bg-[#d5fde2] transition-colors">
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
