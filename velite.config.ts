import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  output: {
    base: "/static/",
    assets: "public/static",
    data: ".velite",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "blog/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.path(),
          description: s.string().max(999).optional(),
          date: s.isodate(),
          published: s.boolean().default(true),
          body: s.mdx(),
        })
        // more additional fields (computed fields)
        .transform((data) => ({
          ...data,
          slugAsParam: data.slug.split("/").slice(1).join("/"),
        })),
    },
  },
});
