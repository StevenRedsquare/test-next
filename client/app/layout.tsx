"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/layoutWrapper";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ConfigProvider } from "antd";
import enUS from 'antd/lib/locale/en_US';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const queryClient = new QueryClient()

    return (
        <html lang="en">   
            <title>NextJS App</title>
            <body className={inter.className}>
                <AntdRegistry>
                    <QueryClientProvider client={queryClient}>
                        <ConfigProvider locale={enUS}>
                            <LayoutWrapper>{children}</LayoutWrapper>
                        </ConfigProvider>
                    </QueryClientProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
