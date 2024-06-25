"use client";
import React, { useEffect, useState } from "react";
import type { Photo } from "@/app/albums/type";
import { getPhotos } from "@/app/albums/api/action";
import type { Error } from "@/utils/error";
import PhotoCard from "@/app/albums/components/photoCard";
import { Card } from "antd";

interface Props {
    params: Params;
}

interface Params {
    id: number;
}

const gridStyle: React.CSSProperties = {
    width: "25%",
    textAlign: "center",
};

const PhotosPage: React.FC<Props> = ({ params }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [error, setError] = useState<Error>({ message: "", status: null });

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const photos = await getPhotos(params.id);
                setPhotos(photos);
            } catch (err) {
                setError(err as Error);
            }
        };

        fetchPhotos();
    }, [params.id]);

    return (
        <Card>
            {error.status != null && <div>BAD PAGE</div>}

            {photos.map((photo) => (
                <Card.Grid style={gridStyle} key={photo.id}>
                    <PhotoCard key={photo.id} photo={photo} />
                </Card.Grid>
            ))}
        </Card>
    );
};

export default PhotosPage;
