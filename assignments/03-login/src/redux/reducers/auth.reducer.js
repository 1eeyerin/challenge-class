export const AUTH_LOGIN = "auth/LOGIN";
export const AUTH_LOGOUT = "auth/LOGOUT";

const initValues = {
  isLoggedIn: false,
};
const authReducer = (prevState = initValues, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...prevState, isLoggedIn: true };
    case AUTH_LOGOUT:
      return { ...prevState, isLoggedIn: false };
    default:
      return prevState;
  }
};

export default authReducer;
