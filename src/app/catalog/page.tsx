"use client";

import Navbar from '@/components/layout/Navbar';
import { products } from '@/data/products';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { useRouter } from 'next/navigation';

export default function Catalog() {
    const addFurniture = useConfiguratorStore((state) => state.addFurniture);
    const router = useRouter();

    const handleAddToBooth = (product: typeof products[0]) => {
        addFurniture(product);
        router.push('/configurator');
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-foreground">Product Catalog</h1>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border border-foreground/20 bg-background text-foreground rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-easyfairs-green placeholder:text-foreground/40"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-foreground/5 overflow-hidden rounded-lg group cursor-pointer hover:shadow-md transition-shadow border border-foreground/10">
                                <div className="h-48 bg-foreground/10 flex items-center justify-center text-foreground/40 group-hover:bg-foreground/20 transition-colors">
                                    <span>{product.name}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-foreground">{product.name}</h3>
                                    <p className="text-sm text-foreground/60 mt-1">{product.category}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-easyfairs-green font-bold">€{product.price}</span>
                                        <button
                                            onClick={() => handleAddToBooth(product)}
                                            className="text-xs bg-easyfairs-dark text-white px-3 py-2 rounded hover:bg-foreground hover:text-background transition-colors"
                                        >
                                            Add to Booth
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
