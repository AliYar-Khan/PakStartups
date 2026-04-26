"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getHomePinnedPosts, type BlogPost } from "@/lib/services/blog";

const catColors: Record<string, string> = {
  "Case Study": "text-[#0f5238]",
  "Founder Journey": "text-[#1e5111]",
  "Lessons Learned": "text-[#2d6a4f]",
};

function SkeletonStory() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center animate-pulse">
      <div className="w-full md:w-1/3 aspect-[16/10] rounded-xl bg-[#e8f5ec]" />
      <div className="w-full md:w-2/3 space-y-3">
        <div className="h-4 w-24 bg-[#e8f5ec] rounded" />
        <div className="h-8 w-3/4 bg-[#e8f5ec] rounded" />
        <div className="h-5 w-full bg-[#e8f5ec] rounded" />
        <div className="h-5 w-2/3 bg-[#e8f5ec] rounded" />
      </div>
    </div>
  );
}

export default function FounderStoriesSection() {
  const [stories, setStories] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    getHomePinnedPosts()
      .then((posts) => setStories(posts))
      .catch(() => setStories([]));
  }, []);

  if (stories === null) {
    return (
      <section className="bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="h-10 w-64 bg-[#e8f5ec] rounded animate-pulse mb-2" />
              <div className="h-5 w-80 bg-[#e8f5ec] rounded animate-pulse" />
            </div>
          </div>
          <div className="space-y-12">
            {[0, 1, 2].map((i) => <SkeletonStory key={i} />)}
          </div>
        </div>
      </section>
    );
  }

  if (stories.length === 0) return null;

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black text-[#002112] tracking-tight mb-2">
              Founder Stories
            </h2>
            <p className="text-[#404943] font-medium">
              Real journeys from Pakistan&apos;s most resilient entrepreneurs.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-[#0f5238] font-bold flex items-center gap-2 group"
          >
            View All Stories{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="space-y-12">
          {stories.map((s) => (
            <Link
              key={s.id}
              href={`/blog/${s.id}`}
              className="flex flex-col md:flex-row gap-8 items-center group cursor-pointer"
            >
              <div className="w-full md:w-1/3 aspect-[16/10] rounded-xl overflow-hidden bg-[#d5fde2] flex items-center justify-center shrink-0">
                {s.cover ? (
                  <img
                    src={s.cover}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <span className="material-symbols-outlined text-5xl text-[#0f5238]/40">article</span>
                )}
              </div>
              <div className="w-full md:w-2/3">
                <span className={`font-bold text-xs uppercase tracking-widest mb-3 block ${catColors[s.category] ?? "text-[#0f5238]"}`}>
                  {s.category}{s.startupName ? ` · ${s.startupName}` : ""}
                </span>
                <h3 className="text-3xl font-black text-[#002112] mb-4 group-hover:text-[#0f5238] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#404943] text-lg leading-relaxed mb-6 line-clamp-2">{s.excerpt}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#cff7dd] flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm text-[#0f5238]">person</span>
                  </div>
                  <span className="text-sm font-bold text-[#002112]">By {s.authorName}</span>
                  {s.readTime && <span className="text-sm text-[#404943]">• {s.readTime}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
