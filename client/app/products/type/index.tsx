export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
}

interface Category {
    image: string;
    name: string;
    id: number;
}