import React from "react";
import Link from "next/link";
import { Button } from "antd";

const LoginPage = () => {
    return (
        <>
            <Link href="/">
                <Button type="primary">Go back</Button>
            </Link>

            <div>Login page</div>
        </>
    );
};

export default LoginPage;
