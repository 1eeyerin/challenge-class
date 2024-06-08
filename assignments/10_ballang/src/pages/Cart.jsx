import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

const Cart = () => {
  const queryClient = useQueryClient();

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCartItems(),
  });

  const { mutateAsync: removeItemFromCart } = useMutation({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  const handleRemoveItemFromCart = async (productId) => {
    await removeItemFromCart(productId, {
      onSuccess: () => {
        const yes = confirm("장바구니에서 삭제되었습니다. 장바구니로 갈까요?");
        if (yes) {
          alert("장바구니에서 삭제되었습니다.");

          //queryKey: ["cart", {isSorted: true}]로 되어있다면 정확히 cart만 초기화 하고 싶을때 exact true 함,
          queryClient.invalidateQueries({ queryKey: ["cart"], exact: true }); // 기존데이터를 무효화 해서 새로운 데이터를 가져오게 자동으로
        }
      },
    });
  };

  return (
    <div>
      <ul>
        {cart &&
          cart.items &&
          cart.items.map((item) => (
            <li key={item.id}>
              {item.product.name}
              <span>{item.quantity}개</span>
              <button
                onClick={() => handleRemoveItemFromCart(item.productId.id)}
              >
                삭제
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
