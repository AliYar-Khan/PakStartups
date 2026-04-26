"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { submitPost } from "@/lib/services/blog";

type StoryForm = {
  title: string;
  founderName: string;
  startupName: string;
  category: "Founder Journey" | "Case Study" | "Lessons Learned" | "";
  summary: string;
  challenge: string;
  outcome: string;
};

const initialForm: StoryForm = {
  title: "",
  founderName: "",
  startupName: "",
  category: "",
  summary: "",
  challenge: "",
  outcome: "",
};

const CATEGORIES = [
  { value: "Founder Journey", label: "Founder Journey" },
  { value: "Case Study", label: "Case Study" },
  { value: "Lessons Learned", label: "Lessons Learned" },
] as const;

export default function SubmitBlogPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState<StoryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = useMemo(() => {
    return Object.values(form).every((value) => value.trim().length > 0);
  }, [form]);

  function updateField<K extends keyof StoryForm>(key: K, value: StoryForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) {
      router.push("/auth/signup");
      return;
    }
    if (!isValid || !form.category) return;

    setSubmitting(true);
    setError(null);
    try {
      await submitPost({
        title: form.title,
        authorName: form.founderName,
        authorId: user.uid,
        startupName: form.startupName,
        excerpt: form.summary,
        challenge: form.challenge,
        outcome: form.outcome,
        category: form.category as "Founder Journey" | "Case Study" | "Lessons Learned",
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Failed to submit your story. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <div className="bg-[#effcf3] border border-[#cdebd7] rounded-2xl p-8 text-center">
          <span className="material-symbols-outlined text-5xl text-[#0f5238] mb-4">check_circle</span>
          <h1 className="text-3xl font-black text-[#002112]">Story submitted!</h1>
          <p className="mt-3 text-[#404943]">
            Thank you for sharing your journey. Our team will review it and publish it on the blog.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/blog" className="px-6 py-3 rounded-lg bg-[#0f5238] text-white font-bold hover:bg-[#2d6a4f] transition-all">
              Back to Blog
            </Link>
            <Link href="/dashboard" className="px-6 py-3 rounded-lg border-2 border-[#0f5238] text-[#0f5238] font-bold hover:bg-[#d5fde2] transition-all">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 md:px-8 py-16">
      <Link href="/blog" className="text-[#0f5238] font-bold text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-black text-[#002112]">Submit Your Story</h1>
      <p className="mt-3 text-[#404943]">
        Share lessons, milestones, and outcomes so the community can learn from real founder stories.
      </p>

      {!user && (
        <div className="mt-6 rounded-xl border border-[#f2cf66] bg-[#fff9e6] px-4 py-3 text-sm text-[#5f4a00]">
          You need an account to submit. You&apos;ll be redirected to sign up when you click submit.
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 bg-white border border-[#dbeee2] rounded-2xl p-6 md:p-8">
        <input
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="Story title"
          className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            value={form.founderName}
            onChange={(e) => updateField("founderName", e.target.value)}
            placeholder="Founder name"
            className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
          />
          <input
            value={form.startupName}
            onChange={(e) => updateField("startupName", e.target.value)}
            placeholder="Startup name"
            className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
          />
        </div>

        <select
          value={form.category}
          onChange={(e) => updateField("category", e.target.value as StoryForm["category"])}
          className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238] text-[#404943]"
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>

        <textarea
          value={form.summary}
          onChange={(e) => updateField("summary", e.target.value)}
          placeholder="Brief summary of your story"
          rows={3}
          className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
        />

        <textarea
          value={form.challenge}
          onChange={(e) => updateField("challenge", e.target.value)}
          placeholder="What was the biggest challenge you faced?"
          rows={4}
          className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
        />

        <textarea
          value={form.outcome}
          onChange={(e) => updateField("outcome", e.target.value)}
          placeholder="What outcome or result did you achieve?"
          rows={4}
          className="w-full border border-[#dbeee2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
        />

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={!isValid || submitting}
            className="px-6 py-3 rounded-lg bg-[#0f5238] text-white font-bold hover:bg-[#2d6a4f] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {submitting && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
            {submitting ? "Submitting…" : "Submit Story"}
          </button>
          <a
            href="mailto:hello@pakstartups.org?subject=PakStartups%20Story%20Submission"
            className="px-6 py-3 rounded-lg border-2 border-[#0f5238] text-[#0f5238] font-bold hover:bg-[#d5fde2] transition-all"
          >
            Submit by Email
          </a>
        </div>
      </form>
    </main>
  );
}
