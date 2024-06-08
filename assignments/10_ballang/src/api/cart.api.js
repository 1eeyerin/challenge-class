class CartAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async getCart() {
    const response = await this.#axios.get("/cart");
    return response.data.result;
  }

  async addItemToCart(productId) {
    const response = await this.#axios.post(`/cart/products/${productId}`);
    return response.data.result;
  }

  async removeItemFromCart(productId) {
    const response = await this.#axios.delete(`/cart/products/${productId}`);
    return response.data.result;
  }

  async clearItemInCart(productId) {
    const response = await this.#axios.delete(
      `/cart/products/${productId}/clear`
    );
    return response.data.result;
  }
}

export default CartAPI;
