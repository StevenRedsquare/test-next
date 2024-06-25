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
