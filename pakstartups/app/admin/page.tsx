import Link from "next/link";
import Image from "next/image";

export default function AdminDashboardPage() {
  const queue = [
    { name: "EdTech Pro", applicant: "Ali Hasan", category: "EdTech", stage: "Idea", date: "Oct 24, 2024", avatar: "/images/image-049.jpg" },
    { name: "HealthHub", applicant: "Sara Ahmed", category: "HealthTech", stage: "MVP", date: "Oct 23, 2024", avatar: "/images/image-050.jpg" },
    { name: "AgriSupply", applicant: "Zain Khan", category: "AgriTech", stage: "Growth", date: "Oct 22, 2024", avatar: "/images/image-051.jpg" },
    { name: "FinStream", applicant: "Omar Farooq", category: "FinTech", stage: "MVP", date: "Oct 21, 2024", avatar: "/images/image-052.jpg" },
    { name: "EcoLogistics", applicant: "Mariam Javed", category: "Logistics", stage: "Scaling", date: "Oct 20, 2024", avatar: "/images/image-053.jpg" },
    { name: "SkillUp PK", applicant: "Usman Ali", category: "EdTech", stage: "Idea", date: "Oct 19, 2024", avatar: "/images/image-054.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f5fbf7]">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-16 px-8 sticky top-0 z-40 bg-[#dee4e0]/80 backdrop-blur-xl border-b border-[#bfc9c1]/20">
        <div className="flex-1 flex items-center gap-6">
          <Link href="/" className="font-bold text-[#0f5238] uppercase tracking-widest text-lg">
            PakStartups Admin
          </Link>
          <div className="relative w-full max-w-md hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#404943] text-lg">search</span>
            <input className="w-full bg-[#dee4e0] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#0f5238] outline-none placeholder:text-[#404943]/60" placeholder="Search startups, applicants..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#0f5238] border border-[#0f5238]/20 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#b1f0ce] transition-colors">
            Export Data
          </button>
          <div className="flex items-center gap-4 text-[#404943]">
            <button className="p-1 hover:bg-[#e3eae6] rounded-full transition-colors hidden sm:block">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-[#2d6a4f] overflow-hidden ring-2 ring-[#f5fbf7]">
              <Image width={32} height={32} src="/images/image-048.jpg" alt="Admin info" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1440px] mx-auto w-full">
        {/* SideNavBar */}
        <aside className="w-64 border-r border-[#bfc9c1]/20 flex flex-col pt-8 pb-6 px-4 hidden lg:flex bg-white">
          <nav className="flex-1 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#404943] hover:text-[#0f5238] hover:bg-[#e3eae6] transition-colors font-semibold tracking-tight">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Overview</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[#0f5238] font-bold bg-[#e3eae6] tracking-tight">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined filled">pending_actions</span>
                <span>Startup Queue</span>
              </div>
              <span className="bg-[#0f5238] text-white text-[10px] px-2 py-0.5 rounded-full">12</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#404943] hover:text-[#0f5238] hover:bg-[#e3eae6] transition-colors font-semibold tracking-tight">
              <span className="material-symbols-outlined">group</span>
              <span>User Management</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#404943] hover:text-[#0f5238] hover:bg-[#e3eae6] transition-colors font-semibold tracking-tight">
              <span className="material-symbols-outlined">article</span>
              <span>Blog & Stories</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#404943] hover:text-[#0f5238] hover:bg-[#e3eae6] transition-colors font-semibold tracking-tight">
              <span className="material-symbols-outlined">volunteer_activism</span>
              <span>Volunteer Apps</span>
            </a>
          </nav>
        </aside>

        {/* Content Canvas */}
        <main className="p-8 space-y-8 flex-1 w-full bg-white">
          {/* Page Header */}
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-extrabold text-[#002112] tracking-tight">Startup Approval Queue</h2>
            <p className="text-[#404943] font-medium">Review pending startup submissions before they go live.</p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap gap-4 justify-between items-center bg-[#f5fbf7] p-4 rounded-lg border border-[#bfc9c1]/20">
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#bfc9c1]/20 text-sm font-semibold hover:border-[#0f5238]/30 transition-all text-[#002112]">
                Filter by Stage
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#bfc9c1]/20 text-sm font-semibold hover:border-[#0f5238]/30 transition-all text-[#002112]">
                All Categories
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#404943] hover:text-[#002112]">
              <span className="material-symbols-outlined text-lg">sort</span>
              Sort by Oldest
            </button>
          </div>

          {/* Data Table Section */}
          <div className="overflow-hidden bg-white border border-[#bfc9c1]/20 rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-[#f5fbf7] border-b border-[#bfc9c1]/20">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Startup Name</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Submitted By</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Category</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Stage</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#bfc9c1]/20">
                  {queue.map((item, i) => (
                    <tr key={item.name} className="hover:bg-[#f5fbf7] transition-colors">
                      <td className="px-6 py-4">
                         <span className="font-bold text-[#002112]">{item.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Image width={32} height={32} src={item.avatar} alt="headshot" className="w-8 h-8 rounded-full object-cover shadow-sm bg-[#e8ffee]" />
                          <span className="text-sm font-medium text-[#002112]">{item.applicant}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded bg-[#b4ef9d]/30 text-[#0e5138] text-xs font-bold">{item.category}</span>
                      </td>
                      <td className="px-6 py-4">
                         <span className="px-2.5 py-1 rounded bg-[#c4ecd2]/30 text-[#2b4e3b] text-xs font-bold">{item.stage}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#404943]">{item.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="bg-[#0f5238] text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-[#2d6a4f] transition-colors">Review</button>
                          <button className="text-[#404943] hover:text-[#0f5238] px-2 py-1.5 rounded-lg text-xs font-bold transition-colors">Approve</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#bfc9c1]/20 bg-[#f5fbf7]">
              <span className="text-sm text-[#404943] font-medium">1-6 of 12 waiting</span>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg hover:bg-[#e3eae6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="p-2 rounded-lg hover:bg-[#e3eae6] transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
