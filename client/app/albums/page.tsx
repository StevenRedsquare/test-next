"use client";
import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import type { Album } from "@/app/albums/type";
import { getAlbums } from "@/app/albums/api";
import { Error } from "@/utils/error";
import AlbumCard from "@/app/albums/components/albumCard";

interface Props {}

const AlbumsPage: React.FC<Props> = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    const [error, setError] = useState<Error | null>(null)

    const fetchAlbums = async() => {
        try  {
            const response = await getAlbums()
            setAlbums(response)
        } catch(err: any) {
            err.message = "unable to fetch albums."
            setError(err)
        }
    }

    useEffect( ()=> {
        fetchAlbums()
    },[])

    return (
        <Flex wrap gap="small">
            {error?.status != null && <div>BADDD</div>}

            {albums.length > 0 ? (
                albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))
            ) : (
                <div>empty album</div>
            )}
        </Flex>
    );
};

export default AlbumsPage;
