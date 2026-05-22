import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export async function getPublishedBlogPosts(now = new Date()): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => {
    if (data.draft === true || data.status === "draft" || data.status === "scheduled") {
      return false;
    }

    const publishDate = data.publishedAt ?? data.publishAt ?? data.pubDate;

    return publishDate <= now;
  });

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
