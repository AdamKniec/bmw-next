export const siteConfig = {
  name: "Blog name",
  url: "example.com",
  description: "Sample description",
  author: "Adam Knieć",
  links: {
    github: "",
  },
  routes: {
    blog: "/blog",
    root: "/",
  },
};

export type siteConfig = typeof siteConfig;
