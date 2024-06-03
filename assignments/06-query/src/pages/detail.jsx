import { useParams } from "react-router-dom";
import api from "../api/api";
import { useQuery } from "@tanstack/react-query";

const Detail = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
    refetchOnWindowFocus: true, // 윈도우 포커스시 자동 refetch
    refetchInterval: 1000 * 60 * 60 * 24, // refetch 시간 1일
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <div>{product.name}</div>;
};

export default Detail;
