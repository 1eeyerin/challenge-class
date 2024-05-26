import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../redux/reducers/auth.reducer";

const AuthButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    const action = { type: isLoggedIn ? AUTH_LOGOUT : AUTH_LOGIN };
    dispatch(action);
  };

  return (
    <button type="button" onClick={handleClickButton}>
      {isLoggedIn ? "로그아웃" : "로그인"}
    </button>
  );
};

export default AuthButton;
