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
            { id: 'f1', name: 'Modern Chair', price: 45, image: '🪑', type: 'chair' },
            { id: 'f2', name: 'Round Table', price: 120, image: '🪵', type: 'table' },
            { id: 'f3', name: 'Bar Stool', price: 55, image: '🪑', type: 'bar_stool' },
            { id: 'f4', name: 'Lounge Sofa', price: 250, image: '🛋️', type: 'sofa' },
        ]
    },
    {
        id: 'lighting',
        name: 'Lighting',
        icon: <Lamp className="w-5 h-5" />,
        items: [
            { id: 'l1', name: 'Spotlight', price: 30, image: '🔦', type: 'spotlight' },
            { id: 'l2', name: 'Floor Lamp', price: 85, image: '🛋️', type: 'floor_lamp' },
            { id: 'l3', name: 'LED Strip', price: 40, image: '💡', type: 'led_strip' },
        ]
    },
    {
        id: 'decoration',
        name: 'Decoration',
        icon: <Flower2 className="w-5 h-5" />,
        items: [
            { id: 'd1', name: 'Potted Plant', price: 25, image: '🪴', type: 'plant' },
            { id: 'd2', name: 'Rug', price: 60, image: '🧶', type: 'rug' },
            { id: 'd3', name: 'Wall Art', price: 45, image: '🖼️', type: 'wall_art' },
        ]
    },
    {
        id: 'wall_modules',
        name: 'Wall Modules',
        icon: <Box className="w-5 h-5" />,
        items: [
            { id: 'w1', name: 'Standard Panel', price: 100, image: '⬜', type: 'panel' },
            { id: 'w2', name: 'Glass Panel', price: 150, image: '🪟', type: 'glass_panel' },
            { id: 'w3', name: 'Door Module', price: 200, image: '🚪', type: 'door' },
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
        loadProject,
        getSustainabilityScore,
        setPlacementMode,
        placementMode,
        addFurniture
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

                    {/* Packs Category */}
                    <div className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5">
                        <button
                            onClick={() => toggleCategory('packs')}
                            className="w-full flex items-center justify-between p-3 hover:bg-foreground/5 transition-colors text-left"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-easyfairs-green"><Box className="w-5 h-5" /></span>
                                <span className="font-medium text-foreground">Packs</span>
                            </div>
                            {expandedCategory === 'packs' ? (
                                <ChevronDown className="w-4 h-4 text-foreground/50" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-foreground/50" />
                            )}
                        </button>
                        {expandedCategory === 'packs' && (
                            <div className="p-2 bg-background/50 grid grid-cols-1 gap-2 border-t border-foreground/5">
                                <div
                                    onClick={() => {
                                        // Add Meeting Corner Pack
                                        addFurniture({ type: 'table', id: 'p_t1' } as any, [0, 0, 0]);
                                        addFurniture({ type: 'chair', id: 'p_c1' } as any, [-1, 0, 0]);
                                        addFurniture({ type: 'chair', id: 'p_c2' } as any, [1, 0, 0]);
                                        addFurniture({ type: 'plant', id: 'p_p1' } as any, [0, 0, -1.5]);
                                    }}
                                    className="p-3 rounded-lg bg-background hover:bg-easyfairs-green/10 border border-foreground/5 hover:border-easyfairs-green/50 cursor-pointer transition-all group flex items-center gap-3"
                                >
                                    <div className="text-2xl">🤝</div>
                                    <div>
                                        <div className="text-sm font-medium text-foreground">Meeting Corner</div>
                                        <div className="text-xs text-foreground/60">Table + 2 Chairs + Plant</div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        // Add Lounge Area Pack
                                        addFurniture({ type: 'sofa', id: 'p_s1' } as any, [0, 0, -1]);
                                        addFurniture({ type: 'rug', id: 'p_r1' } as any, [0, 0, 0]);
                                        addFurniture({ type: 'floor_lamp', id: 'p_l1' } as any, [1.5, 0, -1]);
                                    }}
                                    className="p-3 rounded-lg bg-background hover:bg-easyfairs-green/10 border border-foreground/5 hover:border-easyfairs-green/50 cursor-pointer transition-all group flex items-center gap-3"
                                >
                                    <div className="text-2xl">🛋️</div>
                                    <div>
                                        <div className="text-sm font-medium text-foreground">Lounge Area</div>
                                        <div className="text-xs text-foreground/60">Sofa + Rug + Lamp</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Presets Category */}
                    <div className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5">
                        <button
                            onClick={() => toggleCategory('presets')}
                            className="w-full flex items-center justify-between p-3 hover:bg-foreground/5 transition-colors text-left"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-easyfairs-green"><Settings className="w-5 h-5" /></span>
                                <span className="font-medium text-foreground">Presets</span>
                            </div>
                            {expandedCategory === 'presets' ? (
                                <ChevronDown className="w-4 h-4 text-foreground/50" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-foreground/50" />
                            )}
                        </button>
                        {expandedCategory === 'presets' && (
                            <div className="p-2 bg-background/50 grid grid-cols-1 gap-2 border-t border-foreground/5">
                                <div
                                    onClick={() => {
                                        if (confirm('This will clear your current design. Continue?')) {
                                            loadProject({
                                                id: 'preset_1',
                                                name: 'Small Booth',
                                                date: new Date().toISOString(),
                                                wallColor: '#ffffff',
                                                boothDimensions: { width: 3, depth: 3 },
                                                furniture: [
                                                    { id: 'pre_1', type: 'table', position: [0, 0, 0], rotation: [0, 0, 0] },
                                                    { id: 'pre_2', type: 'chair', position: [-0.8, 0, 0], rotation: [0, 1.57, 0] },
                                                    { id: 'pre_3', type: 'chair', position: [0.8, 0, 0], rotation: [0, -1.57, 0] },
                                                    { id: 'pre_4', type: 'wall_art', position: [0, 1.5, -1.45], rotation: [0, 0, 0] }
                                                ]
                                            });
                                        }
                                    }}
                                    className="p-3 rounded-lg bg-background hover:bg-easyfairs-green/10 border border-foreground/5 hover:border-easyfairs-green/50 cursor-pointer transition-all group flex items-center gap-3"
                                >
                                    <div className="text-2xl">📦</div>
                                    <div>
                                        <div className="text-sm font-medium text-foreground">Small Booth (3x3)</div>
                                        <div className="text-xs text-foreground/60">Basic setup for small spaces</div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        if (confirm('This will clear your current design. Continue?')) {
                                            loadProject({
                                                id: 'preset_2',
                                                name: 'Large Lounge',
                                                date: new Date().toISOString(),
                                                wallColor: '#1E293B',
                                                boothDimensions: { width: 6, depth: 4 },
                                                furniture: [
                                                    { id: 'pre_l1', type: 'sofa', position: [-1.5, 0, -1], rotation: [0, 0.5, 0] },
                                                    { id: 'pre_l2', type: 'sofa', position: [1.5, 0, -1], rotation: [0, -0.5, 0] },
                                                    { id: 'pre_l3', type: 'rug', position: [0, 0, 0], rotation: [-1.57, 0, 0] },
                                                    { id: 'pre_l4', type: 'plant', position: [-2.5, 0, 1.5], rotation: [0, 0, 0] },
                                                    { id: 'pre_l5', type: 'plant', position: [2.5, 0, 1.5], rotation: [0, 0, 0] },
                                                    { id: 'pre_l6', type: 'floor_lamp', position: [0, 0, -1.5], rotation: [0, 0, 0] }
                                                ]
                                            });
                                        }
                                    }}
                                    className="p-3 rounded-lg bg-background hover:bg-easyfairs-green/10 border border-foreground/5 hover:border-easyfairs-green/50 cursor-pointer transition-all group flex items-center gap-3"
                                >
                                    <div className="text-2xl">✨</div>
                                    <div>
                                        <div className="text-sm font-medium text-foreground">Large Lounge (6x4)</div>
                                        <div className="text-xs text-foreground/60">Premium setup for larger booths</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

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
                                            onClick={() => setPlacementMode(item.type as any)}
                                            className={`p-2 rounded-lg border cursor-pointer transition-all group flex flex-col items-center text-center gap-2 ${placementMode === item.type
                                                ? 'bg-easyfairs-green/20 border-easyfairs-green ring-1 ring-easyfairs-green'
                                                : 'bg-background hover:bg-easyfairs-green/10 border-foreground/5 hover:border-easyfairs-green/50'
                                                }`}
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
