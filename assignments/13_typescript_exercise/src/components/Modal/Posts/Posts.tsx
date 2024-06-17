import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const END_POINT = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get<Post[]>(END_POINT).then((res) => res.data),
  });

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
