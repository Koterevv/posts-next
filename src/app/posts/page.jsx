"use client";

import Post from "@/components/Post";
import PostsList from "@/components/PostsList";
import SearchForm from "@/components/SearchForm";
import { fetchPosts } from "@/store/slices/posts.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const metadata = {
  title: "Next App | Posts",
  description: "Generated by create next app",
};

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

export default function Posts() {
  // const data = await getData();
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState("");
  // useEffect(async() => {
  //   fetchPost()
  //     .then(setPosts)
  // }, [])
  // const dispatch = useDispatch();
  // const { status, error } = useSelector((state) => state.posts);

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  return (
    <section>
      <SearchForm />
      <h1 className={"text-3xl mb-7"}>Posts</h1>
{/* 
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>} */}

      <PostsList />
    </section>
  );
}
