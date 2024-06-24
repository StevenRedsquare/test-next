import { axiosInstance } from "@/utils/axios";
import { error } from "@/utils/error";
import { getPhotos } from "@/app/albums/[id]/action";

const axios = axiosInstance();

export interface Album {
    title: string;
    userId: number;
    id: number;
    thumbnail: string;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const getAlbums = async (): Promise<Album[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then(async (res) => {
                if (!res.data) resolve([]);

                const result = await Promise.all(
                    res.data.map(async (data: Album) => {
                        const photos: Photo[] = await getPhotos(data.id);
                        let thumbnail: string = "";

                        if (photos.length > 0) {
                            thumbnail = photos[0].thumbnailUrl;
                        }

                        return {
                            id: data.id,
                            userId: data.userId,
                            title: data.title,
                            thumbnail: thumbnail,
                        };
                    }),
                );

                resolve(result);
            })
            .catch((err) => {
                error.message = err.response.statusText;
                error.status = err.response.status;
                reject(error);
            });
    });
};
