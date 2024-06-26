import axios, { AxiosInstance, AxiosResponse, Method } from "axios";
import { fakeJsonUrl } from "@/utils/api";
import type { Error } from "@/utils/error";

const axiosInstance = (isPrivate: boolean): AxiosInstance => {
    if (isPrivate) return axiosPrivate;
    return axiosPublic;
};

// Axios Public
const axiosPublic = axios.create({
    baseURL: fakeJsonUrl,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

axiosPublic.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosPublic.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        return Promise.reject(err);
    },
);

// Axios Private
const axiosPrivate = axios.create({
    baseURL: fakeJsonUrl,
    headers: {
        "Content-Type": "application/json",
        Authorization: "access-token",
    },
    timeout: 10000,
});

axiosPrivate.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosPrivate.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export async function apiRequest<T>(
    method: Method,
    url: string,
    isPrivate: boolean = false,
) {
    let axios = axiosInstance(isPrivate);
    try {
        const response: AxiosResponse<T> = await axios({
            method,
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
