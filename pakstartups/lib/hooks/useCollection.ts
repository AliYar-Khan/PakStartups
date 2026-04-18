// lib/hooks/useCollection.ts
// Generic React hook for real-time Firestore collection reads

"use client";

import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  type QueryConstraint,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export type UseCollectionOptions = {
  constraints?: QueryConstraint[];
  pageSize?: number;
};

export function useCollection<T>(
  collectionName: string,
  options: UseCollectionOptions = {}
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const constraints: QueryConstraint[] = [
      ...(options.constraints ?? []),
      limit(options.pageSize ?? 50),
    ];

    const q = query(collection(db, collectionName), ...constraints);

    const unsub = onSnapshot(
      q,
      (snap) => {
        setData(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as T));
        setLoading(false);
      },
      (err) => {
        console.error(`[useCollection] ${collectionName}:`, err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsub();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName]);

  return { data, loading, error };
}

// Convenience re-exports of common Firestore query helpers
export { where, orderBy, limit } from "firebase/firestore";
