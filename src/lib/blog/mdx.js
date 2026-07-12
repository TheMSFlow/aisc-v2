import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import Callout from "@/components/awakening-blog/Callout";

function MdxLink({ href = "", children, ...rest }) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

// ArticleCta is intentionally NOT exposed to MDX: the challenge CTA lives in
// BriefingsFooter on every blog page, so posts must not embed their own.
const components = {
  a: MdxLink,
  Callout,
};

/**
 * Render an MDX post body to server-side JSX.
 * Single seam for the MDX engine: if the engine ever changes, only this
 * file changes.
 */
export function renderPostBody(source) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
