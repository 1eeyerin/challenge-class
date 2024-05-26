import { useSelector } from "react-redux";

const Display = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      현재 로그인이 {isLoggedIn ? "로그인" : "로그아웃"} 상태입니다.
    </div>
  );
};

export default Display;
