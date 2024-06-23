import React from "react";
import Link from "next/link";
import { Button } from "antd";
import "@/app/login/index.scss";

interface Props {}

const LoginPage: React.FC<Props> = async () => {
    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Login page</h1>
                <p>This page will have no sidebar</p>
            </div>
            <Link href="/">
                <Button type="primary">Go back</Button>
            </Link>
        </div>
    );
};

export default LoginPage;
