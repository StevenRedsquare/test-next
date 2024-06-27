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

interface Props {}

const ProfilePage: React.FC<Props> = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const fetchProfile = async () => {
        try {
            const response = await getProfile();
            setProfile(response);
        } catch (err: any) {
            err.message = "unable to fetch profile.";
            setError(err);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const items: DescriptionsProps["items"] = [
        { label: "Name", children: profile?.name, span: 3 },
        { label: "Email", children: profile?.email, span: 3 },
        { label: "Role", children: profile?.role },
    ];

    return (
        <div>
            {error?.status != null && <div>no profile</div>}

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
