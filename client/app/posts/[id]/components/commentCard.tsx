import React from "react";
import type { Comment } from "@/app/posts/action";
import { Button } from "antd";
import Link from "next/link";
import "@/app/posts/index.scss";

interface Props {
    comment: Comment;
}

const CommentCard: React.FC<Props> = ({ comment }) => {
    return (
        <div className="comment-card">
            <p>
                <b>{comment.name}</b> ({comment.email})
            </p>
            <p>{comment.body}</p>
            <Link
                className="comment-show-button"
                href={`/posts/${comment.postId}/comments/${comment.id}`}
            >
                <Button type="primary">Show Me</Button>
            </Link>
        </div>
    );
};

export default CommentCard;
