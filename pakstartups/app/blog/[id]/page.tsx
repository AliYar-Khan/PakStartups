import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/services/blog";

type PageParams = { id: string };

const catColors: Record<string, string> = {
  "Case Study": "bg-[#d5fde2] text-[#0f5238]",
  "Founder Journey": "bg-[#b7f2a0] text-[#1e5111]",
  "Lessons Learned": "bg-[#caf2d7] text-[#2d6a4f]",
};

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) {
    return {
      title: "Story Not Found",
      description: "This story may have been removed or is no longer available.",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.authorName],
      images: post.cover ? [{ url: post.cover, width: 1200, height: 630, alt: post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post || post.status !== "approved") {
    notFound();
  }

  return (
    <>
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-3xl mx-auto px-8 py-4 flex items-center gap-2">
          <Link href="/blog" className="flex items-center gap-1 text-sm text-[#404943] hover:text-[#0f5238] transition-colors font-medium">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Stories
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-8 py-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${catColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
            {post.category}
          </span>
          {post.isFeatured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#0f5238] text-white">
              Featured
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-[#002112] tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-[#404943] leading-relaxed mb-8 font-medium">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-[#e0e0e0]">
          <div className="w-10 h-10 rounded-full bg-[#d5fde2] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#0f5238]">person</span>
          </div>
          <div>
            <p className="font-bold text-[#002112]">{post.authorName}</p>
            {(post.startupName || post.readTime) && (
              <p className="text-sm text-[#707973]">
                {[post.startupName, post.readTime].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
        </div>

        {post.cover && (
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-[#e0e0e0]">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="space-y-10 text-[#404943] leading-relaxed">
          {post.challenge && (
            <div>
              <h2 className="text-2xl font-black text-[#002112] mb-4">The Biggest Challenge</h2>
              <p className="text-lg leading-relaxed">{post.challenge}</p>
            </div>
          )}
          {post.outcome && (
            <div>
              <h2 className="text-2xl font-black text-[#002112] mb-4">The Result</h2>
              <p className="text-lg leading-relaxed">{post.outcome}</p>
            </div>
          )}
          {!post.challenge && !post.outcome && (
            <p className="text-lg leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </article>

      <section className="bg-[#d5fde2] py-16 px-8 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#002112] mb-3">Have a story to share?</h2>
          <p className="text-[#404943] mb-6">Share your founder journey with Pakistan&apos;s startup community.</p>
          <Link href="/blog/submit" className="px-8 py-3 bg-[#0f5238] text-white rounded-lg font-bold hover:bg-[#2d6a4f] transition-all inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">edit</span>
            Submit Your Story
          </Link>
        </div>
      </section>
    </>
  );
}
