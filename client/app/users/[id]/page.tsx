import React from "react";
import type { User } from "@/app/users/action";
import { getUser } from "@/app/users/[id]/action";
import type { DescriptionsProps } from "antd";
import { Descriptions } from "antd";
import type { Error } from "@/utils/error";

interface Props {
    params: Params;
}

interface Params {
    id: number;
}

const UserPage: React.FC<Props> = async ({ params }) => {
    let user: User | null = null;
    let error: Error = { message: "", status: null };

    try {
        user = await getUser(params.id);
    } catch (err) {
        error = err as Error;
    }

    const userItems: DescriptionsProps["items"] = [
        {
            key: 1,
            label: "ID",
            children: user?.id,
            span: 1,
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
            span: 2,
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
            span: 2,
        },
        {
            key: 6,
            label: "Website",
            children: user?.website,
            span: 4,
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
            span: 4,
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
            span: 4,
        },
    ];

    const companyItems: DescriptionsProps["items"] = [
        {
            key: 1,
            label: "Name",
            children: user?.company.name,
            span: 4,
        },
        {
            key: 2,
            label: "Catch Phrase",
            children: user?.company.catchPhrase,
            span: 4,
        },
        {
            key: 3,
            label: "BS",
            children: user?.company.bs,
            span: 4,
        },
    ];

    return (
        <div>
            {error.status != null && <div>BADDD</div>}

            {user && (
                <>
                    <Descriptions
                        title="User Info"
                        bordered
                        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
                        items={userItems}
                    />
                    <br />
                    <Descriptions
                        title="Company info"
                        bordered
                        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
                        items={companyItems}
                    />
                </>
            )}
        </div>
    );
};

export default UserPage;
