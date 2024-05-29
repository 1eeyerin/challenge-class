import { useContext } from "react";
import { AuthContext } from "../contexts/\bAuthContext";

const Display = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? "로그인 중" : "로그아웃 중"}</div>;
};

export default Display;
