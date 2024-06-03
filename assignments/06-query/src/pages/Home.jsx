import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    //쿼리키는 배열로 만든다 - 쿼리키 첫번째는 모델명을 넣는다 - 쿼리키 두번째는 데이터를 설명하는 정보를 object로 넣는다
    queryKey: ["products"], // 저장할 공간
    queryFn: () => api.products.getProducts(), // 실행할 함수, queryFn은 프로미스를 반환해야하기에 익명함수로 감싼다
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <ol>
        {products.map((product) => (
          <li key={product.id} className="px-4 py-2 border-b">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Home;
