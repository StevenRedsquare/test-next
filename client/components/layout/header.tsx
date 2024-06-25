import React from "react";
import { Layout } from "antd";
import "@/components/layout/styles/index.scss";

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <>
            <Header style={{ padding: 0, color: "#FFF" }}>
                <div className="header-title">NextJS</div>
            </Header>
        </>
    );
};

export default HeaderComponent;
