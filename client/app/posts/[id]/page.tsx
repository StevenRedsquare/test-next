import React from "react";
import type { Post, Comment } from "@/app/posts/action";
import { getPost, getComments } from "@/app/posts/[id]/action";
import { Error } from "@/utils/error";
import CommentCard from "@/app/posts/[id]/components/commentCard";
import "@/app/posts/index.scss";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

interface Props {
    params: Params;
}

interface Params {
    id: number | null;
}

const SelectedPostPage: React.FC<Props> = async ({ params }) => {
    let post: Post | null = null;
    let comments: Comment[] = [];
    let error: Error = { message: "", status: null };

    try {
        post = await getPost(params.id);
        comments = await getComments(params.id);
    } catch (err) {
        error = err as Error;
    }

    return (
        <div>
            {error.status != null && <div>BAD PAGE</div>}

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
