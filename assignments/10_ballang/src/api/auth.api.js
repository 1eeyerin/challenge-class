class AuthAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async signUp() {
    const path = "/auth/sign-up";
    const data = {
      email: "blabla@blabla.com",
      password: "somePassword",
    };
    const response = await this.#axios.post(path, data);
    return response.data.result;
  }

  async logIn() {
    const path = "/auth/log-in";
    const data = {
      email: "blabla@blabla.com",
      password: "somePassword",
    };
    const response = await this.#axios.post(path, data);
    return response.data.result;
  }

  async logOut() {
    const path = "/auth/log-out";
    const response = await this.#axios.delete(path);
    return response.data.result;
  }

  async refreshToken() {
    const path = "/auth/refresh-token";
    const response = await this.#axios.get(path);
    return response.data.result;
  }
}

export default AuthAPI;
