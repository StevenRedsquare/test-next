export interface Post {
    id: number | null;
    userId: number | null;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
