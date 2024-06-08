import About from "@/components/about";
import TopBlogs from "@/components/top-blogs";
import React from "react";
import BlogHero from "../../components/blog-hero";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getBlogCount, getPaginatedPosts } from "../../lib/graphql/requests";
import { BlogPost } from "@/lib/types";
const getBlogs = async () => {
  const data = await getPaginatedPosts(1, "");
  return data;
};

const Blogs = async () => {
  const blog = await getBlogs();
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = "" }) => getPaginatedPosts(3, pageParam),
    getNextPageParam: (lastPage: any) =>
      lastPage.length < 3 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });
  return (
    <div className="h-[calc(100vh-6rem)] flex  flex-col gap-16 pr-0 overflow-auto p-20 no-scrollbar w-5/6">
      <div className="flex gap-12 items-center">
        <BlogHero blog={blog[0]} />
        <About />
      </div>
      <HydrationBoundary state={dehydrate(new QueryClient())}>
        <TopBlogs initialCursor={blog[0].cursor} />
      </HydrationBoundary>
    </div>
  );
};

export default Blogs;
