"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Layout, Menu } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    navItems,
    excludeSidebarRoute,
} from "@/components/assets/layoutWrapper";

const { Content, Sider } = Layout;

interface Props {
    children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const hasSidebar = !excludeSidebarRoute.includes(pathname);

    const items = navItems.map((item, index) => ({
        key: index,
        label: <Link href={item.path}>{item.label}</Link>,
    }));

    const sidebarBroken = (broken: boolean) => {};
    const sidebarCollapse = (collapse: boolean, type: string) => {};

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {hasSidebar && (
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={sidebarBroken}
                    onCollapse={sidebarCollapse}
                >
                    <Menu mode="vertical" theme="dark" items={items} />
                </Sider>
            )}
            <Layout>
                <Header />
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};

export default LayoutWrapper;
