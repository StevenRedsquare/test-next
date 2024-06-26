import { apiRequest } from "@/utils/axios"
import Cookies from "universal-cookie";

export const isAuthenticated = async () => {
    const token = sessionStorage.getItem('accessToken')
    console.log(token)
    return true
    /**
     * Call the server to verify the token
     * return true if verified, else false
     */
}

export const login = async (username: string, password: string, remember: boolean) => {
    try {
        const response = await apiRequest<any>("POST", `/auth/login`,"https://api.escuelajs.co/api/v1", {
            email: username,
            password,
            remember
        })
        
        if (response.status === 201) {
            const cookies = new Cookies();
            cookies.set("loggedIn",{access_token: response.data.access_token},{path:"/"})
        }

        return response
    } catch (err: any) {
        // Based on server output status code
        switch (err.status){
            case 401:
                err.message = "invalid credential input."
                break;
            default:
                err.message = "something went wrong."
                break;
        }
        return err
    }
}

export const logout = async () => {
    try {
        /**
         * Call server to logout
         *  if return success
         *  then remove session token
         */

        sessionStorage.removeItem('accessToken');
        return true
    } catch (err) {
        return false
    }
}
