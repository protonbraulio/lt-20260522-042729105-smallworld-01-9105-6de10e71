import { siteConfig } from "~/settings";
import rss from "@astrojs/rss";
import { getPublishedBlogPosts } from "~/lib/blog";

export async function GET(context) {
  const posts = await getPublishedBlogPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.updatedDate ?? post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
