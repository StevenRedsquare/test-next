"use client";
import React, { useEffect, useState } from "react";
import type { Post, Comment } from "@/app/posts/type";
import { getPost, getComments } from "@/app/posts/api";
import { Error } from "@/utils/error";
import CommentCard from "@/app/posts/components/commentCard";
import "@/app/posts/styles/index.scss";

interface Props {
    params: Params;
}

interface Params {
    id: number;
}

const SelectedPostPage: React.FC<Props> = ({ params }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const fetchPost = async (id: number) => {
        try {
            const response = await getPost(id);
            const commentResponse = await getComments(id);
            setPost(response);
            setComments(commentResponse);
        } catch (err: any) {
            err.message = "unable to fetch post.";
            setError(err);
        }
    };

    useEffect(() => {
        fetchPost(params.id);
    }, [params.id]);

    return (
        <div>
            {error?.status != null && <div>BAD PAGE</div>}

            {post && (
                <>
                    <div>
                        <div>
                            <h1>{post.title}</h1>
                        </div>
                        <p className="post-content">{post.body}</p>
                    </div>

                    <div className="post-comments-section">
                        <h2>Comments ({comments.length})</h2>
                        {comments.map((comment) => (
                            <div key={comment.id}>
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
                                />
                                <hr />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SelectedPostPage;
