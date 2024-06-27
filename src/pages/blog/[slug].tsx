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
import { findTopics } from "@/lib/mongoose";

export const getStaticPaths = (async () => {
  const topics = await findTopics();


  const paths = topics.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug as string | undefined;
  const topics = await findTopics({ slug });
  const postData = topics[0];
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


export default function Page({ postData }: any) {
  const highlightCode = () => {
    const nodes = document.querySelectorAll("pre code");
    nodes.forEach((node: any) => hljs.highlightBlock(node));
  };

  useEffect(() => {
    highlightCode();
  }, []);

  return (
    <Layout title={postData?.title} description={postData?.siteDescription}>
      <article className="markdown-body">
        <Markdown remarkPlugins={[remarkGfm]}>{postData.markdown}</Markdown>
      </article>
    </Layout>
  );
}
