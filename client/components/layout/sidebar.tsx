import React from "react";
import Link from "next/link";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

const navItems = [
    { path: "/", label: "Home" },
    { path: "/users", label: "Users" },
    { path: "/albums", label: "Albums" },
    { path: "/posts", label: "Posts" },
    { path: "/login", label: "Login" },
];

const items = navItems.map((item, index) => ({
    key: index,
    label: <Link href={item.path}>{item.label}</Link>,
}));

const Sidebar = ({}) => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken, "BROKE");
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu mode="vertical" theme="dark" items={items} />
        </Sider>
    );
};

export default Sidebar;
