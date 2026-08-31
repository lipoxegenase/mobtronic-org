import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata = {
  title: 'Blog | Mobtronic',
  description: 'Practical articles on domain migrations, healthcare IT, cloud consolidation, and the infrastructure projects that are hard to tackle in-house.',
};

export default async function BlogIndex() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  let posts: Array<{ slug: string; title: string; date: string; description: string }> = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);
    posts = files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => {
        const fullPath = path.join(contentDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return {
          slug: file.replace(/\.mdx?$/, ''),
          title: data.title || 'Untitled',
          date: data.date instanceof Date
            ? data.date.toISOString().split('T')[0]
            : (data.date || ''),
          description: data.description || '',
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-900 text-white pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            From the Field
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Things Worth Writing Down
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Practical notes on domain migrations, healthcare IT, cloud consolidation,
            and the infrastructure projects that tend to sit on the backlog longer than they should.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                  <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {post.date
                      ? new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : ''}
                  </p>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 text-base leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-block mt-4 text-blue-600 text-sm font-semibold group-hover:underline">
                    Read more
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Back to site */}
        <div className="mt-16 pt-8 border-t border-zinc-200 text-center">
          <Link
            href="/"
            className="inline-block text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors"
          >
            &larr; Back to Mobtronic
          </Link>
        </div>
      </div>
    </div>
  );
}
