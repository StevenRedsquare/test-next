import type { Product } from '@/app/products/type'
import { apiRequest } from '@/utils/axios'

export const getProducts = async (): Promise<Product[]> => {
    const response = await apiRequest<Product[]>("GET", `/products`, "https://api.escuelajs.co/api/v1")
    return response.data
}

export const getProduct = async (id: number): Promise<Product> => {
    const response = await apiRequest<Product>("GET", `/products/${id}`, "https://api.escuelajs.co/api/v1")
    return response.data
}

export const deleteProduct = async (id: number) => {
    const response = await apiRequest<Product[]>("DELETE", `/products/${id}`, "https://api.escuelajs.co/api/v1")
    return response
}
