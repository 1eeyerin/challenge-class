import { Link, useLoaderData } from "react-router-dom";

const PostsListPage = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts List Page</h1>
      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default PostsListPage;
