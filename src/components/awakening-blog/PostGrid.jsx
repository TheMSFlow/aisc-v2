import ArticleCard from "./ArticleCard";

export default function PostGrid({ posts, emptyMessage }) {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-dashed border-dark-blue/15 bg-white/40 px-6 py-16 text-center">
        <p className="font-ptsans text-lg font-bold uppercase tracking-tight text-dark-blue/60">
          {emptyMessage ?? "Briefings for this world are in progress."}
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm font-light text-dark-blue/50">
          New briefings publish regularly. The full library is one level up.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
