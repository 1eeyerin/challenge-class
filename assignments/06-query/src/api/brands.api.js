class BrandAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getBrands() {
    const response = await this.#client.get("/brands");
    return response.data.result;
  }
}

export default BrandAPI;
