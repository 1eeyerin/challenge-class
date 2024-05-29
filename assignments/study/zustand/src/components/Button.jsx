import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/loginStore";

const Button = () => {
  const { login, logout, isLoggedIn } = useLoginStore(
    useShallow((state) => ({
      login: state.login,
      logOut: state.logout,
    }))
  );
  // useShallowEqualSelector처럼 useShallow를 쓰면 된다
  // useSelector 같은건데 함수까지 다 한꺼번에 뽑아올 수 있다
  // 불필요한 리렌더링을 막기 위해서

  // 얘는 근데 context api 같네 ?
  // 근데 전역적으로 context나 provider 같은 과정 없어도 되고
  // useState를 훅으로 만든 느낌
  // 근데 거기다가 리덕스 리듀서에 함수를 쓴것 같은 느낌으로 했다

  // 기본적으로 async 함수를 지원한다

  // const { login, logout, isLoggedIn } = useLoginStore((state) => ({
  //   login: state.login,
  //   logOut: state.logout,
  // }));
  //객체가 새로 만들어지기 때문에 이렇게 하면 리렌더링이 되어서 isLoggedIn 함수를 다시 만든다

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };
  return (
    <button onClick={handleClick}>{isLoggedIn ? "로그아웃" : "로그인"}</button>
  );
};

export default Button;
