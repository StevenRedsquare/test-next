import axios from "axios";
import { error } from "@/utils/error";

export interface Album {
    title: string;
    userId: number;
    id: number;
    thumbnail: string;
}

export const getAlbums = async (): Promise<Album[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("https://jsonplaceholder.typicode.com/albums")
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
