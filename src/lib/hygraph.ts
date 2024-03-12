import {
  AllFeatures,
  AllPosts,
  Author,
  SinglePost,
  TotalPosts,
} from "./queries";

const API_URL = process.env.HYGRAPH_ENDPOINT;
const ID_AUTHOR = process.env.HYGRAPH_AUTHOR_ID;

const getAllPosts = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AllPosts,
    }),
    next: { tags: ["all-posts"] },
  });

  const json = await response.json();

  return json.data.all_posts;
};

const getTotalPosts = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: TotalPosts,
    }),
    next: { tags: ["total-posts"] },
  });

  const json = await response.json();

  return json.data.all_postsConnection.aggregate.count;
};

const getSinglePost = async (slug: string) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: SinglePost,
      variables: { slug: slug },
    }),
    next: { tags: ["single-post"] },
  });

  const json = await response.json();

  return json.data.post;
};

const getAuthor = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: Author,
      variables: { id: ID_AUTHOR },
    }),
    next: { tags: ["author"] },
  });

  const json = await response.json();

  return json.data.author;
};

const getAllFeatures = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AllFeatures,
    }),
    next: { tags: ["all-features"] },
  });

  const json = await response.json();

  return json.data.all_features;
};

export { getAllPosts, getSinglePost, getAuthor, getAllFeatures, getTotalPosts };
