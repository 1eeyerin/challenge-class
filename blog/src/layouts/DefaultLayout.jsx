import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/posts">Posts</Link>
      <br />
      <Link to="/posts/123">Posts 123 상세페이지</Link>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
