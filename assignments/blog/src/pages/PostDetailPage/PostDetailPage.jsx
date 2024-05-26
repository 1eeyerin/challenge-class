import { useLoaderData } from "react-router-dom";

const PostDetailPage = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
