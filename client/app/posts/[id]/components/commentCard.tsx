import React from "react";
import type { Comment } from "@/app/posts/action";

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
        </div>
    );
};

export default CommentCard;
