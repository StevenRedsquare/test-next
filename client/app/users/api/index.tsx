import { apiRequest } from "@/utils/axios";
import type { Profile, User } from "@/app/users/type";

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

export const getProfile = async (): Promise<Profile> => {
    const response = await apiRequest<Profile>(
        "GET",
        `/auth/profile`,
        "https://api.escuelajs.co/api/v1",
    );
    return response.data;
};
