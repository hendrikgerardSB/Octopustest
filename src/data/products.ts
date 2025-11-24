export interface Product {
    id: string;
    name: string;
    category: 'Furniture' | 'Lighting' | 'Wall Modules' | 'Decoration';
    price: number;
    image: string;
    type: 'table' | 'chair' | 'sofa' | 'bar_stool' | 'spotlight' | 'floor_lamp' | 'led_strip' | 'plant' | 'rug' | 'wall_art' | 'panel' | 'glass_panel' | 'door';
    dimensions: { width: number; height: number; depth: number };
}

export const products: Product[] = [
    // Furniture
    { id: 'f1', name: 'Modern Chair', category: 'Furniture', price: 45, image: '🪑', type: 'chair', dimensions: { width: 0.5, height: 1, depth: 0.5 } },
    { id: 'f2', name: 'Round Table', category: 'Furniture', price: 120, image: '🪵', type: 'table', dimensions: { width: 1.5, height: 0.75, depth: 1.5 } },
    { id: 'f3', name: 'Bar Stool', category: 'Furniture', price: 55, image: '🪑', type: 'bar_stool', dimensions: { width: 0.4, height: 0.8, depth: 0.4 } },
    { id: 'f4', name: 'Lounge Sofa', category: 'Furniture', price: 250, image: '🛋️', type: 'sofa', dimensions: { width: 2, height: 0.8, depth: 0.8 } },

    // Lighting
    { id: 'l1', name: 'Spotlight', category: 'Lighting', price: 30, image: '🔦', type: 'spotlight', dimensions: { width: 0.2, height: 1.5, depth: 0.2 } },
    { id: 'l2', name: 'Floor Lamp', category: 'Lighting', price: 85, image: '🛋️', type: 'floor_lamp', dimensions: { width: 0.4, height: 1.8, depth: 0.4 } },
    { id: 'l3', name: 'LED Strip', category: 'Lighting', price: 40, image: '💡', type: 'led_strip', dimensions: { width: 1, height: 0.05, depth: 0.05 } },

    // Decoration
    { id: 'd1', name: 'Potted Plant', category: 'Decoration', price: 25, image: '🪴', type: 'plant', dimensions: { width: 0.4, height: 0.6, depth: 0.4 } },
    { id: 'd2', name: 'Rug', category: 'Decoration', price: 60, image: '🧶', type: 'rug', dimensions: { width: 2, height: 0.01, depth: 3 } },
    { id: 'd3', name: 'Wall Art', category: 'Decoration', price: 45, image: '🖼️', type: 'wall_art', dimensions: { width: 1, height: 1.5, depth: 0.05 } },

    // Wall Modules
    { id: 'w1', name: 'Standard Panel', category: 'Wall Modules', price: 100, image: '⬜', type: 'panel', dimensions: { width: 1, height: 2.5, depth: 0.05 } },
    { id: 'w2', name: 'Glass Panel', category: 'Wall Modules', price: 150, image: '🪟', type: 'glass_panel', dimensions: { width: 1, height: 2.5, depth: 0.05 } },
    { id: 'w3', name: 'Door Module', category: 'Wall Modules', price: 200, image: '🚪', type: 'door', dimensions: { width: 1, height: 2.5, depth: 0.05 } },
];
