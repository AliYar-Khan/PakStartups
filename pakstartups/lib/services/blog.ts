// lib/services/blog.ts
import {
  collection, addDoc, getDocs, getDoc, doc, query, where, limit, serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export type BlogPost = {
  id?: string;
  title: string;
  excerpt: string;
  challenge?: string;
  outcome?: string;
  startupName?: string;
  category: "Founder Journey" | "Case Study" | "Lessons Learned";
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  cover?: string;
  readTime?: string;
  status: "pending" | "approved" | "rejected";
  isFeatured: boolean;       // pinned to /blog featured banner (max 1)
  isPinnedHome: boolean;     // pinned to home page Founder Stories (max 3)
  createdAt?: unknown;
};

const COL = "blogPosts";

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const aMs = (a.createdAt as any)?.toMillis?.() ?? 0;
    const bMs = (b.createdAt as any)?.toMillis?.() ?? 0;
    return bMs - aMs;
  });
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  const q = query(collection(db, COL), where("status", "==", "approved"), limit(50));
  const snaps = await getDocs(q);
  const all = sortByDate(snaps.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost));
  if (!category || category === "All Posts") return all.slice(0, 20);
  const catMap: Record<string, string> = {
    "Founder Journeys": "Founder Journey",
    "Case Studies": "Case Study",
    "Lessons Learned": "Lessons Learned",
  };
  const target = catMap[category] ?? category;
  return all.filter((p) => p.category === target).slice(0, 20);
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const q = query(collection(db, COL), where("status", "==", "approved"), limit(50));
  const snaps = await getDocs(q);
  const featured = snaps.docs.find((d) => d.data().isFeatured === true);
  if (!featured) return null;
  return { id: featured.id, ...featured.data() } as BlogPost;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const snap = await getDoc(doc(db, COL, id));
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() } as BlogPost;
  } catch {
    return null;
  }
}

export async function getHomePinnedPosts(): Promise<BlogPost[]> {
  const q = query(collection(db, COL), where("isPinnedHome", "==", true), limit(3));
  const snaps = await getDocs(q);
  return snaps.docs
    .map((d) => ({ id: d.id, ...d.data() }) as BlogPost)
    .filter((p) => p.status === "approved");
}

export async function submitPost(data: Omit<BlogPost, "id" | "status" | "isFeatured" | "isPinnedHome" | "createdAt">) {
  return addDoc(collection(db, COL), {
    ...data,
    status: "pending",
    isFeatured: false,
    isPinnedHome: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}
