"use client";
import React, { useEffect, useState } from "react";
import type { Comment } from "@/app/posts/type";
import { getComment } from "@/app/posts/api";
import { Error } from "@/utils/error";

interface Props {
    params: Params;
}

interface Params {
    id: number;
    commentId: number;
}

const CommentPage: React.FC<Props> = ({ params }) => {
    const [comment, setComment] = useState<Comment | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const fetchComment = async (commentId: number) => {
        try {
            const response = await getComment(commentId);
            setComment(response);
        } catch (err: any) {
            err.message = "unable to fetch comment.";
            setError(err);
        }
    };

    useEffect(() => {
        fetchComment(params.commentId);
    }, [params.commentId]);

    return (
        <div className="comment-card">
            {comment && (
                <>
                    <div>
                        <b>Id</b>: {comment.id}
                    </div>
                    <div>
                        <b>Name</b>: {comment.name}
                    </div>
                    <div>
                        <b>Email</b>: {comment.email}
                    </div>
                    <p>{comment.body}</p>
                </>
            )}
        </div>
    );
};

export default CommentPage;
