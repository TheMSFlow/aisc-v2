import PostGrid from "./PostGrid";

export default function RelatedPosts({ posts }) {
  if (!posts.length) return null;

  return (
    <div>
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/40">
        Keep reading
      </p>
      <PostGrid posts={posts} />
    </div>
  );
}
