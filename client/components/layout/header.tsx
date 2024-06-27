import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

interface Props {
    hasSidebar: boolean;
}

const HeaderComponent: React.FC<Props> = ({ hasSidebar }) => {
    return (
        <Header
            style={{
                padding: 0,
                color: "#FFF",
                position: "fixed",
                width: "100%",
                zIndex: 1,
            }}
        >
            <div
                style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    marginLeft: hasSidebar ? -150 : 0,
                }}
            >
                NextJS
            </div>
        </Header>
    );
};

export default HeaderComponent;
