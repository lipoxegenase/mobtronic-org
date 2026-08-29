import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import '../blog.css';
import Head from 'next/head';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return { title: 'Post Not Found | Mobtronic' };
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  return {
    title: `${data.title || 'Blog Post'} | Mobtronic`,
    description: data.description || '',
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Post Not Found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data.title,
          "datePublished": data.date,
          "description": data.description,
          "author": {
            "@type": "Person",
            "name": "Kavoosh Mohajeri"
          },
          "url": `https://mobtronic.org/blog/${slug}`
        }) }} />
      </Head>
      <article className="container mx-auto px-4 py-16 mt-20 max-w-3xl min-h-screen">
        <div className="mb-10">
          <Link href="/blog" className="text-primary hover:underline mb-6 inline-block text-sm">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground leading-tight">{data.title}</h1>
          {data.date && (
            <p className="text-muted-foreground text-sm">
              {data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date}
            </p>
          )}
          {data.description && (
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">{data.description}</p>
          )}
        </div>
        <div className="blog-content">
          <MDXRemote source={content} />
        </div>

        {/* Case Studies CTA */}
        <div className="mt-16 pt-12 border-t border-zinc-200">
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-zinc-950 mb-3">
              See How We Execute This in the Real World
            </h3>
            <p className="text-zinc-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Dive into our technical breakdowns to see how we implement robust, highly secure, and optimized infrastructure solutions for enterprise organizations.
            </p>
            <Link
              href="/case-studies"
              className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm"
            >
              Explore Our Case Studies
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
