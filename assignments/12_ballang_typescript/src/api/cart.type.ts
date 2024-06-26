export type GetCartData = {
  error: null;
  success: boolean;
  result: { id: number; items: CartItem[] };
};

export type CartItem = {
  cartId: number;
  createdAt: string;
  id: number;
  product: unknown;
  productId: number;
  quantity: number;
  updatedAt: string;
};
