import { axiosInstance } from "@/utils/axios";
import { error } from "@/utils/error";
import type { Album, Photo } from "@/app/albums/type"

const axios = axiosInstance();

export const getAlbums = async (): Promise<Album[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("/albums")
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

export const getPhotos = async (albumId: number | null): Promise<Photo[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get(`/photos?albumId=${albumId}`)
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
