import { posts } from "#site/content";
import Link from "next/link";

export default async function BlogPage() {
  const postsData = posts;

  return (
    <section>
      {postsData.map((post) => {
        return (
          <Link href={post.slug} key={post.slug}>
            <span>{post.title}</span>
          </Link>
        );
      })}
    </section>
  );
}
