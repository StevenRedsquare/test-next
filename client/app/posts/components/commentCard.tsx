import React from "react";
import type { Comment } from "@/app/posts/type";
import { Button } from "antd";
import Link from "next/link";
import styles from "@/app/posts/styles/index.module.css";

interface Props {
    comment: Comment;
}

const CommentCard: React.FC<Props> = ({ comment }) => {
    return (
        <div className={styles.comment_card}>
            <p>
                <b>{comment.name}</b> ({comment.email})
            </p>
            <p>{comment.body}</p>
            <Link
                className={styles.comment_show_button}
                href={`/posts/${comment.postId}/comments/${comment.id}`}
            >
                <Button type="primary">Show Me</Button>
            </Link>
        </div>
    );
};

export default CommentCard;
