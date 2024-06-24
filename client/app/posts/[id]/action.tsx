import { axiosInstance } from "@/utils/axios";
import type { Post, Comment } from "@/app/posts/action";
import { error } from "@/utils/error";

const axios = axiosInstance();

export const getPost = async (id: number | null): Promise<Post | null> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`/posts/${id}`)
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

export const getComments = async (
    postId: number | null,
): Promise<Comment[]> => {
    return new Promise(async (resolve, reject) => {
        if (postId == null) {
            error.message = "invalid post id.";
            error.status = 400;
            reject(error);
        }

        await axios
            .get(`/posts/${postId}/comments`)
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
