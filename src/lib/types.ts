type IExperience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
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
    coverImage: null | {
      url: string;
    };
  };
  cursor: string;
};
export type { IExperience, BlogPost };
