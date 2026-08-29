import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { GatedWrapper } from "@/components/GatedWrapper";
import "../../blog/blog.css";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content", "case-studies");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const contentDir = path.join(process.cwd(), "content", "case-studies");
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { title: "Case Study Not Found | Mobtronic" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title || "Case Study"} | Mobtronic`,
    description: data.description || "",
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const contentDir = path.join(process.cwd(), "content", "case-studies");
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="bg-zinc-950 min-h-screen text-white pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <Link href="/case-studies" className="text-blue-400 hover:underline">
          &larr; Back to Case Studies
        </Link>
      </div>
    );
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Split content by the gated divider
  const parts = content.split("<!-- gated -->");
  const publicContent = parts[0] || "";
  const gatedContent = parts[1] || "";

  return (
    <div className="bg-white min-h-screen text-zinc-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link
            href="/case-studies"
            className="text-blue-600 hover:text-blue-500 transition-colors text-sm font-semibold flex items-center gap-1 mb-8"
          >
            &larr; Back to Case Studies
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1.5 rounded-md uppercase tracking-wider border border-blue-100">
              {data.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight leading-tight text-zinc-950">
            {data.title}
          </h1>
          {data.description && (
            <p className="text-zinc-650 text-lg leading-relaxed font-light">
              {data.description}
            </p>
          )}
        </div>

        {/* Public Content */}
        <div className="blog-content">
          <MDXRemote source={publicContent} />
        </div>

        {/* Gated Content */}
        {gatedContent && (
          <GatedWrapper caseStudyTitle={data.title || ""}>
            <div className="blog-content mt-6">
              <MDXRemote source={gatedContent} />
            </div>

            {/* Conversation Invitation Call to Action */}
            <div className="border border-zinc-200 bg-zinc-50 p-8 rounded-2xl mt-12 text-center shadow-sm">
              <h3 className="text-xl font-bold text-zinc-950 mb-3">
                Have a Similar Challenge in Your Systems?
              </h3>
              <p className="text-zinc-650 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Let's discuss how we can build robust, highly secure, and optimized infrastructure solutions for your organization.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm"
              >
                Let's Schedule a Conversation
              </Link>
            </div>
          </GatedWrapper>
        )}
      </article>
    </div>
  );
}
