export interface USER {
    name: string;
    lastName: string;
    email: string;
    password?: string;
}

export interface LOGIN {
    email: string;
    password: string;
}