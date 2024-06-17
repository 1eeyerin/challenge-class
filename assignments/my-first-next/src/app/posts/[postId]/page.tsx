import Link from "next/link";

// 여기서 다시 ssr로 바뀐다
const Page = ({ params }: { params: { postId: string } }) => {
  return <div>{params.postId}</div>;
};

export default Page;
