import fs from "fs";
import path from "path";

export type PostData = {
  slug: string;
  title: string;
  description: string;
  timestamp: number;
  markdown?: string;
};

export const postsDirectory = path.join(process.cwd(), "posts");

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `posts.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const allPosts = JSON.parse(fileContents);

  const postData = allPosts.find((post: any) => post.slug === slug);

  const markdownFile = path.join(postsDirectory, `${slug}.md`);
  const stringifyMarkdown = fs.readFileSync(markdownFile, "utf8");

  return {
    slug,
    title: postData.title,
    description: postData.description,
    timestamp: postData.timestamp,
    markdown: stringifyMarkdown,
  };
}

export async function getPostList() {
  const fullPath = path.join(postsDirectory, `posts.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const allPosts = JSON.parse(fileContents);
  // sort posts by date in descending order
  allPosts.sort((a: any, b: any) => {
    if (a.timestamp < b.timestamp) return 1;
    return -1;
  });
  return allPosts;
}
