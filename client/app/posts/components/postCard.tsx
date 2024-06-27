import React from "react";
import { Button, Card } from "antd";
import type { Post } from "@/app/posts/type";
import Link from "next/link";
import styles from "@/app/posts/styles/index.module.scss"

interface Props {
    post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
    return (
        <Card title={`${post.id}. ${post.title}`} className={styles.post_card}>
            <div>{post.body}</div>
            <Link className={styles.post_info_button} href={`/posts/${post.id}`}>
                <Button>More info ...</Button>
            </Link>
        </Card>
    );
};

export default PostCard;
