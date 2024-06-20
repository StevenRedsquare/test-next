import axios from "axios";
import UserCard from "@/components/userCard";
import { Button } from "antd";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {
    let users: User[] = [];

    const getUser = async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
        );
        users = res?.data;
    };

    await getUser();

    return (
        <>
            User page
            <div>
                <Button type="primary">Click me</Button>
            </div>
            {users.map((user) => (
                <>
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                    />
                </>
            ))}
        </>
    );
};

export default UserPage;
