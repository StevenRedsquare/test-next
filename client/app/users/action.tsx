import axios from "axios";
import { error } from "@/utils/error";

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
    company: Company;
    address: Address;
}

interface Company {
    name: string;
    bs: string;
    catchPhrase: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Coordinate;
}

interface Coordinate {
    lat: string;
    lng: string;
}

export const getUsers = async (): Promise<User[]> => {
    return new Promise(async (resolve, reject) => {
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.data) resolve([]);
                resolve(res.data);
            })
            .catch((err) => {
                error.message = err.response.statusText;
                error.status = err.response.status;
                reject(error);
            });
    });
};
