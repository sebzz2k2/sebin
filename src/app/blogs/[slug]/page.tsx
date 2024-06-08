import Post from "@/components/post";
import { getPostBySlug } from "@/lib/graphql/requests";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  return {
    title: data.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", params.slug],
    queryFn: () => getPostBySlug(params.slug),
  });

  return (
    <div className="h-[calc(100vh-6rem)] flex  flex-col gap-16 pr-0 overflow-auto p-20 no-scrollbar w-5/6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Post slug={params.slug} />
      </HydrationBoundary>
    </div>
  );
}
