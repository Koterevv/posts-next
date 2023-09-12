"use client";

import { fetchPostBySearch } from "@/services/getPosts";
import { useState } from "react";

export default function SearchForm({onSearch}) {
  const [search, setSearch] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const posts = await fetchPostBySearch(search)

    onSearch(posts)
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleForm}>
      <input
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md text-black mr-4"
        type="search"
        placeholder="Search"
        value={search}
      />
      <button type="submit" className="bg-pink-300 p-2 rounded-md">Search</button>
    </form>
  );
}
