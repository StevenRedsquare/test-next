import React from "react";
import { Layout } from "antd";
import "@/components/layout/styles/index.scss";

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Header style={{ padding: 0, color: "#FFF", position:'fixed', width: '100%', zIndex:1 }}>
            <div className="header-title">NextJS</div>
        </Header>
    );
};

export default HeaderComponent;
