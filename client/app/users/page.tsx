"use client";
import React from "react";
import { Button, Space, Modal, message } from "antd";
import { getUsers, deleteUser } from "@/app/users/api";
import Link from "next/link";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { ProTable, ProColumns } from "@ant-design/pro-components";

interface Props {}

interface DataType {
    id: number;
    name: string;
    username: string;
    email: string;
    key: number;
}

const UserPage: React.FC<Props> = () => {
    const title = "Users"

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

    const columns: ProColumns<DataType>[] = [
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

    return (
        <>  
            <title>{title}</title>
            <ProTable<DataType>
                columns={columns}
                search={false}
                request={() => getUsers()
                    .then((res)=>{
                        const result = res.map( data => {
                            return {
                                ...data,
                                key: data.id,
                            }
                        })

                        return Promise.resolve({
                            data: result,
                            success: true
                        })
                    })
                    .catch((err)=>{
                        err.message = "unable to fetch users."
                        message.error(err.message)
                        return {
                            data: [],
                            success: false
                        }
                    })
                }
                rowKey={"key"}
            />
        </>
    );
};

export default UserPage;
