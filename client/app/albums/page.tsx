import React from "react";
import Link from "next/link";
import { Album, getAlbums } from "./action";
import { Error } from "@/utils/error";

interface Props {}

const AlbumsPage: React.FC<Props> = async () => {
    let albums: Album[] = [];
    let error: Error = { message: "", status: null };

    try {
        albums = await getAlbums();
    } catch (err) {
        error = err as Error;
    }

    return (
        <div>
            albums page
            {error.status != null && <div>BADDD</div>}
            {albums.map((album) => (
                <div key={album.id}>
                    <div>
                        {album.id} | {album.userId}
                    </div>
                    <div>{album.title}</div>
                    <Link href={"/albums/" + album.id}>
                        <button>Show album</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AlbumsPage;
