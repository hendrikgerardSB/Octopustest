import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-background border-b border-white/10 dark:border-white/10 border-gray-200">
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
                                    className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/configurator"
                                    className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Configurator
                                </Link>
                                <Link
                                    href="/catalog"
                                    className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Catalog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-easyfairs-green text-easyfairs-dark px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors cursor-pointer">
                                New Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
