// lib/firebase/firestore.ts
// Typed Firestore helpers for all platform collections

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  serverTimestamp,
  type QueryDocumentSnapshot,
  type DocumentData,
  type WhereFilterOp,
} from "firebase/firestore";
import { db } from "./config";

// ─── Generic helpers ──────────────────────────────────────────────────────────

/** Fetch a single document by id */
export async function getDocument<T>(collectionName: string, id: string): Promise<T | null> {
  const snap = await getDoc(doc(db, collectionName, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as T;
}

/** Fetch all docs matching optional filters */
export async function getDocuments<T>(
  collectionName: string,
  filters: { field: string; op: WhereFilterOp; value: unknown }[] = [],
  sortField?: string,
  sortDir?: "asc" | "desc",
  pageSize = 20,
  cursor?: QueryDocumentSnapshot<DocumentData>
): Promise<T[]> {
  let q = query(collection(db, collectionName));

  for (const f of filters) {
    q = query(q, where(f.field, f.op, f.value));
  }
  if (sortField) q = query(q, orderBy(sortField, sortDir ?? "desc"));
  q = query(q, limit(pageSize));
  if (cursor) q = query(q, startAfter(cursor));

  const snaps = await getDocs(q);
  return snaps.docs.map((d) => ({ id: d.id, ...d.data() }) as T);
}

/** Add a new document with auto-id */
export async function addDocument<T extends Record<string, unknown>>(
  collectionName: string,
  data: T
) {
  const ref = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

/** Update specific fields on a document */
export async function updateDocument<T extends Record<string, unknown>>(
  collectionName: string,
  id: string,
  data: Partial<T>
) {
  await updateDoc(doc(db, collectionName, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/** Delete a document */
export async function deleteDocument(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}

// ─── Collection-specific helpers ──────────────────────────────────────────────

export const Collections = {
  USERS: "users",
  STARTUPS: "startups",
  MATCH_PROFILES: "matchProfiles",
  B2B_DEMANDS: "b2bDemands",
  B2B_SOLUTIONS: "b2bSolutions",
  KNOWLEDGE_RESOURCES: "knowledgeResources",
  EVENTS: "events",
  IDEAS: "ideas",
  BLOG_POSTS: "blogPosts",
  NOTIFICATIONS: "notifications",
  CONNECTIONS: "connections",
} as const;
