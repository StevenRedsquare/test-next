"use client";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Layout } from "antd";
import { usePathname } from "next/navigation";

const { Content } = Layout;

interface Props {
    children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
    const pathname = usePathname();

    const excludeSidebarRoute = ["/login"];

    const hasSidebar = !excludeSidebarRoute.includes(pathname);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {hasSidebar && <Sidebar />}
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
