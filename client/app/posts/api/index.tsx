import { apiRequest } from "@/utils/axios";
import type { Post, Comment } from "@/app/posts/type";

export const getPosts = async (): Promise<Post[]> => {
    const response = await apiRequest<Post[]>("GET", `/posts`);
    return response.data;
};

export const getPost = async (id: number): Promise<Post> => {
    const response = await apiRequest<Post>("GET", `/posts/${id}`);
    return response.data;
};

export const getComments = async (postId: number): Promise<Comment[]> => {
    const response = await apiRequest<Comment[]>(
        "GET",
        `/comments?postId=${postId}`,
    );
    return response.data;
};

export const getComment = async (id: number): Promise<Comment> => {
    const response = await apiRequest<Comment>("GET", `/comments/${id}`);
    return response.data;
};
