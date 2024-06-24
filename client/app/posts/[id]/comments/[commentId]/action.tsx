import { axiosInstance } from "@/utils/axios";
import type { Comment } from "@/app/posts/action";
import { error } from "@/utils/error";

const axios = axiosInstance();

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
