export interface Error {
    message: string;
    status: number | null;
    code: string;
}

export let error: Error = { message: "", status: null, code: "" };
