import Link from "next/link";

export default function Post({ post }) {
  // const dispatch = useDispatch();

  return (
    <li className={"mt-4 border-white w-full flex justify-between gap-4"}>
      <Link
        className="p-2 cursor-pointer rounded-md border grow hover:bg-white/20"
        href={`/posts/${post.id}`}
      >
        {post.title}
      </Link>
      <button
        className="rounded-md border p-2 hover:bg-white/20"
        // onClick={(e) => {
        //   e.preventDefault();
        //   dispatch(removePost(post));
        // }}
      >
        Delete
      </button>
    </li>
  );
}
