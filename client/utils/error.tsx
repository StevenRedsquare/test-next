export interface Error {
    message: string;
    status: number | null;
}

export let error: Error = { message: "", status: null };
