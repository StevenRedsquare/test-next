"use client";
import React, { useEffect, useState } from 'react';
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

const ProductPage: React.FC<Props> = ({ params }) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [error, setError] = useState<Error|null>(null)

    const fetchProduct = async (id:number) => {
        try {
            const response = await getProduct(id)
            setProduct(response)
        } catch(err: any) {
            err.message = "unable to fetch product."
            setError(err as Error)
        }
    }

    useEffect( () => {
        fetchProduct(params.id)
    },[params.id])
    
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
            {error?.status != null && (<div>bad</div>)}
            
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