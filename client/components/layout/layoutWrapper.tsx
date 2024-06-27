"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Layout } from "antd";
import { usePathname } from "next/navigation";
import { excludeSidebarRoute } from "@/components/assets/layoutWrapper";
import Sidebar from "@/components/layout/sidebar";

const { Content } = Layout;

interface Props {
    children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
    const pathname = usePathname();
    const hasSidebar = !excludeSidebarRoute.includes(pathname);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {hasSidebar && <Sidebar />}
            <Layout style={{ marginLeft: hasSidebar ? 200 : 0 }}>
                <Header hasSidebar={hasSidebar} />
                <Content style={{ margin: "100px 16px 0" }}>
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
