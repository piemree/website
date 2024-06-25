import { Inter } from "next/font/google";
import React from "react";
import translation from "../translate";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className={`min-h-screen bg-[#0F172A]  ${inter.className}`}>
        <nav className="flex justify-between items-center h-16  border-b-2 border-white max-w-4xl  pr-4 fixed w-full z-10 bg-transparent backdrop-blur-md left-1/2  transform -translate-x-1/2 ">
          <Link
            href="/"
            className="text-white font-bold text-xl whitespace-nowrap flex items-center gap-1"
          >
            <img
              src="/terminal.svg"
              alt="page-icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>Emre Demir</span>
          </Link>
          <ul className="flex gap-4">
            <li className="text-white font-bold text-sm md:text-lg hover:underline">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="text-white font-bold text-sm md:text-lg hover:underline">
              <Link href="/#contact">{translation.t("contact")}</Link>
            </li>
            <li className="text-white font-bold text-sm md:text-lg hover:underline">
              <a href="https://github.com/piemree">Github</a>
            </li>
          </ul>
        </nav>
        <div className=" max-w-4xl mx-auto pt-24 pb-12 px-4">{children}</div>
        <footer className="text-white text-sm font-light text-center py-4 border-t-2 max-w-4xl mx-auto">
          <p className="">
            <a href="mailto:contact@emredemir.tech" className="hover:underline">
              contact@emredemir.tech
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
