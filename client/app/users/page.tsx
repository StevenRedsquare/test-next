"use client";
import React, { useEffect, useState } from "react";
import { Table, Button, Space, Modal, message } from "antd";
import type { User } from "@/app/users/type";
import { getUsers, deleteUser, getUser } from "@/app/users/api";
import type { Error } from "@/utils/error";
import type { TableProps } from "antd";
import Link from "next/link";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useQuery } from '@tanstack/react-query'
import LoadingComponent from "@/components/loading";
import ErrorComponent from "@/components/error";

interface Props {}

interface DataType {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserPage: React.FC<Props> = () => {
    const title = "User"
    const [users, setUsers] = useState<User[]>([]);
    const [errors, setErrors] = useState<Error | null>(null);

    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
        staleTime: 10000,   // Keep data as fresh for 10sec
      })
      
    useEffect(() => {
        if (usersQuery.isSuccess) {
            setUsers(usersQuery.data)
        }

        if (usersQuery.isError) {
            usersQuery.error.message = "unable to fetch users."
            setErrors(usersQuery.error as unknown as Error)
        }
    }, [usersQuery]);

    const openDeleteModal = (user: string, id: number) => {
        Modal.confirm({
            icon: <ExclamationCircleOutlined style={{ fontSize: "2rem" }} />,
            title: "Delete Confirmation",
            content: deleteModalContent(user),
            onOk() {
                handleOK(id);
            },
            footer: (_, { OkBtn, CancelBtn }) => (
                <>
                    <OkBtn />
                    <CancelBtn />
                </>
            ),
        });
    };

    const deleteModalContent = (user: string) => (
        <div>
            Are you sure you want to delete user {user}? Process cannot be
            revert.
        </div>
    );

    const handleOK = async (id: number) => {
        await deleteUser(id)
            .then((res: any) => {
                if (res.status === 200) {
                    message.success("User successfully deleted.");
                }
            })
            .catch(() => {
                message.error("User failed to delete");
            });
    };

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
                    <Space>
                        <Link href={`/users/${user.id}`}>
                            <Button type="primary">More Info ...</Button>
                        </Link>
                        <Button
                            onClick={() =>
                                openDeleteModal(user.username, user.id)
                            }
                            type="primary"
                            danger
                        >
                            <DeleteOutlined />
                        </Button>
                    </Space>
                </div>
            ),
        },
    ];

    const dataSource: DataType[] = users.map((user) => {
        return {
            key: user.id,
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
        };
    });

    if (usersQuery.isPending) return <LoadingComponent title={title} />
    
    if (usersQuery.isError) return <ErrorComponent title={title} error={errors} />

    return (
        <>  
            <title>{title}</title>
            <Table columns={columns} dataSource={dataSource} />
        </>
    );
};

export default UserPage;
