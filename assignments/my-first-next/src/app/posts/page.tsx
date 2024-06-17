import Link from "next/link";

// 여기서 다시 ssr로 바뀐다
const PostsPage = () => {
  return (
    <div>
      <Link href="/posts/1">Posts</Link>
    </div>
  );
};

export default PostsPage;
