type IExperience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

type CoverImage = {
  url: string;
};

export type GetPostBySlugResponse = {
  publication: {
    post: {
      title: string;
      subtitle?: string;
      coverImage: CoverImage | null;
      content: {
        html: string;
      };
      author: {
        name: string;
        profilePicture?: string;
      };
    };
  };
};

type BlogPost = {
  node: {
    id: string;
    title: string;
    brief: string;
    publishedAt: string;
    slug: string;
    views: number;
    readTimeInMinutes: number;
    coverImage: CoverImage | null;
  };
  cursor: string;
};
export type { IExperience, BlogPost };
