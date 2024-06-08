import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { mutateAsync: signIn } = useMutation({
    mutationFn: (data) => api.auth.logIn(data),
  });

  const handleClick = async () => {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const data = { email, password };
      await signIn(data);

      alert("로그인 완료");
      navigate("/");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <div>
      <input type="email" placeholder="아이디를 입력해주세요" ref={emailRef} />
      <input
        type="password"
        placeholder="패스워드를 입력해주세요"
        ref={passwordRef}
      />
      <button onClick={handleClick}>로그인</button>
    </div>
  );
};

export default LogIn;
