import useLoginStore from "../zustand/loginStore";

const Display = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  // useSelector처럼 객체로 꺼내면 다른 곳까지 리렌더링 된다
  // 이거 값이 바뀐다고 해서 콘솔이 다시 찍히지는 않는다 === 리렌더링 되지는 않는다

  return <div>{isLoggedIn ? "로그인 중" : "로그아웃 중"}</div>;
};

export default Display;
