import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { topic, content } = await request.json();

    if (!topic || !content) {
      return NextResponse.json({ error: 'Topic and content are required' }, { status: 400 });
    }

    // Convert topic to slug and truncate to prevent ENAMETOOLONG
    let slug = topic
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
      
    if (slug.length > 50) {
      slug = slug.substring(0, 50).replace(/-$/, '');
    }

    const date = new Date().toISOString().split('T')[0];

    // Check if the content already has frontmatter
    let fileContent = content;
    if (!content.trim().startsWith('---')) {
      // Create frontmatter if it doesn't exist
      const frontmatter = `---
title: ${JSON.stringify(topic)}
date: ${date}
description: ${JSON.stringify(`A deep dive into ${topic}.`)}
---

`;
      fileContent = frontmatter + content;
    }

    const contentDir = path.join(process.cwd(), 'content', 'blog');
    
    // Ensure directory exists
    try {
      await fs.access(contentDir);
    } catch {
      await fs.mkdir(contentDir, { recursive: true });
    }

    const filePath = path.join(contentDir, `${slug}.md`);

    // Write file
    await fs.writeFile(filePath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, slug, message: 'Published successfully' });
  } catch (error: any) {
    console.error('Failed to publish:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
