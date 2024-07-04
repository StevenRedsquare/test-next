/**
 * For demo of Authorization url call
 */
"use client";
import { Error } from "@/utils/error";
import React, { useEffect, useState } from "react";
import { getProfile } from "@/app/users/api";
import { Avatar, Card, Descriptions, Space } from "antd";
import type { DescriptionsProps } from "antd";
import type { Profile } from "@/app/users/type";
import { useQuery } from '@tanstack/react-query'
import LoadingComponent from "@/components/loading";
import ErrorComponent from "@/components/error";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
    const title = "Profile"

    const {data: profile, error, isSuccess, isPending, isError} = useQuery<Profile, Error>({
        queryKey: ['profile'],
        queryFn: () => getProfile(),
        staleTime: 10000,   // Keep data as fresh for 10sec
    })

    const items: DescriptionsProps["items"] = [
        { label: "Name", children: profile?.name, span: 3 },
        { label: "Email", children: profile?.email, span: 3 },
        { label: "Role", children: profile?.role },
    ];

    if (isPending) return <LoadingComponent title={title} />
    if (isError) {
        error.message = "unable to fetch profile."
        return <ErrorComponent title={title} error={error} />
    }

    return (
        <div>
            <title>{title}</title>
            <Card title="My Profile" bordered={false}>
                <div style={{ display: "flex" }}>
                    <div>
                        <Avatar src={profile?.avatar} size={250} />
                    </div>
                    <div style={{ padding: 30, alignContent: "center" }}>
                        <Descriptions items={items} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;
