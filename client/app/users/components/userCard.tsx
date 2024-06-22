import React from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { User } from "../action";

interface Props {
    user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
    const items: DescriptionsProps["items"] = [
        {
            key: "1",
            label: "Name",
            children: user.name,
        },
    ];

    const companyItems: DescriptionsProps["items"] = [
        {
            key: "1",
            label: "Name",
            children: user.company.name,
        },
    ];

    return (
        <div className="user-card" key={user.id}>
            User Card for {user.name}: {user.email}
            <div>Website: {user.website}</div>
            <div>Company name: {user.company.name}</div>
            <div>City: {user.address.city}</div>
            <div>
                Coordinate: {user.address.geo.lng}, {user.address.geo.lat}
            </div>
            <Descriptions title="User Info" bordered items={items} />
            <Descriptions title="Company Info" bordered items={companyItems} />
        </div>
    );
};

export default UserCard;
