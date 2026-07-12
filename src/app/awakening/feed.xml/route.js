import { getAllPosts } from "@/lib/blog/posts";

export const dynamic = "force-static";

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/awakening/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Awakening</title>
    <link>${baseUrl}/awakening</link>
    <atom:link href="${baseUrl}/awakening/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Briefings, guides, and insights on AI leadership for Chiefs, Leaders of Leaders, and Emerging Leaders.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
