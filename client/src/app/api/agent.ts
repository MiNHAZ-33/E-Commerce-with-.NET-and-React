import axios, { AxiosError, AxiosResponse } from "axios";
import exp from "constants";

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(response => {
    return response;
}, (error: AxiosError) => {
    console.log("Caught by intercepter");
    return Promise.reject(error.response);
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
    list: () => requests.get("product"),
    details: (id: number) => requests.get(`product/${id}`),
}

const TestErrors = {
    get404Error: () => requests.get("BaseApi/not-found"),
    get400Error: () => requests.get("BaseApi/bad-request"),
    get500Error: () => requests.get("BaseApi/server-error"),
    get401Error: () => requests.get("BaseApi/unauthorized"),
    getValidationError: () => requests.post("BaseApi/validation-error", {})
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;