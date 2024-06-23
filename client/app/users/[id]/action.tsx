import axios from "axios";
import type { User } from "@/app/users/action";
import { error } from "@/utils/error";

export const getUser = async (id: number): Promise<User | null> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
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
