import React from "react";
import { Menu, Layout } from "antd";
import { navItems } from "@/components/layout/sidebar/assets";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

interface Props {}

const SidebarComponent: React.FC<Props> = () => {
    const router = useRouter()

    const items = navItems.map((item, index) => ({
        key: index,
        label: !item.func 
            ? <Link href={item.path} >
                {item.label}
            </Link> 
            : <a onClick={() =>handleFunc(item.func)}>
                {item.label}
            </a>
    }));

    const handleFunc = (func: ()=>any) => {
        const response = func()

        if (response.status === 200 && response.type === 'logout') {
           return router.push("/login") 
        }
    }

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
