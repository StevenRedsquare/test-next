import React from "react";
import type { Post } from "@/app/posts/action";
import { getPosts } from "@/app/posts/action";
import type { Error } from "@/utils/error";
import PostCard from "@/app/posts/components/postCard";
import "@/app/posts/index.scss";

interface Props {}

const PostPage: React.FC<Props> = async () => {
    let posts: readonly Post[] = [];
    let error: Error = { message: "", status: null };

    try {
        posts = await getPosts();
    } catch (err) {
        error = err as Error;
    }

    return (
        <div className="post-page">
            {error.status != null && <div>THIS IS BAD</div>}

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostPage;
