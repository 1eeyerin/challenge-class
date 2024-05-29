import { useContext } from "react";
import { AuthContext } from "../contexts/\bAuthContext";

const Button = () => {
  const { login, logout } = useContext(AuthContext);

  return (
    <>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default Button;
