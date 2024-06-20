import React from "react";
import axios from "axios";

interface Post {
    title: string;
    userId: number;
    id: number;
    body: string;
}

const PostPage = async () => {
    let posts: Post[] = [];

    const getPosts = async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
        );
        posts = res?.data;
    };

    await getPosts();

    return (
        <div>
            post page
            {posts.map((post) => (
                <>
                    <div key={post.id}>
                        <div>{post.userId}</div>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default PostPage;
