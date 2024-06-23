import React from "react";
import { Space } from "antd";
import type { Photo } from "@/app/albums/action";
import { Image } from "antd";

interface Props {
    photo: Photo;
}

const PhotoCard: React.FC<Props> = ({ photo }) => {
    return (
        <Space direction="vertical" size={16} key={photo.id}>
            <p style={{ width: 200, height: 75 }}>
                {photo.id}. {photo.title}
            </p>
            <Image alt={photo.title} width={200} src={photo.url} />
        </Space>
    );
};

export default PhotoCard;
