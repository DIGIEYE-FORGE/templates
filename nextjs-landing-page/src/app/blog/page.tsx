"use client";

import { DotIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Section,
  SectionContent,
  SectionSubtitle,
  SectionTitle,
} from "../components/section";
import { format } from "date-fns";
import Link from "next/link";
import { blogPosts, subtitle, title } from "./data";
import { BlogTag } from "./_components/blog-tag";

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const titleVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function BlogPage() {
  return (
    <main>
      <Section>
        <SectionTitle className="text-3xl sm:text-4xl lg:text-5xl">
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.span>
        </SectionTitle>
        <SectionSubtitle>
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.span>
        </SectionSubtitle>
        <SectionContent>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="grid overflow-hidden rounded-2xl shadow-2xl shadow-gray-500/20 md:grid-cols-2 md:[&>*]:min-h-96"
          >
            <div className="relative h-full min-h-72 w-full">
              <Image
                src={blogPosts[0].imageUrl}
                alt={blogPosts[0].title}
                fill
                className="aspect-video min-h-full w-full object-cover"
              />
              <BlogTag>{blogPosts[0].tag}</BlogTag>
            </div>
            <div className="flex flex-col justify-center gap-y-4 p-[clamp(1.5rem,3vw,3rem)] lg:gap-y-6">
              <h3 className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
                {blogPosts[0].title}
              </h3>
              <h4 className="xl:text:xl flex-flex-wrap gap- variantss-center flex lg:text-lg">
                <span className="text-gray-500">
                  {format(blogPosts[0].date, "MMM dd, yyyy")}
                </span>
                <DotIcon />
                <span>by {blogPosts[0].author}</span>
              </h4>
              <p className="line-clamp-4 font-light md:text-lg xl:text-xl">
                {blogPosts[0].excerpt}
              </p>
            </div>
          </motion.div>
        </SectionContent>
      </Section>
      <Section seperator={false}>
        <SectionTitle>
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            More Articles
          </motion.span>
        </SectionTitle>
        <SectionContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] gap-x-6 gap-y-10"
          >
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                  className="group flex flex-col gap-4"
                >
                  <div className="group-active:scale-1 relative aspect-[1.4] transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-105 group-active:rotate-1 group-active:scale-100">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="rounded-2xl object-cover"
                    />
                    <BlogTag>{post.tag}</BlogTag>
                  </div>
                  <h3 className="font-medium md:text-lg xl:text-xl">
                    {post.title}
                  </h3>
                  <h4 className="variantss-center flex gap-3 xl:text-lg">
                    <span className="text-gray-500">
                      {format(post.date, "MMM dd, yyyy")}
                    </span>
                    <DotIcon />
                    <span>by {post.author}</span>
                  </h4>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </SectionContent>
      </Section>
    </main>
  );
}
