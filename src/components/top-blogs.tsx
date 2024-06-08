"use client";
import PostPreview from "@/components/post-preview";
import { getPaginatedPosts } from "../lib/graphql/requests";
import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import Button from "./common/button";
import { BlogPost } from "@/lib/types";
const TopBlogs = ({ initialCursor }: { initialCursor: string }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = initialCursor }) => getPaginatedPosts(3, pageParam),
    getNextPageParam: (lastPage: any) =>
      lastPage.length < 3 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });
  return (
    <div className="w-full">
      <h1 className="mb-8 font-firaCode text-2xl font-bold text-cyan-900">
        All Blogs
      </h1>
      <div className="grid gap-12 items-start justify-between w-full md:grid-cols-2 xl:grid-cols-3">
        {data?.pages.map((group: any) =>
          group?.map((blog: BlogPost) => (
            <PostPreview
              excerpt={blog.node.brief}
              slug={blog.node.slug}
              coverImage={blog.node.coverImage?.url}
              key={blog.node.id}
              title={blog.node.title}
              date={blog.node.publishedAt}
            />
          ))
        )}
      </div>
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
        className="mt-8 w-full"
      >
        {isFetching
          ? "Loading..."
          : hasNextPage
          ? "Load More"
          : "There are no more blogs to load"}
      </Button>
    </div>
  );
};

export default TopBlogs;
