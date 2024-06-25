import React from "react";
import { Flex } from "antd";
import type { Album } from "@/app/albums/type";
import { getAlbums } from "@/app/albums/api/action";
import { Error } from "@/utils/error";
import AlbumCard from "@/app/albums/components/albumCard";

interface Props {}

const AlbumsPage: React.FC<Props> = async () => {
    let albums: Album[] = [];
    let error: Error = { message: "", status: null, code: "" };

    try {
        albums = await getAlbums();
    } catch (err: any) {
        err.message = "unable to fetch album.";
        error = err as Error;
    }

    return (
        <Flex wrap gap="small">
            {error.status != null && <div>BADDD</div>}

            {albums.length > 0 ? (
                albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))
            ) : (
                <div>empty user</div>
            )}
        </Flex>
    );
};

export default AlbumsPage;
