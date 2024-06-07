import { gql, request } from "graphql-request";
import { BlogPost } from "../types";

const host = process.env.NEXT_PUBLIC_HASHNODE_HOST;
export const getPaginatedPosts = async (
  first: number = 9,
  after: string = ""
) => {
  type Response = {
    data: {
      publication: {
        posts: {
          edges: BlogPost[];
        };
      };
    };
  };

  console.log({
    host,
  });
  const query = gql`
    query Publication($host: String, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              publishedAt
              title
              brief
              views
              readTimeInMinutes
              slug
              coverImage {
                url
              }
            }
            cursor
          }
        }
      }
    }
  `;
  const data = await request<Response>(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    query,
    {
      host,
      first,
      after,
    }
  );

  return data.publication.posts.edges as BlogPost[];
};

export const getBlogCount = async () => {
  const query = gql`
    query Publication($host: String) {
      publication(host: $host) {
        posts(first: 0) {
          totalDocuments
        }
      }
    }
  `;

  const data = await request(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    query,
    {
      host,
    }
  );

  return data.publication.posts.totalCount;
};
