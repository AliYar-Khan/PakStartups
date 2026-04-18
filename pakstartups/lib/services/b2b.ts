// lib/services/b2b.ts
import {
  collection, addDoc, getDocs, query, where, orderBy, limit, serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export type B2BDemand = {
  id?: string;
  title: string;
  desc: string;
  category: string;
  tags: string[];
  budget: string;
  deadline: string;
  ownerId: string;
  ownerName: string;
  ownerAvatar?: string;
  icon: string;
  status: "active" | "closed";
  createdAt?: unknown;
};

export type B2BSolution = {
  id?: string;
  title: string;
  desc: string;
  category: string;
  tags: string[];
  priceRange: string;
  ownerId: string;
  ownerName: string;
  ownerAvatar?: string;
  icon: string;
  status: "active" | "inactive";
  createdAt?: unknown;
};

const DEMANDS_COL = "b2bDemands";
const SOLUTIONS_COL = "b2bSolutions";

export async function getB2BDemands(category?: string): Promise<B2BDemand[]> {
  let q = query(
    collection(db, DEMANDS_COL),
    where("status", "==", "active"),
    orderBy("createdAt", "desc"),
    limit(20)
  );
  if (category && category !== "All Categories") {
    q = query(
      collection(db, DEMANDS_COL),
      where("status", "==", "active"),
      where("category", "==", category),
      orderBy("createdAt", "desc"),
      limit(20)
    );
  }
  const snaps = await getDocs(q);
  return snaps.docs.map((d) => ({ id: d.id, ...d.data() }) as B2BDemand);
}

export async function getB2BSolutions(category?: string): Promise<B2BSolution[]> {
  let q = query(
    collection(db, SOLUTIONS_COL),
    where("status", "==", "active"),
    orderBy("createdAt", "desc"),
    limit(20)
  );
  if (category && category !== "All Categories") {
    q = query(
      collection(db, SOLUTIONS_COL),
      where("status", "==", "active"),
      where("category", "==", category),
      orderBy("createdAt", "desc"),
      limit(20)
    );
  }
  const snaps = await getDocs(q);
  return snaps.docs.map((d) => ({ id: d.id, ...d.data() }) as B2BSolution);
}

export async function postB2BDemand(data: Omit<B2BDemand, "id" | "status" | "createdAt">) {
  return addDoc(collection(db, DEMANDS_COL), {
    ...data,
    status: "active",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function listB2BSolution(data: Omit<B2BSolution, "id" | "status" | "createdAt">) {
  return addDoc(collection(db, SOLUTIONS_COL), {
    ...data,
    status: "active",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}
