import type { AxiosInstance } from "axios";
import { GetCartData } from "./cart.type";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCart() {
    const response = await this.axios.get<GetCartData>("/cart");
    return response.data.result;
  }

  async addItemToCart(productId: number) {
    const response = await this.axios.post(`/cart/products/${productId}`);
    return response.data.result;
  }

  async removeItemFromCart(productId: number) {
    const response = await this.axios.delete(`/cart/products/${productId}`);
    return response.data.result;
  }

  async clearItemInCart(productId: number) {
    const response = await this.axios.delete(
      `/cart/products/${productId}/clear`
    );
    return response.data.result;
  }
}

export default CartAPI;
