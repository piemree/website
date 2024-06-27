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
import { useState } from "react";
import clsx from "clsx";
import Layout from "@/components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getPostList, PostData } from "@/lib/post";
import { findTopics } from "@/lib/mongoose";

export default function Page({ postList }: any) {
  const [sending, setSending] = useState(false);
  const [mailName, setMailName] = useState("");
  const [mailEmail, setMailEmail] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [mailInfo, setMailInfo] = useState("");

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const body = {
        name: mailName,
        email: mailEmail,
        message: mailMessage,
      };
      await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMailName("");
      setMailEmail("");
      setMailMessage("");
      setMailInfo("Mail gönderildi");
    } catch (error) {
      console.error(error);
      setMailInfo("Mail gönderilirken bir hata oluştu");
    } finally {
      setSending(false);
      setTimeout(() => {
        setMailInfo("");
      }, 5000);
    }
  };

  return (
    <Layout
      title="Emre Demir | Full Stack Developer"
      description="Bursa, Türkiye'de yaşayan bir Full Stack Develper'ım. İnsanlara ve işletmelere yardımcı olan yazılımlar geliştirmekten keyif alıyorum. Benimle iletişime geçmek için aşağıdaki formu kullanabilirsin."
    >
      <section className="flex flex-col md:flex-row items-center justify-between  ">
        <div className="order-2 md:order-1 text-white text-lg font-light leading-8 flex-1">
          <h1 className="text-white text-3xl font-bold  mt-8">
            Merhaba ben Emre
          </h1>
          <p className="mt-4 text-white text-lg font-light leading-8">
            Bursa, Türkiye'de yaşayan bir Full Stack Develper'ım. İnsanlara ve
            işletmelere yardımcı olan yazılımlar geliştirmekten keyif alıyorum.
            Benimle iletişime geçmek için aşağıdaki{" "}
            <Link href="#contact" className="text-blue-400 hover:underline">
              formu
            </Link>{" "}
            kullanabilirsin.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center flex-1 mt-8">
          <img
            src="/avatar.svg"
            alt="user-picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </section>

      {/* some blogs */}
      <section className="py-8">
        <h2 className="text-white text-2xl font-bold max-w-4xl mx-auto  mt-8">
          Blog Yazıları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {postList.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#1A202C] p-4 rounded-lg hover:bg-[#2D3748]"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              {/* <p className="text-sm mt-2">
                {post.siteDescription
                  .split(" ")
                  .slice(0, 30)
                  .join(" ")
                  .concat("...")}
              </p> */}
            </Link>
          ))}
        </div>
        {/* read all */}
        <Link
          href="/blog"
          className="block text-white text-center mt-4 hover:underline"
        >
          Tümünü Gör
        </Link>
      </section>

      <section className=" text-white py-8">
        <h2 className="text-white text-2xl font-bold max-w-4xl mx-auto  mt-8">
          Kullandığım Teknolojiler
        </h2>
        <h3 className="text-white text-lg font-bold max-w-4xl mx-auto mt-4">
          Frontend
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
          Backend
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
          Versiyon Kontrol
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
      <section id="contact" className="py-8">
        <h2 className="text-white text-2xl font-bold max-w-4xl mx-auto  mt-8">
          İletişim
        </h2>
        <form
          onSubmit={onFormSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-4"
        >
          <div className=" rounded-lg col-span-2 md:col-span-1">
            <label htmlFor="name" className="text-white text-lg font-bold">
              Adınız
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
              Email
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
              Mesajınız
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
              Gönder
            </button>
            {mailInfo && (
              <span className="text-white text-sm block">{mailInfo}</span>
            )}
          </div>
        </form>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const topics = await findTopics();

  return {
    props: {
      postList: topics.slice(0, 6) || [],
    },
  };
};
