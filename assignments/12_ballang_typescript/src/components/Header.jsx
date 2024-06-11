import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        [<Link to="/">Home</Link>] [<Link to="/cart">Cart</Link>] [
        <Link to="/log-in">LogIn</Link>] [<Link to="/sign-up">SignUp</Link>]
      </header>
      <hr />
    </>
  );
};

export default Header;
