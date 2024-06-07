import TopBlogs from "@/components/top-blogs";
import React from "react";
import BlogHero from "../../components/blog-hero";
const Blogs = async () => {
  return (
    <div className="h-[calc(100vh-6rem)]  flex  flex-col gap-16 overflow-auto p-20 no-scrollbar w-5/6">
      <BlogHero />
      <TopBlogs />
    </div>
  );
};

export default Blogs;
