"use client";
import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import type { Album } from "@/app/albums/type";
import { getAlbums } from "@/app/albums/api";
import { Error } from "@/utils/error";
import AlbumCard from "@/app/albums/components/albumCard";
import { useQuery } from '@tanstack/react-query'
import LoadingComponent from "@/components/loading";
import ErrorComponent from "@/components/error";

interface Props {}

const AlbumsPage: React.FC<Props> = () => {
    const title = "Albums"
    const [albums, setAlbums] = useState<Album[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const albumsQuery = useQuery({
        queryKey: ['albums'],
        queryFn: () => getAlbums(),
        staleTime: 10000,   // Keep data as fresh for 10sec
      })

    useEffect(() => {
        if (albumsQuery.isSuccess) {
            setAlbums(albumsQuery.data)
        }

        if (albumsQuery.isError) {
            albumsQuery.error.message = "unable to fetch users."
            setError(albumsQuery.error as unknown as Error)
        }
    }, [albumsQuery]);


    if (albumsQuery.isPending) return <LoadingComponent title={title} />
    
    if (albumsQuery.isError) return <ErrorComponent title={title} error={error} />

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
