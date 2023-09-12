import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { getAllPosts } from "@/services/getPosts";

const fetchPosts = async () => {
  const response = await getAllPosts();
  return response;
}

export default async function PostsList() {
  // const posts = useSelector((state) => state.posts.posts);
  const posts = await fetchPosts();

  return (
    <ul>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
