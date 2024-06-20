"use client";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const excludeSidebarRoute = ["/login"];
    const hasSidebar = !excludeSidebarRoute.includes(pathname);

    return (
        <div>
            {hasSidebar && <Sidebar />}
            <main>{children}</main>
        </div>
    );
};

export default LayoutWrapper;
