export interface Product {
    id: string;
    name: string;
    category: 'Furniture' | 'Lighting' | 'Wall Modules';
    price: number;
    image: string;
    type: 'table' | 'chair';
    dimensions: { width: number; height: number; depth: number };
}

export const products: Product[] = [
    {
        id: 'p1',
        name: 'Standard Table',
        category: 'Furniture',
        price: 150,
        image: '/placeholder-table.png',
        type: 'table',
        dimensions: { width: 1.5, height: 0.75, depth: 0.8 },
    },
    {
        id: 'p2',
        name: 'Premium Desk',
        category: 'Furniture',
        price: 300,
        image: '/placeholder-desk.png',
        type: 'table',
        dimensions: { width: 2, height: 0.75, depth: 1 },
    },
    {
        id: 'p3',
        name: 'Basic Chair',
        category: 'Furniture',
        price: 50,
        image: '/placeholder-chair.png',
        type: 'chair',
        dimensions: { width: 0.5, height: 1, depth: 0.5 },
    },
    {
        id: 'p4',
        name: 'Executive Chair',
        category: 'Furniture',
        price: 120,
        image: '/placeholder-exec-chair.png',
        type: 'chair',
        dimensions: { width: 0.7, height: 1.2, depth: 0.7 },
    },
];
