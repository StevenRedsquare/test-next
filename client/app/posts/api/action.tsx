import { axiosInstance } from "@/utils/axios";
import { error } from "@/utils/error";
import type { Post, Comment } from "@/app/posts/type"

const axios = axiosInstance();

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

export const getComment = async (
    commentId: number,
): Promise<Comment | null> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`/comments/${commentId}`)
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
