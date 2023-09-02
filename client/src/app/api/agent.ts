import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(response => {
    return response;
}, (error: AxiosError) => {
    console.log(error.response ? error.response : error.message);
    const { data , status } = error.response as AxiosResponse;
    console.log(status)
    switch (status) {
        case 400:
            console.log(data);
            if (data.errors) {
                const modalStateErrors : string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key]);
                    }
                }
                throw modalStateErrors.flat();
            } else {
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 500:
            router.navigate('/server-error', {state: {error: data}});
            break;
        default:
            break;
    }
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
    get404Error: () => requests.get("Buggy/not-found"),
    get400Error: () => requests.get("Buggy/bad-request"),
    get500Error: () => requests.get("Buggy/server-error"),
    get401Error: () => requests.get("Buggy/unauthorised"),
    getValidationError: () => requests.get("Buggy/validation-error")
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;