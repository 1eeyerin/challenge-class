import axios from "axios";
import ProductAPI from "./products.api";
import BrandAPI from "./brands.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

class API {
  #BASE_URL = BASE_URL;
  #client;

  constructor() {
    this.#client = axios.create({ baseURL: this.#BASE_URL });
    this.products = new ProductAPI(this.#client);
    this.brands = new BrandAPI(this.#client);
  }
}

const api = new API();

export default api;
