import React from 'react';
import type { Product } from '@/app/products/type';
import type { Error } from '@/utils/error';
import { getProduct } from '@/app/products/api';
import { Card, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import Image from "next/image";

interface Props {
    params: Params
}

interface Params {
    id: number;
}

const ProductPage: React.FC<Props> = async ({ params }) => {
    let product: Product | null = null;
    let error: Error = { message: "", status: null, code: "" };

    try {
        product = await getProduct(params.id);
    } catch (err: any) {
        err.message = "unable to fetch product.";
        error = err as Error;
    }
    
    const items: DescriptionsProps['items'] = [
        {
            label: 'Description',
            children: product?.description,
            span: 3,
        },
        {
            label: 'Price',
            children: `$ ${product?.price}`,
        },
    ]

    return (
        <>
            {product && (
                <Card title="Product Info" bordered={false} style={{ width: '100%' }}>
                    <Image
                        width={240}
                        height={250}
                        alt={product.category.name}
                        src={product.category.image}
                    />             
                    <Descriptions title={product.title} layout="vertical" bordered items={items} />                    
                </Card>
            )}            
        </>
    )
}

export default ProductPage