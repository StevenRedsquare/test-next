"use client";
import React, { useEffect, useState } from "react";
import type { User } from "@/app/users/type";
import { getUser } from "@/app/users/api";
import type { DescriptionsProps } from "antd";
import { Descriptions } from "antd";
import type { Error } from "@/utils/error";
import { useQuery } from '@tanstack/react-query'
import LoadingComponent from "@/components/loading";
import ErrorComponent from "@/components/error";

interface Props {
    params: Params;
}

interface Params {
    id: number;
}

const UserPage: React.FC<Props> = ({ params }) => {
    const title = "User"

    const {data: user, error, isSuccess, isPending, isError} = useQuery<User, Error>({
        queryKey: ['user', params.id],
        queryFn: () => getUser(params.id),
        staleTime: 10000,   // Keep data as fresh for 10sec
      })

    const userItems: DescriptionsProps["items"] = [
        {
            key: 1,
            label: "ID",
            children: user?.id,
        },
        {
            key: 2,
            label: "Username",
            children: user?.username,
            span: 2,
        },
        {
            key: 3,
            label: "Name",
            children: user?.name,
        },
        {
            key: 4,
            label: "Email",
            children: user?.email,
            span: 2,
        },
        {
            key: 5,
            label: "Phone",
            children: user?.phone,
        },
        {
            key: 6,
            label: "Website",
            children: user?.website,
            span: 2,
        },
        {
            key: 7,
            label: "Address",
            children: (
                <div>
                    <p>{user?.address.suite}</p>
                    <p>{user?.address.street}</p>
                    <p>{user?.address.city}</p>
                    <p>{user?.address.zipcode}</p>
                </div>
            ),
        },
        {
            key: 8,
            label: "Geo",
            children: (
                <div>
                    <p>
                        {user?.address.geo.lng}, {user?.address.geo.lat}
                    </p>
                </div>
            ),
            span: 2,
        },
    ];

    const companyItems: DescriptionsProps["items"] = [
        {
            key: 1,
            label: "Name",
            children: user?.company.name,
            span: 3,
        },
        {
            key: 2,
            label: "Catch Phrase",
            children: user?.company.catchPhrase,
            span: 3,
        },
        {
            key: 3,
            label: "BS",
            children: user?.company.bs,
            span: 3,
        },
    ];

    if (isPending) return <LoadingComponent title={title} />
    if (isError) {
        error.message = "unable to fetch user."
        return <ErrorComponent title={title} error={error} />
    }

    return (
        <div>
            <title>{title}</title>
            {user && (
                <>
                    <Descriptions
                        title="User Info"
                        bordered
                        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
                        items={userItems}
                    />
                    <br />
                    <Descriptions
                        title="Company info"
                        bordered
                        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
                        items={companyItems}
                    />
                </>
            )}
        </div>
    );
};

export default UserPage;
