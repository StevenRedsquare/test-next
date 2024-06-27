import { logout } from "@/utils/auth";

export const navItems = [
    { path: "/", label: "Home" },
    { path: "/users", label: "Users" },
    { path: "/albums", label: "Albums" },
    { path: "/posts", label: "Posts" },
    { path: "/products", label: "Products" },
    { path: "/users/profile", label: "My profile" },
    { path: "/logout", label: "Logout", func:logout },
];

export const excludeSidebarRoute = ["/login"];
