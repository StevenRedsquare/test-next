"use client";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Layout } from "antd";
import { usePathname } from "next/navigation";

const { Content } = Layout;

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
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
