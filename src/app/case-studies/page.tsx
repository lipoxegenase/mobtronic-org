import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata = {
  title: "Case Studies | Mobtronic",
  description: "Detailed breakdowns of enterprise engineering, security audits, and systems migration projects.",
};

export default async function CaseStudiesIndex() {
  const contentDir = path.join(process.cwd(), "content", "case-studies");
  let caseStudies: Array<{
    slug: string;
    title: string;
    description: string;
    category: string;
    date: string;
  }> = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);
    caseStudies = files
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => {
        const fullPath = path.join(contentDir, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        return {
          slug: file.replace(/\.mdx?$/, ""),
          title: data.title || "Untitled Case Study",
          description: data.description || "",
          category: data.category || "General",
          date: data.date instanceof Date ? data.date.toISOString().split("T")[0] : (data.date || ""),
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-center md:text-left">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
            Proven Operations
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mt-2 mb-6 tracking-tight">
            Case Studies
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Technical audits, custom automations, and emergency response pipelines engineered for major corporations and high-performance financial teams.
          </p>
        </header>

        {caseStudies.length === 0 ? (
          <div className="border border-zinc-800 bg-zinc-900/50 rounded-2xl p-12 text-center text-zinc-500">
            No case studies found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block border border-zinc-800 bg-zinc-900/30 rounded-2xl p-6 md:p-8 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-zinc-800 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                      {study.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>
                <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-1.5 transition-transform duration-300">
                  Read Full Case Study &rarr;
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
