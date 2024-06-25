import React from "react";
import { Card, Space } from "antd";
import type { Album } from "@/app/albums/type";
import Link from "next/link";
import Image from "next/image";

interface Props {
    album: Album;
}

const AlbumCard: React.FC<Props> = ({ album }) => {
    return (
        <Space direction="vertical" size={16} key={album.id}>
            <Link href={`/albums/${album.id}`}>
                <Card
                    hoverable
                    style={{ width: 240, height: 400 }}
                    cover={
                        <Image
                            width={240}
                            height={250}
                            alt={album.title}
                            src={album.thumbnail}
                        />
                    }
                >
                    <p>
                        {album.id}. {album.title}
                    </p>
                </Card>
            </Link>
        </Space>
    );
};

export default AlbumCard;
