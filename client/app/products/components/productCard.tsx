import React, { useEffect, useState } from "react";
import type { Product } from "@/app/products/type";
import Link from "next/link";
import { Card, Button, Space } from "antd";
import Image from "next/image";
import { DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface Props {
    product: Product;
    onDelete: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, onDelete }) => {
    const defaultImageURL = "https://i.imgur.com/QkIa5tT.jpeg";
    const [imageURL, setImageURL] = useState(product.category.image);

    useEffect(() => {
        const validateImage = async (url: string) => {
            try {
                const response = await fetch(url, { method: "HEAD" });
                const contentType = response.headers.get("content-type");
                if (contentType != "image/jpeg") setImageURL(defaultImageURL);
            } catch (err) {
                setImageURL(defaultImageURL);
            }
        };

        validateImage(product.category.image);
    }, [product.category.image]);

    return (
        <div className="product-card">
            <Card
                hoverable
                style={{ width: 240, height: 450 }}
                cover={
                    <Image
                        width={240}
                        height={250}
                        alt={product.title}
                        src={imageURL}
                    />
                }
            >
                <Meta
                    title={`${product.id}. ${product.title}`}
                    description={product.description}
                />
                <div>Price: ${product.price}</div>
                <Space style={{ position: "absolute", bottom: 20, right: 20 }}>
                    <Link href={`/products/${product.id}`}>
                        <Button type="primary">More info ...</Button>
                    </Link>
                    <Button danger onClick={() => onDelete(product.id)}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            </Card>
        </div>
    );
};

export default ProductCard;
