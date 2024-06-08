import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  const handleItemCart = (productId) => () => {
    addItemToCart(productId, {
      onSuccess: () => {
        const yes = confirm("장바구니에 추가되었습니다. 장바구니로 갈까요?");
        if (yes) {
          navigate("/cart");
        }
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul style={{ textAlign: "left" }}>
      {products.map((product) => (
        <li key={product.id}>
          <h5>{product.name}</h5>
          <button onClick={handleItemCart(product.id)}>
            장바구니에 추가하기
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Home;
