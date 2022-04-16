export interface PRODUCT {
    id: number;
    name: string;
    alias: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    configurations: PRODUCT_CONFIGURATION[];
}

export interface PRODUCT_CONFIGURATION {
    name: string;
    options: {
        name: string;
        value: string;
        amount: number;
    }[]
}

export interface SHOPPING_PRODDUCT {
    product?: PRODUCT;
    amount: number;
    configuration: {
        name: string;
        option: string;
    }[]
}