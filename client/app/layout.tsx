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
                        <LayoutWrapper>{children}</LayoutWrapper>
                    </QueryClientProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
