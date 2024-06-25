import Layout from "@/components/Layout";
import { getPostList } from "@/lib/post";
import { GetStaticProps } from "next";
import Link from "next/link";
import moment from "moment";

export const getStaticProps = (async (context) => {
  const postList = await getPostList();
  return {
    props: {
      postList,
    },
  };
}) satisfies GetStaticProps;

type PageProps = {
  postList: {
    slug: string;
    title: string;
    description: string;
    timestamp: number;
  }[];
};

export default function Page({ postList }: PageProps) {
  return (
    <Layout
      title="Emre Demir | Blog"
      description="Kişisel blog yazılarıma buradan ulaşabilirsiniz."
    >
      <ul className="text-lg font-light mt-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {postList.map((post) => (
          <li
            key={post.slug}
            className="border-b-2 border-gray-300 border-opacity-10 last:border-b-0 "
          >
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline py-4  w-full block"
            >
              {post.title}
              <p className="text-sm font-light text-gray-400 mt-4">
                {moment.unix(post.timestamp).format("DD/MM/YYYY")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
