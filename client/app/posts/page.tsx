import React from "react";
import type { Post } from "@/app/posts/type";
import { getPosts } from "@/app/posts/api/action";
import type { Error } from "@/utils/error";
import PostCard from "@/app/posts/components/postCard";
import "@/app/posts/styles/index.scss";

interface Props {}

const PostPage: React.FC<Props> = async () => {
    let posts: readonly Post[] = [];
    let error: Error = { message: "", status: null, code: "" };

    try {
        posts = await getPosts();
    } catch (err: any) {
        err.message = "unable fetch posts.";
        error = err as Error;
    }

    return (
        <div className="post-page">
            {error.status != null && (
                <div>
                    <p>BAD</p>
                    <p>{error.status}</p>
                    <p>{error.message}</p>
                </div>
            )}

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostPage;
