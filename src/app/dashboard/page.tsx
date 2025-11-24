"use client";

import Navbar from '@/components/layout/Navbar';
import { useConfiguratorStore } from '@/store/configuratorStore';
import GlassCard from '@/components/ui/GlassCard';
import { User, Calendar, MapPin, Clock, Plus } from 'lucide-react';

export default function Dashboard() {
    const savedProjects = useConfiguratorStore((state) => state.savedProjects);

    // Mock data for profile and past fairs
    const userProfile = {
        name: "Alex Morgan",
        role: "Exhibitor Manager",
        company: "TechFlow Solutions",
        avatar: "AM"
    };

    const pastFairs = [
        { id: 1, name: "TechExpo 2024", date: "Oct 15-17, 2024", location: "London, UK", booth: "B-12", size: "6x4m" },
        { id: 2, name: "Innovate Summit", date: "Sep 05-07, 2024", location: "Berlin, DE", booth: "A-05", size: "4x4m" },
        { id: 3, name: "FutureBuild", date: "Jun 20-22, 2024", location: "Paris, FR", booth: "C-22", size: "5x5m" },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                {/* Welcome Section */}
                <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground mb-2">
                            Welcome back, <span className="text-easyfairs-green">{userProfile.name}</span>
                        </h1>
                        <p className="text-foreground/60">Here's what's happening with your exhibitions.</p>
                    </div>
                    <a
                        href="/configurator"
                        className="glass-button px-6 py-3 rounded-full font-bold flex items-center gap-2 group"
                    >
                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        New Project
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Profile & Quick Stats */}
                    <div className="space-y-8">
                        <GlassCard className="flex flex-col items-center text-center py-8">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-easyfairs-green to-blue-500 flex items-center justify-center text-3xl font-bold text-easyfairs-dark mb-4 shadow-lg shadow-easyfairs-green/20">
                                {userProfile.avatar}
                            </div>
                            <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
                            <p className="text-sm text-foreground/60 mb-6">{userProfile.role} at {userProfile.company}</p>

                            <div className="w-full grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                <div>
                                    <div className="text-2xl font-bold text-foreground">{savedProjects.length}</div>
                                    <div className="text-xs text-foreground/50 uppercase tracking-wider">Active</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-foreground">{pastFairs.length}</div>
                                    <div className="text-xs text-foreground/50 uppercase tracking-wider">Past</div>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-easyfairs-green" />
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <div className="w-2 h-2 rounded-full bg-easyfairs-green mt-2 shrink-0" />
                                    <div>
                                        <p className="text-sm text-foreground">Project "Summer Booth" saved</p>
                                        <p className="text-xs text-foreground/50">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                                    <div>
                                        <p className="text-sm text-foreground">Order #1234 confirmed</p>
                                        <p className="text-xs text-foreground/50">Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Right Column: Active Projects & Past Fairs */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Active Projects */}
                        <section>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-foreground">Active Projects</h2>
                            </div>

                            {savedProjects.length === 0 ? (
                                <GlassCard className="text-center py-12 border-dashed border-white/20 flex flex-col items-center justify-center gap-4">
                                    <p className="text-foreground/60">No active projects. Start designing your next booth!</p>
                                </GlassCard>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {savedProjects.map((project) => (
                                        <GlassCard key={project.id} hoverEffect={true} className="group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <MapPin className="w-24 h-24 text-easyfairs-green transform rotate-12 translate-x-4 -translate-y-4" />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground mb-1">{project.name}</h3>
                                            <p className="text-sm text-foreground/60 mb-4">Last edited: {project.date}</p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <span className="px-2 py-1 rounded bg-white/5 text-xs text-foreground/80 border border-white/10">
                                                    {project.boothDimensions.width}x{project.boothDimensions.depth}m
                                                </span>
                                                <span className="px-2 py-1 rounded bg-white/5 text-xs text-foreground/80 border border-white/10">
                                                    {project.furniture.length} items
                                                </span>
                                            </div>

                                            <div className="flex gap-2">
                                                <button className="flex-1 py-2 bg-easyfairs-green/10 hover:bg-easyfairs-green/20 text-easyfairs-green text-sm font-medium rounded transition-colors">
                                                    Edit
                                                </button>
                                                <button className="px-3 py-2 bg-white/5 hover:bg-white/10 text-foreground text-sm rounded transition-colors">
                                                    Preview
                                                </button>
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Past Fairs */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-6">Past Fairs</h2>
                            <div className="space-y-4">
                                {pastFairs.map((fair) => (
                                    <GlassCard key={fair.id} hoverEffect={true} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                                <Calendar className="w-6 h-6 text-foreground/60" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground">{fair.name}</h3>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60 mt-1">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" /> {fair.location}
                                                    </span>
                                                    <span>{fair.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 w-full md:w-auto pl-16 md:pl-0">
                                            <div className="text-right hidden md:block">
                                                <div className="text-sm font-medium text-foreground">Booth {fair.booth}</div>
                                                <div className="text-xs text-foreground/50">{fair.size}</div>
                                            </div>
                                            <button className="ml-auto md:ml-0 px-4 py-2 text-sm text-foreground/60 hover:text-easyfairs-green transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}
