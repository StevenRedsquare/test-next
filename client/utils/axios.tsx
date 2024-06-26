import axios, { AxiosResponse, Method } from "axios";
import { defaultBaseURL } from "@/utils/api";
import type { Error } from "@/utils/error";

// Axios Public
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export async function apiRequest<T>(
    method: Method,
    url: string,
    baseURL: string = defaultBaseURL,
) {
    try {
        const response: AxiosResponse<T> = await axiosInstance({
            method,
            baseURL,
            url,
        });

        return response;
    } catch (err: any) {
        let error: Error = { status: null, code: "", message: "" };
        error.status = err.response.status;
        error.code = err.code;
        throw error;
    }
}
