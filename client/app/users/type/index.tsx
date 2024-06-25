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
