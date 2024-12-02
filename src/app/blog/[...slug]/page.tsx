import { posts } from "#site/content";

interface PageProps {
  slug: string[];
}

// Look for the post that matches the slug
async function getPostFromParams(params: PageProps) {
  const { slug } = await params;
  const finalSlug = slug.join("/");
  const post = posts.find((post) => {
    return post.slugAsParam === finalSlug;
  });
  return post;
}

// generate dynamic routes
export async function generateStaticParams() {
  const routes = posts.map((blogPost) => {
    return { slug: blogPost.slugAsParam.split("/") };
  });

  return routes;
}

export default async function PostPage(props: { params: PageProps }) {
  const post = await getPostFromParams(props.params);
  return <section>{post?.title}</section>;
}
