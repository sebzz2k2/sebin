import Link from "next/link";
import { DEFAULT_IMAGE } from "../lib/constants";
import { CoverImage } from "./cover-image";
import { DateFormatter } from "./date-formatter";

type Props = {
  title: string;
  coverImage: string | null | undefined;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  const postURL = `/${slug}`;

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="col-span-1">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage || DEFAULT_IMAGE}
        />
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <h1 className="text-lg font-semibold leading-tight text-cyan-900 font-firaCode">
          <Link
            href={postURL}
            className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
          >
            {title}
          </Link>
        </h1>
        <Link href={postURL}>
          <p className="text-md leading-snug font-firaCode text-cyan-800">
            {excerpt.length > 140 ? excerpt.substring(0, 140) + "…" : excerpt}
          </p>
        </Link>
        <div className="text-sm font-semibold fontfiraCode text-cyan-900">
          <Link href={postURL}>
            <DateFormatter dateString={date} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
