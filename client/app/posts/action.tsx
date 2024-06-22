import axios from "axios";
import { error } from "@/utils/error";

export interface Post {
    id: number | null;
    userId: number | null;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<Post[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
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
