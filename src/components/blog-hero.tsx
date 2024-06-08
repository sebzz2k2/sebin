import { DEFAULT_IMAGE } from "@/lib/constants";
import { BlogPost } from "@/lib/types";
import Link from "next/link";
import { CoverImage } from "./cover-image";
import { DateFormatter } from "./date-formatter";

const BlogHero = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="relative w-3/5 shadow-md transition duration-300 hover:translate-y-[-2px] hover:shadow-lg">
      <CoverImage
        title={blog.node.title}
        src={blog.node.coverImage?.url || DEFAULT_IMAGE}
        slug={blog.node.slug}
      />
      <Link
        href={`/blogs/${blog.node.slug}`}
        className="bottom-0 rounded-md box-border w-full absolute bg-gradient-to-t from-gray-500 via-zinc-50 to-transparent overflow-hidden"
      >
        <div className="p-8 pt-4 border-b border-neutral-800 border-x">
          <div className="font-firaCode text-xl font-bold text-cyan-900">
            {blog.node.title}
          </div>
          <p className="text-md font-firaCode text-cyan-900 py-4">
            {blog.node.brief}
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-md font-semibold font-firaCode text-cyan-900">
              <DateFormatter dateString={blog.node.publishedAt} />
            </p>
            <span className="text-md font-firaCode text-cyan-900">
              &middot;
            </span>
            <p className="text-sm font-semibold font-firaCode text-cyan-900">
              {blog.node.views} views
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogHero;
