"use client";

import Link from "next/link";

const dashboardStats = [
  { label: "Profile Views", value: "284", icon: "visibility", change: "+12% this week" },
  { label: "Connections", value: "47", icon: "group", change: "+3 this week" },
  { label: "Ideas Submitted", value: "2", icon: "lightbulb", change: "" },
  { label: "Events Attended", value: "8", icon: "event", change: "" },
];

const quickLinks = [
  { label: "Edit Profile", icon: "edit", href: "/settings" },
  { label: "Submit Startup", icon: "add_business", href: "/startups/submit" },
  { label: "Browse Matches", icon: "handshake", href: "/match" },
  { label: "Post B2B Demand", icon: "storefront", href: "/b2b" },
  { label: "Submit Idea", icon: "lightbulb", href: "/ideas" },
  { label: "Volunteer", icon: "volunteer_activism", href: "/volunteer" },
];

const recentActivity = [
  { icon: "person_add", text: "Sara Ahmed accepted your connect request", time: "2h ago", color: "bg-[#b4ef9d]" },
  { icon: "auto_awesome", text: "Your startup 'FinFlow' received 3 profile views", time: "5h ago", color: "bg-[#caf2d7]" },
  { icon: "event", text: "Event reminder: Founder Pitch Night in 2 days", time: "1d ago", color: "bg-[#d5fde2]" },
  { icon: "article", text: "Your article was published to the blog", time: "3d ago", color: "bg-[#cff7dd]" },
];

export default function DashboardPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#0f5238] to-[#2d6a4f] rounded-2xl p-8 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-8 -translate-y-8">
            <span className="material-symbols-outlined text-[200px]">waving_hand</span>
          </div>
          <div>
            <p className="text-[#95d4b3] text-sm font-bold uppercase tracking-widest mb-2">Welcome back</p>
            <h1 className="text-3xl font-black tracking-tight mb-1">Ahmad Raza 👋</h1>
            <p className="text-[#a8e7c5]">Your profile is 78% complete. Add your skills to attract better matches.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/settings" className="bg-white text-[#0f5238] px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#d5fde2] transition-all">
              Complete Profile
            </Link>
            <Link href="/match" className="border-2 border-white text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-white/10 transition-all">
              Find Co-Founder
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {dashboardStats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(15,82,56,0.06)]">
              <div className="flex items-center justify-between mb-3">
                <span className="material-symbols-outlined text-[#0f5238] text-2xl">{s.icon}</span>
                <span className="text-3xl font-black text-[#002112]">{s.value}</span>
              </div>
              <p className="text-[#404943] text-sm font-medium">{s.label}</p>
              {s.change && <p className="text-[#0f5238] text-xs font-bold mt-1">{s.change}</p>}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main: Activity Feed */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(15,82,56,0.06)] overflow-hidden">
              <div className="p-6 border-b border-[#e0e0e0] flex justify-between items-center">
                <h2 className="font-black text-[#002112] text-lg">Recent Activity</h2>
                <Link href="/notifications" className="text-[#0f5238] font-bold text-sm hover:underline">View All</Link>
              </div>
              <div className="divide-y divide-[#f0f0f0]">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 hover:bg-[#f9fdfa] transition-colors">
                    <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center shrink-0`}>
                      <span className="material-symbols-outlined text-[#0f5238] text-lg">{a.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#002112]">{a.text}</p>
                      <p className="text-xs text-[#707973] mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Startups */}
            <div className="mt-8 bg-white rounded-xl shadow-[0_4px_24px_rgba(15,82,56,0.06)] overflow-hidden">
              <div className="p-6 border-b border-[#e0e0e0] flex justify-between items-center">
                <h2 className="font-black text-[#002112] text-lg">My Startups</h2>
                <Link href="/startups/submit" className="flex items-center gap-1 text-[#0f5238] font-bold text-sm hover:underline">
                  <span className="material-symbols-outlined text-sm">add</span> Add New
                </Link>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 p-4 bg-[#d5fde2] rounded-xl">
                  <div className="w-12 h-12 bg-[#b4ef9d] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#0f5238]">account_balance_wallet</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#002112]">FinFlow</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs bg-[#b7f2a0] text-[#1e5111] px-2 py-0.5 rounded-full font-bold uppercase">Growth</span>
                      <span className="text-xs text-[#404943]">Lahore · FinTech</span>
                    </div>
                  </div>
                  <Link href="/startups/finflow" className="text-[#0f5238] hover:underline font-bold text-sm">View →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Quick Links */}
          <div className="w-full lg:w-72 space-y-6">
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(15,82,56,0.06)] p-6">
              <h2 className="font-black text-[#002112] text-sm uppercase tracking-wider mb-5">Quick Actions</h2>
              <div className="space-y-2">
                {quickLinks.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#d5fde2] text-[#404943] hover:text-[#0f5238] transition-all group"
                  >
                    <span className="material-symbols-outlined text-xl text-[#707973] group-hover:text-[#0f5238] transition-colors">{q.icon}</span>
                    <span className="font-medium text-sm">{q.label}</span>
                    <span className="material-symbols-outlined text-sm ml-auto opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Profile Completeness */}
            <div className="bg-[#d5fde2] rounded-xl p-6">
              <h3 className="font-bold text-[#002112] mb-4">Profile Strength</h3>
              <div className="relative h-2 bg-[#bfc9c1]/30 rounded-full mb-3">
                <div className="absolute left-0 top-0 h-2 rounded-full bg-[#0f5238]" style={{ width: "78%" }} />
              </div>
              <p className="text-sm text-[#404943] mb-4">78% complete</p>
              <div className="space-y-2">
                {[
                  {ok: true, label: "Profile photo"},
                  {ok: true, label: "Bio added"},
                  {ok: false, label: "Skills & interests"},
                  {ok: false, label: "Social accounts"},
                  {ok: true, label: "Startup linked"},
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    <span className={`material-symbols-outlined text-sm ${item.ok ? "text-[#0f5238]" : "text-[#bfc9c1]"}`}>
                      {item.ok ? "check_circle" : "radio_button_unchecked"}
                    </span>
                    <span className={item.ok ? "text-[#002112]" : "text-[#707973]"}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
