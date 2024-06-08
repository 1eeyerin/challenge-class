class ProductsAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async getProducts() {
    const response = await this.#axios.get("/products");
    return response.data.result;
  }

  async getProduct(productId) {
    const response = await this.#axios.get(`/products/${productId}`);
    return response.data.result;
  }
}

export default ProductsAPI;
