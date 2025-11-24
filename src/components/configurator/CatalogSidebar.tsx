"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Box, Lamp, Armchair, Flower2, Settings, Save, RotateCcw, Smartphone } from 'lucide-react';
import { useConfiguratorStore } from '@/store/configuratorStore';

// Mock Data Structure
const CATALOG_CATEGORIES = [
    {
        id: 'furniture',
        name: 'Furniture',
        icon: <Armchair className="w-5 h-5" />,
        items: [
            { id: 'f1', name: 'Modern Chair', price: 45, image: '🪑' },
            { id: 'f2', name: 'Round Table', price: 120, image: '🪵' },
            { id: 'f3', name: 'Bar Stool', price: 55, image: '🪑' },
            { id: 'f4', name: 'Lounge Sofa', price: 250, image: '🛋️' },
        ]
    },
    {
        id: 'lighting',
        name: 'Lighting',
        icon: <Lamp className="w-5 h-5" />,
        items: [
            { id: 'l1', name: 'Spotlight', price: 30, image: '🔦' },
            { id: 'l2', name: 'Floor Lamp', price: 85, image: '🛋️' },
            { id: 'l3', name: 'LED Strip', price: 40, image: '💡' },
        ]
    },
    {
        id: 'decoration',
        name: 'Decoration',
        icon: <Flower2 className="w-5 h-5" />,
        items: [
            { id: 'd1', name: 'Potted Plant', price: 25, image: '🪴' },
            { id: 'd2', name: 'Rug', price: 60, image: '🧶' },
            { id: 'd3', name: 'Wall Art', price: 45, image: '🖼️' },
        ]
    },
    {
        id: 'wall_modules',
        name: 'Wall Modules',
        icon: <Box className="w-5 h-5" />,
        items: [
            { id: 'w1', name: 'Standard Panel', price: 100, image: '⬜' },
            { id: 'w2', name: 'Glass Panel', price: 150, image: '🪟' },
            { id: 'w3', name: 'Door Module', price: 200, image: '🚪' },
        ]
    }
];

const WALL_COLORS = [
    { name: 'White', value: '#ffffff' },
    { name: 'Easyfairs Green', value: '#80FFB6' },
    { name: 'Easyfairs Dark', value: '#1E293B' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Red', value: '#ef4444' },
];

export default function CatalogSidebar() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>('furniture');
    const [showSettings, setShowSettings] = useState(true);

    const {
        wallColor,
        setWallColor,
        boothDimensions,
        setBoothDimensions,
        saveProject,
        getSustainabilityScore
    } = useConfiguratorStore();

    const sustainabilityScore = getSustainabilityScore();

    const toggleCategory = (id: string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    const handleSave = () => {
        const name = prompt("Enter project name:", "My Awesome Booth");
        if (name) {
            saveProject(name);
            alert("Project saved!");
        }
    };

    return (
        <aside className="w-80 h-full flex flex-col border-r border-foreground/10 bg-background z-20">
            <div className="p-4 border-b border-foreground/10">
                <h2 className="text-lg font-bold text-foreground">Configurator</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">

                {/* Room Settings Section */}
                <div className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5">
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="w-full flex items-center justify-between p-3 hover:bg-foreground/5 transition-colors text-left"
                    >
                        <div className="flex items-center gap-3">
                            <Settings className="w-5 h-5 text-easyfairs-green" />
                            <span className="font-medium text-foreground">Room Settings</span>
                        </div>
                        {showSettings ? (
                            <ChevronDown className="w-4 h-4 text-foreground/50" />
                        ) : (
                            <ChevronRight className="w-4 h-4 text-foreground/50" />
                        )}
                    </button>

                    {showSettings && (
                        <div className="p-4 bg-background/50 space-y-4 border-t border-foreground/5">
                            {/* Dimensions */}
                            <div className="space-y-3">
                                <div>
                                    <label className="text-xs text-foreground/60 block mb-1">Width ({boothDimensions.width}m)</label>
                                    <input
                                        type="range"
                                        min="2"
                                        max="10"
                                        step="0.5"
                                        value={boothDimensions.width}
                                        onChange={(e) => setBoothDimensions({ ...boothDimensions, width: parseFloat(e.target.value) })}
                                        className="w-full accent-easyfairs-green"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-foreground/60 block mb-1">Depth ({boothDimensions.depth}m)</label>
                                    <input
                                        type="range"
                                        min="2"
                                        max="10"
                                        step="0.5"
                                        value={boothDimensions.depth}
                                        onChange={(e) => setBoothDimensions({ ...boothDimensions, depth: parseFloat(e.target.value) })}
                                        className="w-full accent-easyfairs-green"
                                    />
                                </div>
                            </div>

                            {/* Wall Color */}
                            <div>
                                <label className="text-xs text-foreground/60 block mb-2">Wall Color</label>
                                <div className="flex flex-wrap gap-2">
                                    {WALL_COLORS.map((color) => (
                                        <button
                                            key={color.value}
                                            onClick={() => setWallColor(color.value)}
                                            className={`w-6 h-6 rounded-full border transition-all ${wallColor === color.value ? 'border-foreground scale-110 ring-2 ring-foreground/20' : 'border-foreground/20 hover:scale-105'}`}
                                            style={{ backgroundColor: color.value }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Catalog Categories */}
                <div className="space-y-2">
                    <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-wider px-1">Catalog</h3>
                    {CATALOG_CATEGORIES.map((category) => (
                        <div key={category.id} className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5">
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="w-full flex items-center justify-between p-3 hover:bg-foreground/5 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-easyfairs-green">{category.icon}</span>
                                    <span className="font-medium text-foreground">{category.name}</span>
                                </div>
                                {expandedCategory === category.id ? (
                                    <ChevronDown className="w-4 h-4 text-foreground/50" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-foreground/50" />
                                )}
                            </button>

                            {expandedCategory === category.id && (
                                <div className="p-2 bg-background/50 grid grid-cols-2 gap-2 border-t border-foreground/5">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="p-2 rounded-lg bg-background hover:bg-easyfairs-green/10 border border-foreground/5 hover:border-easyfairs-green/50 cursor-pointer transition-all group flex flex-col items-center text-center gap-2"
                                        >
                                            <div className="text-2xl group-hover:scale-110 transition-transform">{item.image}</div>
                                            <div>
                                                <div className="text-xs font-medium text-foreground truncate w-full">{item.name}</div>
                                                <div className="text-xs text-easyfairs-green">€{item.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-foreground/10 bg-foreground/5 space-y-4">
                {/* Sustainability Score */}
                <div className="bg-green-50/10 p-3 rounded-lg border border-green-500/20">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-green-500">Eco-Friendly</span>
                        <span className="text-xs font-bold text-green-500">{sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full bg-green-900/20 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${sustainabilityScore}%` }}></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={handleSave}
                        className="flex items-center justify-center gap-2 py-2 bg-easyfairs-green text-easyfairs-dark rounded-lg font-bold hover:bg-white transition-colors text-sm"
                    >
                        <Save className="w-4 h-4" />
                        Save
                    </button>
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 py-2 bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors text-sm"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>
                </div>

                <button
                    onClick={() => alert('AR View: Scan QR code to view in your space (Prototype)')}
                    className="w-full flex items-center justify-center gap-2 py-2 border border-foreground/10 rounded-lg text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                    <Smartphone className="w-4 h-4" />
                    View in AR
                </button>
            </div>
        </aside>
    );
}
