# The Awakening — SEO Guide
> Read `agent-guides/blog/BLOG_BRIEF.md` first.
> SEO is the blog's distribution channel. Every article is written to be found by a specific leader typing a specific question, then to deserve the click it wins.

---

## What the System Already Does

The infrastructure handles technical SEO automatically. Never hand-build any of this inside an article:

| Handled automatically | Where |
|-----------------------|-------|
| Canonical URLs, OpenGraph, Twitter cards | `generateMetadata` in the route files |
| Article, Breadcrumb, Blog, and CollectionPage JSON-LD | `src/lib/blog/jsonld.js` |
| OG images (branded card per article) | `src/app/awakening/[slug]/opengraph-image.js` |
| Sitemap with lastmod | `src/app/sitemap.js` |
| RSS feed | `/awakening/feed.xml` |
| Static generation of every article and category page | `generateStaticParams` |

**Never write `<script>` tags, meta tags, or schema markup in MDX.** Your levers are frontmatter and the writing itself.

## Search Intent Per Type

Before writing, name the search the piece is for. One primary query family per article.

| Type | Intent it serves | Example query families |
|------|------------------|------------------------|
| `insight` | "Help me see this clearly" | "AI governance for boards", "is AI a threat or opportunity for leaders", "employees using AI without approval" |
| `guide` | "How do I do this?" | "how should a CEO get started with AI", "AI policy for churches" |
| `value` | "How do I make money with this?" | "how leaders make money with AI", "AI revenue opportunities for small business", "monetize AI ministry nonprofit" |

An article that serves no plausible search should not be written unless it exists for internal linking or brand reasons, and then that decision is deliberate.

## Titles

- 60 characters or fewer for the SERP; the frontmatter limit is 70, the SERP truncates around 60.
- Front-load the searched concept: the words the reader typed appear early.
- Must still pass the three Headline Rules from `COPY_GUIDE.md`. SEO never buys an exemption from voice: no clickbait, no listicle formats ("7 ways to...") unless the piece genuinely is a numbered guide.
- `seo.title` override: use only when the on-page headline and the search-optimal title genuinely diverge, for example an evocative on-page title that needs a literal SERP title. Default is no override.

## Descriptions

The frontmatter `description` is the SERP snippet, the article standfirst, and the card copy: one string, three jobs. Write it as copy that earns a click from the target reader, 70–160 characters, containing the primary concept naturally. Never keyword-stuff it.

## Internal Linking (minimums, per article)

| Link to | Minimum | Note |
|---------|---------|------|
| Sibling articles or category pages | 2 | In-body, on natural anchor text, never "click here" |
| `/personalize` or `/` | 0 | The blog footer CTA covers this on every page; add an in-prose link only where it reads naturally |

Category pages rank because articles link into them and belong to them. Choosing `industries` and `audiences` in frontmatter is an SEO decision: every ID you select adds the piece to that landing page and strengthens it. Select honestly; a piece tagged into a world it barely addresses weakens both the piece and the page.

## Keywords Without Corpse-Speak

- Use the reader's vocabulary, not the industry's: "putting AI to work in your church" outranks and outreads "ecclesiastical AI implementation."
- Cover the concept, not the keyword density: a piece that genuinely answers the question uses the related vocabulary naturally.
- H2s are scannable answers: a reader (and a search engine) should reconstruct the piece's argument from headings alone.
- Remember the jargon ban: the searcher types "ChatGPT" and "AI tools" but the copy stays in plain leadership language. Meet the query in the title and description; keep the body in brand voice.

## Freshness

- Set `updated` on any substantive revision; it feeds `dateModified` in JSON-LD and lastmod in the sitemap.
- Evergreen over newsy: pieces anchored to a moment ("this month's model release") decay in weeks. Pieces anchored to a leadership reality compound for years.
- When a dated piece ages badly, revise and update it rather than publishing a near-duplicate. One strong URL beats three competing ones.

## Never

- Never duplicate a title or description across articles.
- Never publish two articles targeting the same primary query; strengthen the existing one. This is enforced through `TOPIC_LEDGER.md`: every article's primary query is recorded there, and new topics are checked against it at brief time.
- Never use `seo.canonical` except for genuinely republished content.
- Never trade voice for volume. Thin content hurts the domain the whole program depends on.
