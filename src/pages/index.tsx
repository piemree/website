import Image from "next/image";
import { Inter } from "next/font/google";
import {
  FaGitAlt,
  FaGithub,
  FaReact,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiVuejsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiMongodb,
  SiPrisma,
  SiNginx,
  SiExpress,
  SiNestjs,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";
import translation from "../translate";
import Head from "next/head";
import { useState } from "react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  locale: string;
};

export default function Home({ locale }: HomeProps) {
  const [sending, setSending] = useState(false);
  const [mailName, setMailName] = useState("");
  const [mailEmail, setMailEmail] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [mailInfo, setMailInfo] = useState("");

  translation.changeLanguage(locale);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const body = {
        name: mailName,
        email: mailEmail,
        message: mailMessage,
      };
      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMailName("");
      setMailEmail("");
      setMailMessage("");
      setMailInfo(translation.t("form.success"));
    } catch (error) {
      console.error(error);
      setMailInfo(translation.t("form.error"));
    } finally {
      setSending(false);
      setTimeout(() => {
        setMailInfo("");
      }, 5000);
    }
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/terminal.svg" />
        <title>{translation.t("page.title")}</title>
        <meta name="description" content={translation.t("page.desc")} />
        <meta name="keywords" content={translation.t("page.keywords")} />
      </Head>
      <main className={`min-h-screen bg-[#0F172A]  ${inter.className}`}>
        <nav className="flex justify-between items-center h-16  border-b-2 border-white max-w-4xl  pr-4 fixed w-full z-10 bg-transparent backdrop-blur-md left-1/2  transform -translate-x-1/2 ">
          <a
            href="/"
            className="text-white font-bold text-xl whitespace-nowrap flex items-center gap-1"
          >
            <Image
              src="/terminal.svg"
              alt="page-icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>Emre Demir</span>
          </a>
          <ul className="flex gap-4">
            <li className="text-white font-bold text-sm md:text-lg hover:underline">
              <a href="#contact">{translation.t("contact")}</a>
            </li>
            <li className="text-white font-bold text-sm md:text-lg hover:underline">
              <a href="https://github.com/piemree">Github</a>
            </li>
          </ul>
        </nav>

        <section className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-4 pt-14">
          <div className="order-2 md:order-1 text-white text-lg font-light leading-8 flex-1">
            <h1 className="text-white text-3xl font-bold  mt-8">
              {translation.t("title")}
            </h1>
            <p className="mt-4 text-white text-lg font-light leading-8">
              {translation.t("desc")}
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center flex-1 mt-8">
            <Image
              src="/avatar.svg"
              alt="user-picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </section>

        <section className=" text-white max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-white text-2xl font-bold max-w-4xl mx-auto  mt-8">
            {translation.t("skills")}
          </h2>
          <h3 className="text-white text-lg font-bold max-w-4xl mx-auto mt-4">
            {translation.t("frontend")}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://reactjs.org/"
                className="flex flex-col items-center hover:text-blue-400"
              >
                <FaReact className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">React</h3>
              </a>
            </li>

            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://nextjs.org/"
                className="flex flex-col items-center hover:text-gray-400"
              >
                <RiNextjsFill className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Next.js</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://tailwindcss.com/"
                className="flex flex-col items-center hover:text-blue-400"
              >
                <RiTailwindCssFill className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Tailwind</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://vuejs.org/"
                className="flex flex-col items-center hover:text-green-400"
              >
                <RiVuejsFill className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Vue.js</h3>
              </a>
            </li>
          </ul>

          <h3 className="text-white text-lg font-bold max-w-4xl mx-auto mt-8">
            {translation.t("backend")}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://nodejs.org/"
                className="flex flex-col items-center hover:text-green-400"
              >
                <FaNodeJs className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Node.js</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://expressjs.com/"
                className="flex flex-col items-center hover:text-gray-400"
              >
                <SiExpress className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Express.js</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://nestjs.com/"
                className="flex flex-col items-center hover:text-red-600"
              >
                <SiNestjs className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Nest.js</h3>
              </a>
            </li>

            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://redis.io/"
                className="flex flex-col items-center hover:text-red-600"
              >
                <SiRedis className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Redis</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://www.rabbitmq.com/"
                className="flex flex-col items-center hover:text-orange-500"
              >
                <SiRabbitmq className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">RabbitMQ</h3>
              </a>
            </li>

            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://www.prisma.io/"
                className="flex flex-col items-center hover:text-gray-400"
              >
                <SiPrisma className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Prisma</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://www.mongodb.com/"
                className="flex flex-col items-center hover:text-green-400"
              >
                <SiMongodb className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">MongoDB</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://www.postgresql.org/"
                className="flex flex-col items-center hover:text-blue-400"
              >
                <BiLogoPostgresql className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">PostgreSQL</h3>
              </a>
            </li>
          </ul>
          <h3 className="text-white text-lg font-bold max-w-4xl mx-auto mt-8">
            DevOps
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://www.docker.com/"
                className="flex flex-col items-center hover:text-blue-400"
              >
                <FaDocker className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Docker</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://www.nginx.com/"
                className="flex flex-col items-center hover:text-green-400"
              >
                <SiNginx className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Nginx</h3>
              </a>
            </li>
          </ul>
          <h3 className="text-white text-lg font-bold max-w-4xl mx-auto mt-8">
            {translation.t("versionControl")}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://github.com"
                className="flex flex-col items-center hover:text-gray-400"
              >
                <FaGithub className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Github</h3>
              </a>
            </li>
            <li className="bg-[#1A202C] p-4 rounded-lg ">
              <a
                target="_blank"
                href="https://git-scm.com/"
                className="flex flex-col items-center hover:text-red-600"
              >
                <FaGitAlt className="text-4xl" />
                <h3 className="text-lg font-bold mt-2">Git</h3>
              </a>
            </li>
          </ul>
        </section>
        <section id="contact" className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-white text-2xl font-bold max-w-4xl mx-auto  mt-8">
            {translation.t("contact")}
          </h2>
          <form
            onSubmit={onFormSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-4"
          >
            <div className=" rounded-lg col-span-2 md:col-span-1">
              <label htmlFor="name" className="text-white text-lg font-bold">
                {translation.t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={mailName}
                onChange={(e) => setMailName(e.target.value)}
                className="w-full bg-[#0F172A]  text-white p-2 mt-2 rounded-lg border border-white"
              />
            </div>
            <div className="rounded-lg col-span-2 md:col-span-1">
              <label htmlFor="email" className="text-white text-lg font-bold">
                {translation.t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={mailEmail}
                onChange={(e) => setMailEmail(e.target.value)}
                className="w-full bg-[#0F172A] text-white p-2 mt-2 rounded-lg border border-white"
              />
            </div>
            <div className="col-span-2  rounded-lg">
              <label htmlFor="message" className="text-white text-lg font-bold">
                {translation.t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={mailMessage}
                onChange={(e) => setMailMessage(e.target.value)}
                className="w-full block bg-[#0F172A] text-white p-2 mt-2 rounded-lg border border-white"
              ></textarea>
            </div>
            <div className="col-span-2 flex gap-2">
              <button
                type="submit"
                className={clsx(
                  "bg-[#1A202C] text-white text-lg font-bold px-6 py-2 rounded-lg",
                  {
                    "opacity-50 cursor-not-allowed": sending,
                  }
                )}
              >
                {translation.t("send")}
              </button>
              {mailInfo && (
                <span className="text-white text-sm block">{mailInfo}</span>
              )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      locale: ctx.locale,
    },
  };
}
