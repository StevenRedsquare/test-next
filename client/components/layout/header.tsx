import React from "react";
import { Layout } from "antd";
import "./index.scss";

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
