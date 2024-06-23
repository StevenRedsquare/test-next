import React from "react";
import { Button, Card } from "antd";
import type { Post } from "@/app/posts/action";
import Link from "next/link";
import "@/app/posts/index.scss";

interface Props {
    post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
    return (
        <Card title={`${post.id}. ${post.title}`} className="post-card">
            <div>{post.body}</div>
            <Link className="post-info-button" href={`/posts/${post.id}`}>
                <Button>More info ...</Button>
            </Link>
        </Card>
    );
};

export default PostCard;
