const PostDetailPageLoader = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  console.log("@@", data);
  return data;
};

export default PostDetailPageLoader;
