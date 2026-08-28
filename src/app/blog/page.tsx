import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata = {
  title: 'Blog | Mobtronic',
  description: 'Insights and articles on Healthcare IT, Cloud Optimization, and AI Automation.',
};

export default async function BlogIndex() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  let posts: Array<{ slug: string, title: string, date: string, description: string }> = [];

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
          date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : (data.date || ''),
          description: data.description || '',
        };
      })
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts found. Create your first post in the Next.js Admin Dashboard!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="border border-border rounded-xl p-6 h-full transition-colors hover:border-primary hover:bg-muted/20">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-3">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
