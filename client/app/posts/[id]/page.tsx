import React from "react";
import { Post } from "../action";
import { getPost } from "./action";
import { Error } from "@/utils/error";

interface Props {
    params: Params;
}

interface Params {
    id: number | null;
}

const SelectedPostPage: React.FC<Props> = async ({ params }) => {
    let post: Post = { title: "", userId: null, id: null, body: "" };
    let error: Error = { message: "", status: null };

    try {
        post = await getPost(params.id);
    } catch (err) {
        error = err as Error;
    }

    return (
        <div>
            <div>A Post Page</div>
            {post.id != null ? (
                <>
                    <div>
                        id: {post.id} | userid: {post.userId}
                    </div>
                    <div>title: {post.title}</div>
                    <div>content: {post.body}</div>
                </>
            ) : (
                <>
                    <div>Error Status: {error.status}</div>
                    <div>Message: {error.message}</div>
                </>
            )}
        </div>
    );
};

export default SelectedPostPage;
