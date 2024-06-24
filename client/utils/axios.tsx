import axios, { AxiosInstance } from "axios";
import { fakeJsonUrl } from "@/utils/api";

export const axiosInstance = (isPrivate: boolean = false): AxiosInstance => {
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
        console.log("this is public");
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
    (error) => {
        return Promise.reject(error);
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
        console.log("this is private");
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
