"use client";
import React, { useEffect, useState } from "react";
import type { Post } from "@/app/posts/type";
import { getPosts } from "@/app/posts/api";
import type { Error } from "@/utils/error";
import PostCard from "@/app/posts/components/postCard";
import "@/app/posts/styles/index.scss";
import { setEnvironmentData } from "worker_threads";

interface Props {}

const PostPage: React.FC<Props> = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const fetchPosts = async () => {
        try {
            const response = await getPosts();
            setPosts(response);
        } catch (err: any) {
            err.message = "unable to fetch posts.";
            setError(err);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="post-page">
            {error?.status != null && (
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
