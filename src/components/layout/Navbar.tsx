import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-easyfairs-dark text-white border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-easyfairs-green font-bold text-xl">Easyfairs</span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/configurator"
                                    className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Configurator
                                </Link>
                                <Link
                                    href="/catalog"
                                    className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Catalog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-easyfairs-green text-easyfairs-dark px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors">
                                New Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
