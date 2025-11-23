"use client";

import Navbar from '@/components/layout/Navbar';
import { useConfiguratorStore } from '@/store/configuratorStore';

export default function Dashboard() {
    const savedProjects = useConfiguratorStore((state) => state.savedProjects);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-foreground mb-6">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Quick Stats */}
                        <div className="bg-foreground/5 overflow-hidden rounded-lg p-6 border border-foreground/10">
                            <dt className="text-sm font-medium text-foreground/60 truncate">Active Projects</dt>
                            <dd className="mt-1 text-3xl font-semibold text-foreground">{savedProjects.length}</dd>
                        </div>
                        <div className="bg-foreground/5 overflow-hidden rounded-lg p-6 border border-foreground/10">
                            <dt className="text-sm font-medium text-foreground/60 truncate">Pending Reviews</dt>
                            <dd className="mt-1 text-3xl font-semibold text-foreground">1</dd>
                        </div>
                        <div className="bg-foreground/5 overflow-hidden rounded-lg p-6 border border-foreground/10">
                            <dt className="text-sm font-medium text-foreground/60 truncate">Total Orders</dt>
                            <dd className="mt-1 text-3xl font-semibold text-foreground">12</dd>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-foreground mb-4">Saved Projects</h2>
                    {savedProjects.length === 0 ? (
                        <div className="text-center py-12 bg-foreground/5 rounded-lg border border-dashed border-foreground/20 flex flex-col items-center justify-center gap-4">
                            <p className="text-foreground/60">No saved projects yet.</p>
                            <a
                                href="/configurator"
                                className="px-6 py-3 bg-easyfairs-green text-easyfairs-dark rounded-full font-bold hover:bg-white transition-colors"
                            >
                                + Start New Project
                            </a>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {savedProjects.map((project) => (
                                <div key={project.id} className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 hover:border-easyfairs-green transition-colors cursor-pointer">
                                    <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                                    <p className="text-sm text-foreground/60 mb-4">Saved on {project.date}</p>
                                    <div className="flex gap-2 text-xs text-foreground/50">
                                        <span>{project.boothDimensions.width}x{project.boothDimensions.depth}m</span>
                                        <span>•</span>
                                        <span>{project.furniture.length} items</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

