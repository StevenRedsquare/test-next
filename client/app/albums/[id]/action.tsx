import { axiosInstance } from "@/utils/axios";
import type { Photo } from "@/app/albums/action";
import { error } from "@/utils/error";

const axios = axiosInstance();

export const getPhotos = async (albumId: number | null): Promise<Photo[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(
                `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
            )
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
