import Navbar from '@/components/layout/Navbar';
import Scene from '@/components/configurator/Scene';
import CatalogSidebar from '@/components/configurator/CatalogSidebar';
import CheckoutSidebar from '@/components/configurator/CheckoutSidebar';

export default function Configurator() {
    return (
        <div className="h-screen bg-background flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-1 flex overflow-hidden relative">
                {/* Left Sidebar - Catalog */}
                <CatalogSidebar />

                {/* Main Canvas Area */}
                <main className="flex-1 relative bg-foreground/5">
                    <Scene />
                </main>

                {/* Right Sidebar - Checkout/Summary */}
                <CheckoutSidebar />
            </div>
        </div>
    );
}
