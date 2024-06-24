import React from "react";
import type { Comment } from "@/app/posts/action";
import { getComment } from "@/app/posts/[id]/comments/[commentId]/action";
import { Error } from "@/utils/error";

interface Props {
    params: Params;
}

interface Params {
    id: number;
    commentId: number;
}

const CommentPage: React.FC<Props> = async ({ params }) => {
    let comment: Comment | null = null;
    let error: Error = { message: "", status: null };

    try {
        comment = await getComment(params.commentId);
    } catch (err) {
        error = err as Error;
    }

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
