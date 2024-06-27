import React from "react";
import { Menu, Layout } from "antd";
import { navItems } from "@/components/assets/layoutWrapper";
import Link from "next/link";

const { Sider } = Layout;

interface Props {}

const SidebarComponent: React.FC<Props> = () => {
    const items = navItems.map((item, index) => ({
        key: index,
        label: <Link href={item.path}>{item.label}</Link>,
    }));

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{ height: "100vh", position: "fixed" }}
        >
            <Menu mode="vertical" theme="dark" items={items} />
        </Sider>
    );
};

export default SidebarComponent;
