import type { Photo } from "@/app/albums/action";
import axios from "axios";
import { error } from "@/utils/error";

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
