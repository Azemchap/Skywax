export interface ProductItem {
    slug: string;
    name: string;
    productSKU: string;
    price: number;
    image: string;
    category: string;
    categorySlug: string;
    description: string;
    tags: string[];
    amountInStock: number;
    features?: string[]
}

export interface ProductCard {
    currentSlug: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export interface Category {
    title: string;
    currentSlug: string;
}