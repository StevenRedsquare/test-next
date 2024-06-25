import { apiRequest } from "@/utils/axios";
import type { Album, Photo } from "@/app/albums/type";

export const getAlbums = async (): Promise<Album[]> => {
    const response = await apiRequest<Album[]>("GET", `/albums`);

    const result: Promise<Album[]> = Promise.all(
        response.data.map(async (album): Promise<Album> => {
            const photos: Photo[] = await getPhotos(album.id);
            let thumbnail: string = "";

            if (photos.length > 0) {
                thumbnail = photos[0].thumbnailUrl;
            }

            return {
                title: album.title,
                userId: album.userId,
                id: album.id,
                thumbnail: thumbnail,
            };
        }),
    );

    return result;
};

export const getPhotos = async (albumId: number): Promise<Photo[]> => {
    const response = await apiRequest<Photo[]>(
        "GET",
        `photos?albumId=${albumId}`,
    );
    return response.data;
};
