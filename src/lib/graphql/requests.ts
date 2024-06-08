import { gql, request } from "graphql-request";
import { BlogPost, GetPostBySlugResponse } from "../types";

const host = process.env.NEXT_PUBLIC_HASHNODE_HOST as string;
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
  const data = await request<any>(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT as string,
    query,
    {
      host,
      first,
      after,
    }
  );

  return data.publication.posts.edges;
};

export async function getPostBySlug(slug: string) {
  const query = gql`
    query getPostBySlug($host: String, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          subtitle
          coverImage {
            url
          }
          content {
            html
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT as string,
    query,
    {
      host,
      slug,
    }
  );

  return response.publication.post;
}
