import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications — PakStartups",
  description: "Stay up to date with your connections, ecosystem updates, and events.",
};

const notifications = [
  { icon: "person", bg: "bg-[#b4ef9d]", text: <><b>Fatima Khan</b> accepted your co-founder connection request.</>, time: "2 hours ago", unread: true, action: "Message" },
  { icon: "auto_awesome", bg: "bg-[#caf2d7]", text: <>New startup <b>TechFlow</b> matching your B2B demand was added.</>, time: "5 hours ago", unread: true, action: "View Startup" },
  { icon: "calendar_today", bg: "bg-[#d5fde2]", text: <>Reminder: <b>Friday Founder Pitch Night</b> starts in 1 hour.</>, time: "Yesterday", unread: false, action: null },
  { icon: "article", bg: "bg-[#cff7dd]", text: <>Your submitted article <b>Navigating SECP Registration</b> is now published.</>, time: "2 days ago", unread: false, action: null },
];

export default function NotificationsPage() {
  return (
    <>
      {/* Header */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black text-[#002112]">Notifications</h1>
          <button className="text-[#0f5238] font-bold text-sm hover:underline">Mark all as read</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {[{label:"All",active:true},{label:"Connections",badge:2},{label:"Ecosystem"},{label:"Events"},{label:"System"}].map((tab)=>(
            <button key={tab.label} className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${tab.active ? "bg-[#0f5238] text-white" : "border border-[#bfc9c1] text-[#404943] hover:border-[#0f5238] hover:text-[#0f5238]"}`}>
              {tab.label}
              {tab.badge && <span className="bg-white text-[#0f5238] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">{tab.badge}</span>}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="space-y-3">
          {notifications.map((n, i) => (
            <div key={i} className={`flex items-center gap-4 p-6 rounded-xl bg-white border transition-all hover:shadow-[0_4px_24px_rgba(15,82,56,0.06)] ${n.unread ? "border-[#b4ef9d]" : "border-[#e0e0e0]"}`}>
              <div className={`w-12 h-12 rounded-xl ${n.bg} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[#0f5238]">{n.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-[#002112] text-sm">{n.text}</p>
                <p className="text-[#707973] text-xs mt-1">{n.time}</p>
              </div>
              {n.unread && <div className="w-2 h-2 rounded-full bg-[#0f5238] shrink-0" />}
              {n.action && (
                <button className="text-[#0f5238] font-bold text-sm hover:underline whitespace-nowrap shrink-0">
                  {n.action}
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#707973] font-bold uppercase tracking-widest mt-12">
          No more notifications
        </p>
      </div>
    </>
  );
}
