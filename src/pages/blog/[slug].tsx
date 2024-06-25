import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import { getPostData, postsDirectory } from "@/lib/post";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect } from "react";

export const getStaticPaths = (async () => {
  const fullPath = path.join(postsDirectory, `posts.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const allPosts = JSON.parse(fileContents);

  const paths = allPosts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug as string | undefined;
  const postData = await getPostData(slug as string);
  if (!postData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      postData,
    },
  };
}) satisfies GetStaticProps;

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ postData }: PageProps) {
  const highlightCode = () => {
    const nodes = document.querySelectorAll("pre code");
    nodes.forEach((node: any) => hljs.highlightBlock(node));
  };

  useEffect(() => {
    highlightCode();
  }, []);

  return (
    <Layout title={postData?.title} description={postData?.description}>
      <article className="markdown-body">
        <Markdown remarkPlugins={[remarkGfm]}>{postData.markdown}</Markdown>
      </article>
    </Layout>
  );
}
