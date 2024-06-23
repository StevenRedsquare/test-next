"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { User } from "@/app/users/action";
import { getUsers } from "@/app/users/action";
import type { Error } from "@/utils/error";
import type { TableProps } from "antd";
import Link from "next/link";

interface Props {}

interface DataType {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserPage: React.FC<Props> = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<Error>({ message: "", status: null });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const photos = await getUsers();
                setUsers(photos);
            } catch (err) {
                setError(err as Error);
            }
        };

        fetchUsers();
    }, []);

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Id",
            dataIndex: "id",
        },
        {
            title: "Username",
            dataIndex: "username",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Action",
            render: (_, user) => (
                <div>
                    <Link href={`/users/${user.id}`}>More info...</Link>
                </div>
            ),
        },
    ];

    const data: DataType[] = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
        };
    });

    return (
        <>
            {error.status != null && <div>BAD page</div>}

            <Table columns={columns} dataSource={data} />
        </>
    );
};

export default UserPage;
