import React from "react";

export async function generateMetadata({ params: { id } }) {
    const post = await getData(id);

    return {
        title: post.title,
    }
}

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function PostDetail({ params: { id } }) {
  const post = await getData(id);

  return (
    <>
      <h1>Post with id: {id}</h1>
      <div>
        <h2 className="text-2xl">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}
