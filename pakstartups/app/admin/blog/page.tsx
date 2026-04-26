"use client";

import { useState, useEffect, useMemo } from "react";
import { collection, query, where, onSnapshot, updateDoc, doc, serverTimestamp, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

const MAX_HOME_PINS = 3;

type BlogPost = {
  id: string;
  title: string;
  authorName: string;
  category: string;
  status: string;
  isFeatured: boolean;
  isPinnedHome: boolean;
  createdAt: { toDate?: () => Date } | string | null;
};

function formatDate(ts: BlogPost["createdAt"]) {
  if (!ts) return "–";
  const d = (ts as { toDate?: () => Date }).toDate ? (ts as { toDate: () => Date }).toDate() : new Date(ts as string);
  return d.toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" });
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"pending" | "approved" | "all">("pending");
  const [updating, setUpdating] = useState<Set<string>>(new Set());

  const homePinCount = useMemo(() => posts.filter((p) => p.isPinnedHome).length, [posts]);

  useEffect(() => {
    setLoading(true);
    const q = tab === "all"
      ? query(collection(db, "blogPosts"), limit(50))
      : query(collection(db, "blogPosts"), where("status", "==", tab), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const all = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost);
      all.sort((a, b) => {
        const aMs = (a.createdAt as any)?.toMillis?.() ?? 0;
        const bMs = (b.createdAt as any)?.toMillis?.() ?? 0;
        return bMs - aMs;
      });
      setPosts(all);
      setLoading(false);
    }, (err) => { console.error(err); setLoading(false); });
    return () => unsub();
  }, [tab]);

  const handleAction = async (id: string, status: "approved" | "rejected") => {
    setUpdating((prev) => new Set([...prev, id]));
    await updateDoc(doc(db, "blogPosts", id), {
      status,
      isFeatured: false,
      isPinnedHome: false,
      updatedAt: serverTimestamp(),
    });
    setUpdating((prev) => { const s = new Set(prev); s.delete(id); return s; });
  };

  // Blog page featured banner — only 1 at a time
  const handlePinFeatured = async (id: string, currentlyFeatured: boolean) => {
    setUpdating((prev) => new Set([...prev, id]));
    if (!currentlyFeatured) {
      const snap = await getDocs(query(collection(db, "blogPosts"), where("isFeatured", "==", true), limit(10)));
      await Promise.all(snap.docs.map((d) => updateDoc(d.ref, { isFeatured: false })));
      await updateDoc(doc(db, "blogPosts", id), { isFeatured: true, updatedAt: serverTimestamp() });
    } else {
      await updateDoc(doc(db, "blogPosts", id), { isFeatured: false, updatedAt: serverTimestamp() });
    }
    setUpdating((prev) => { const s = new Set(prev); s.delete(id); return s; });
  };

  // Home page Founder Stories — up to MAX_HOME_PINS at a time
  const handlePinHome = async (id: string, currentlyPinned: boolean) => {
    if (!currentlyPinned && homePinCount >= MAX_HOME_PINS) return;
    setUpdating((prev) => new Set([...prev, id]));
    await updateDoc(doc(db, "blogPosts", id), {
      isPinnedHome: !currentlyPinned,
      updatedAt: serverTimestamp(),
    });
    setUpdating((prev) => { const s = new Set(prev); s.delete(id); return s; });
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#002112] tracking-tight">Blog &amp; Stories</h2>
          <p className="text-[#404943] font-medium mt-1">Review, approve, and feature blog submissions.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#fef3c7] text-[#92400e] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">star</span>
            Blog Featured: 1 max
          </div>
          <div className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 ${homePinCount >= MAX_HOME_PINS ? "bg-[#fee2e2] text-red-700" : "bg-[#dcfce7] text-[#166534]"}`}>
            <span className="material-symbols-outlined text-sm">home</span>
            Home Stories: {homePinCount}/{MAX_HOME_PINS}
          </div>
        </div>
      </div>

      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-4 text-sm text-[#166534] space-y-1">
        <p className="font-bold">Pin controls (approved posts only):</p>
        <p><span className="font-semibold">Blog Featured</span> — shows as the hero banner at the top of /blog. Only 1 at a time.</p>
        <p><span className="font-semibold">Home Stories</span> — appears in the &quot;Founder Stories&quot; section on the home page. Up to {MAX_HOME_PINS} at a time. Remove all to hide the section.</p>
      </div>

      <div className="flex gap-4 border-b border-[#e0e0e0]">
        {(["pending", "approved", "all"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 text-sm font-bold capitalize transition-colors ${tab === t ? "text-[#0f5238] border-b-2 border-[#0f5238]" : "text-[#404943] hover:text-[#0f5238]"}`}
          >
            {t === "all" ? "All Posts" : t === "pending" ? "Pending Review" : "Approved"}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto bg-white border border-[#bfc9c1]/20 rounded-xl">
        {loading ? (
          <div className="p-12 text-center"><span className="inline-block w-8 h-8 border-4 border-[#0f5238]/20 border-t-[#0f5238] rounded-full animate-spin" /></div>
        ) : posts.length === 0 ? (
          <div className="p-16 text-center">
            <span className="material-symbols-outlined text-5xl text-[#bfc9c1]">article</span>
            <p className="text-[#404943] mt-2">No {tab} posts found.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="bg-[#f5fbf7] border-b border-[#bfc9c1]/20">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Title</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Author</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Category</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Submitted</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Status</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#404943]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#bfc9c1]/20">
              {posts.map((p) => (
                <tr key={p.id} className="hover:bg-[#f5fbf7] transition-colors">
                  <td className="px-5 py-4 max-w-[240px]">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {p.isFeatured && (
                        <span title="Pinned to blog featured" className="material-symbols-outlined text-sm text-[#f59e0b]">star</span>
                      )}
                      {p.isPinnedHome && (
                        <span title="Pinned to home page" className="material-symbols-outlined text-sm text-[#16a34a]">home</span>
                      )}
                      <span className="font-bold text-[#002112] truncate">{p.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#404943]">{p.authorName}</td>
                  <td className="px-5 py-4"><span className="px-2 py-0.5 bg-[#b4ef9d]/30 text-[#0e5138] text-xs font-bold rounded">{p.category}</span></td>
                  <td className="px-5 py-4 text-sm text-[#404943]">{formatDate(p.createdAt)}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 text-xs font-bold rounded capitalize ${p.status === "approved" ? "bg-[#c4ecd2] text-[#0f5238]" : p.status === "pending" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-700"}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2 flex-wrap">
                      {p.status !== "approved" && (
                        <button onClick={() => handleAction(p.id, "approved")} disabled={updating.has(p.id)} className="bg-[#0f5238] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#2d6a4f] transition-colors disabled:opacity-60">
                          Approve
                        </button>
                      )}

                      {p.status === "approved" && (
                        <>
                          <button
                            onClick={() => handlePinFeatured(p.id, p.isFeatured)}
                            disabled={updating.has(p.id)}
                            title={p.isFeatured ? "Remove from blog featured" : "Set as blog featured story"}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors disabled:opacity-60 flex items-center gap-1 ${p.isFeatured ? "bg-[#fef3c7] text-[#92400e] hover:bg-[#fde68a]" : "bg-[#fffbeb] text-[#b45309] hover:bg-[#fef3c7] border border-[#fde68a]"}`}
                          >
                            <span className="material-symbols-outlined text-xs">star</span>
                            {p.isFeatured ? "Unfeature" : "Feature"}
                          </button>

                          <button
                            onClick={() => handlePinHome(p.id, p.isPinnedHome)}
                            disabled={updating.has(p.id) || (!p.isPinnedHome && homePinCount >= MAX_HOME_PINS)}
                            title={
                              p.isPinnedHome
                                ? "Remove from home page stories"
                                : homePinCount >= MAX_HOME_PINS
                                ? `Home stories full (${MAX_HOME_PINS}/${MAX_HOME_PINS}) — unpin one first`
                                : "Pin to home page Founder Stories"
                            }
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 ${p.isPinnedHome ? "bg-[#dcfce7] text-[#166534] hover:bg-[#bbf7d0]" : "bg-[#f0fdf4] text-[#166534] hover:bg-[#dcfce7] border border-[#bbf7d0]"}`}
                          >
                            <span className="material-symbols-outlined text-xs">home</span>
                            {p.isPinnedHome ? "Unpin Home" : "Pin Home"}
                          </button>
                        </>
                      )}

                      {p.status !== "rejected" && (
                        <button onClick={() => handleAction(p.id, "rejected")} disabled={updating.has(p.id)} className="text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors disabled:opacity-60">
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
