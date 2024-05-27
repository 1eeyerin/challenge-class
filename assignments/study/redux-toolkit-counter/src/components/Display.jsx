import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector(({ counter }) => (counter ? counter.count : 0));

  return <div>{count}</div>;
};

export default Display;
