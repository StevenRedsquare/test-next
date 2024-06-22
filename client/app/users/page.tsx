import type { Metadata } from "next";
import "./index.scss";
import UserCard from "./components/userCard";
import { User, getUsers } from "./action";
import { Error } from "@/utils/error";

export const metadata: Metadata = {
    title: "User",
    description: "This is user page",
};

interface Props {}

const UserPage: React.FC<Props> = async () => {
    let users: User[] = [];
    let error: Error = { message: "", status: null };

    try {
        users = await getUsers();
    } catch (err) {
        error = err as Error;
    }

    return (
        <>
            {error.status != null && <div>BADDD</div>}

            {users.length > 0 ? (
                users.map((user) => <UserCard key={user.id} user={user} />)
            ) : (
                <div>empty user</div>
            )}
        </>
    );
};

export default UserPage;
