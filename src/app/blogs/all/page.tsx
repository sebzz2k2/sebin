import { DateFormatter } from "@/components/date-formatter";
import Link from "next/link";
import { RxClock, RxCalendar, RxEyeOpen } from "react-icons/rx";
import { getBlogCount, getPaginatedPosts } from "../../../lib/graphql/requests";
const getAllBlogs = async () => {
  const blogCount: number = await getBlogCount();
  const data = await getPaginatedPosts(blogCount, "");

  return data;
};

const AllPosts = async () => {
  const blogs = await getAllBlogs();

  return (
    <div className="h-[calc(100vh-6rem)]  flex  flex-col gap-8 overflow-auto p-20 no-scrollbar w-5/6">
      <h3 className="font-firaCode text-xl text-cyan-900 font-bold">
        All Posts
      </h3>
      <div className="flex flex-col">
        {blogs.map((blog) => (
          <div key={blog.node.id} className="border-2">
            <Link
              href={`/blog/${blog.node.slug}`}
              className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
            >
              {blog.node.title}
            </Link>
            <div className="flex">
              <div className="flex gap-2 items-center">
                <RxEyeOpen />
                <div>{blog.node.views}</div>
              </div>
              <div className="flex gap-2 items-center">
                <RxClock />
                <div>{blog.node.readTimeInMinutes}</div>
              </div>
              <div className="flex gap-2 items-center">
                <RxCalendar />
                <div>
                  <DateFormatter dateString={blog.node.publishedAt} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
