import React from "react";
import Link from "next/link";
import { Post, getPosts } from "./action";
import { Error } from "@/utils/error";

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
        <div>
            <div>Posts Page</div>
            {error.status != null && <div>THIS IS BAD</div>}
            {posts.map((post) => (
                <div key={post.id}>
                    <div>
                        {post.id} | {post.userId}
                    </div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                    <Link href={"/posts/" + post.id}>
                        <button>Show Post</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PostPage;
