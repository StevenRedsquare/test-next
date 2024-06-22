import axios from "axios";
import { Post } from "../action";
import { error } from "@/utils/error";

export const getPost = async (id: number | null): Promise<Post> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                if (!res.data)
                    resolve({ title: "", userId: null, id: null, body: "" });
                resolve(res.data);
            })
            .catch((err) => {
                error.message = err.response.statusText;
                error.status = err.response.status;
                reject(error);
            });
    });
};
