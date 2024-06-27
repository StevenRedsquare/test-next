import { apiRequest } from "@/utils/axios";
import { NextResponse } from "next/server";
import Cookies from "universal-cookie";

interface Login {
    access_token: string;
}

export const login = async (
    username: string,
    password: string,
    remember: boolean,
) => {
    try {
        const response = await apiRequest<Login>(
            "POST",
            `/auth/login`,
            "https://api.escuelajs.co/api/v1",
            {
                email: username,
                password,
                remember,
            },
        );

        /**
         * see if backend token do return expiry time to replace the const date
         */
        const date = new Date();
        date.setTime(date.getTime() + 3600 * 1000); // Set expiration time to 1 hour from now

        if (response.status === 201) {
            const cookies = new Cookies();
            cookies.set(
                "loggedIn",
                { access_token: response.data.access_token },
                { path: "/", expires: date},
            );
        }

        return response;
    } catch (err: any) {
        // Based on server output status code
        switch (err.status) {
            case 401:
                err.message = "invalid credential input.";
                break;
            default:
                err.message = "something went wrong.";
                break;
        }
        return err;
    }
};

export const logout = () => {
    try {
        /**
         * Call server to logout if any
         */

        const cookies = new Cookies();
        cookies.remove("loggedIn", {path: "/"});
        return {status: 200, type: 'logout'}
    } catch (err: any) {
        return {status: err?.status, type:'logout', info:err}
    }
};
