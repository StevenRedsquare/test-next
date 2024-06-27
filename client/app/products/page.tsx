"use client";
import React, { useEffect, useState } from 'react';
import type { Product } from '@/app/products/type';  
import { getProducts, deleteProduct } from '@/app/products/api';
import type { Error } from "@/utils/error";
import ProductCard from '@/app/products/components/productCard';
import { Space } from 'antd';

interface Props {}

const ProductsPage: React.FC<Props> = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const fetchProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products);
        } catch (err: any) {
            err.message = "unable to fetch products.";
            setError(err as Error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []); // TODO: need to add dependency

    const handleDeleteProduct = async (id: number) => {
        await deleteProduct(id)
        const products = await getProducts();
        setProducts(products);
    } 

    return (
        <Space size={[8, 16]} wrap align='center' style={{height:'75vh', overflowY:'scroll'}}>
            {error?.status != null && (<div>BAD</div>)}

            {
                products.map( product => (
                    <ProductCard key={product.id} product={product} onDelete={handleDeleteProduct}/>
                ))
            }
        </Space>
    )
}

export default ProductsPage
