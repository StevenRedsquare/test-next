import { axiosInstance } from "@/utils/axios";
import { error } from "@/utils/error";
import type { User } from "@/app/users/type"

const axios = axiosInstance();

export const getUsers = async (): Promise<User[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("/users")
            .then((res) => {
                if (!res.data) resolve([]);
                resolve(res.data);
            })
            .catch((err) => {
                error.message = err.response.statusText;
                error.status = err.response.status;
                reject(error);
            });
    });
};

export const getUser = async (id: number): Promise<User | null> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`/users/${id}`)
            .then((res) => {
                if (!res.data) resolve(null);
                resolve(res.data);
            })
            .catch((err) => {
                error.message = err.response.statusText;
                error.status = err.response.status;
                reject(error);
            });
    });
};