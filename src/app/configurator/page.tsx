import Navbar from '@/components/layout/Navbar';
import Scene from '@/components/configurator/Scene';
import ConfiguratorControls from '@/components/ui/ConfiguratorControls';

export default function Configurator() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar - Tools */}
                <aside className="w-64 bg-background border-r border-foreground/10 overflow-y-auto hidden md:block z-10">
                    <div className="p-4 border-b border-foreground/10">
                        <h2 className="text-lg font-semibold text-foreground">Tools</h2>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="p-3 bg-foreground/5 rounded-md border border-foreground/10 cursor-pointer hover:border-easyfairs-green transition-colors">
                            <span className="font-medium text-sm text-foreground">Wall Modules</span>
                        </div>
                        <div className="p-3 bg-foreground/5 rounded-md border border-foreground/10 cursor-pointer hover:border-easyfairs-green transition-colors">
                            <span className="font-medium text-sm text-foreground">Furniture</span>
                        </div>
                        <div className="p-3 bg-foreground/5 rounded-md border border-foreground/10 cursor-pointer hover:border-easyfairs-green transition-colors">
                            <span className="font-medium text-sm text-foreground">Lighting</span>
                        </div>
                    </div>

                    <div className="border-t border-foreground/10 mt-4">
                        <ConfiguratorControls />
                    </div>
                </aside>

                {/* Main Canvas Area */}
                <main className="flex-1 relative bg-foreground/5">
                    <Scene />
                </main>

                {/* Sidebar - Properties */}
                <aside className="w-80 bg-background border-l border-foreground/10 overflow-y-auto hidden lg:block z-10">
                    <div className="p-4 border-b border-foreground/10">
                        <h2 className="text-lg font-semibold text-foreground">Properties</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-foreground/60 italic">Select an object to view properties.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
