import React from "react";
import Link from "next/link";

import { Layout, Menu, theme } from "antd";
const { Sider } = Layout;
const items = ["users", "posts", "login"].map((str, index) => ({
    key: String(index + 1),
    label: `nav ${str}`,
    href: `/${str}`,
}));

const Sidebar = ({}) => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu mode="inline">
                <Menu.Item>
                    <Link href="/users">Users</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/posts">Posts</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/login">Login</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
