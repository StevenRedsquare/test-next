import { apiRequest } from "@/utils/axios";
import type { User } from "@/app/users/type";

export const getUsers = async (): Promise<User[]> => {
    const response = await apiRequest<User[]>("GET", `/users`);
    return response.data;
};

export const getUser = async (id: number): Promise<User> => {
    const response = await apiRequest<User>("GET", `/users/${id}`);
    return response.data;
};

export const deleteUser = async (id: number) => {
    const response = await apiRequest("DELETE", `/users/${id}`);
    return response;
};
