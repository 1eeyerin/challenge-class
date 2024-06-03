class ProductAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }
  async getProducts() {
    const response = await this.#client.get("/products");
    return response.data.result;
  }

  async getProduct(productId) {
    const response = await this.#client.get(`/products/${productId}`);
    return response.data.result;
  }

  deleteProduct() {}
}

export default ProductAPI;
