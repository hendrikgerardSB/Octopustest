import Navbar from '@/components/layout/Navbar';

export default function Configurator() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar - Tools */}
                <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-easyfairs-dark">Tools</h2>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="p-3 bg-gray-50 rounded-md border border-gray-200 cursor-pointer hover:border-easyfairs-green transition-colors">
                            <span className="font-medium text-sm">Wall Modules</span>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md border border-gray-200 cursor-pointer hover:border-easyfairs-green transition-colors">
                            <span className="font-medium text-sm">Furniture</span>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md border border-gray-200 cursor-pointer hover:border-easyfairs-green transition-colors">
                            <span className="font-medium text-sm">Lighting</span>
                        </div>
                    </div>
                </aside>

                {/* Main Canvas Area */}
                <main className="flex-1 relative bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-24 h-24 bg-easyfairs-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🎨</span>
                        </div>
                        <h2 className="text-2xl font-bold text-easyfairs-dark mb-2">3D Configurator Canvas</h2>
                        <p className="text-gray-600 max-w-md mx-auto">
                            This area will contain the 3D scene using React Three Fiber.
                            Currently in placeholder mode.
                        </p>
                    </div>
                </main>

                {/* Sidebar - Properties */}
                <aside className="w-80 bg-white border-l border-gray-200 overflow-y-auto hidden lg:block">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-easyfairs-dark">Properties</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500 italic">Select an object to view properties.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
