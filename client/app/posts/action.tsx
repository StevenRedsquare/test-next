import { axiosInstance } from "@/utils/axios";
import { error } from "@/utils/error";

const axios = axiosInstance();

export interface Post {
    id: number | null;
    userId: number | null;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const getPosts = async (): Promise<Post[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("/posts")
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
