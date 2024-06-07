import PostPreview from "@/components/post-preview";
import { getPaginatedPosts } from "../lib/graphql/requests";
const getBlogs = async () => {
  const data = await getPaginatedPosts(3, "");
  return data;
};

const TopBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className="mb-8 font-firaCode text-2xl font-bold text-cyan-900">
        Top Blogs
      </h1>
      <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <PostPreview
            excerpt={blog.node.brief}
            slug={blog.node.slug}
            coverImage={blog.node.coverImage?.url}
            key={blog.node.id}
            title={blog.node.title}
            date={blog.node.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBlogs;
