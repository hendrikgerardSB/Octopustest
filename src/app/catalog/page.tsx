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
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-easyfairs-dark">Product Catalog</h1>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-easyfairs-green"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg group cursor-pointer hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition-colors">
                                    <span>{product.name}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-easyfairs-dark">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-easyfairs-green font-bold">€{product.price}</span>
                                        <button
                                            onClick={() => handleAddToBooth(product)}
                                            className="text-xs bg-easyfairs-dark text-white px-3 py-2 rounded hover:bg-gray-800 transition-colors"
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
