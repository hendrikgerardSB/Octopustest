"use client";

import { useConfiguratorStore } from '@/store/configuratorStore';

const colors = [
    { name: 'White', value: '#ffffff' },
    { name: 'Easyfairs Green', value: '#80FFB6' },
    { name: 'Easyfairs Dark', value: '#1E293B' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Red', value: '#ef4444' },
];

export default function ConfiguratorControls() {
    const {
        wallColor,
        setWallColor,
        boothDimensions,
        setBoothDimensions,
        saveProject,
        viewMode,
        setViewMode,
        setPlacementMode,
        getSustainabilityScore,
        placementMode
    } = useConfiguratorStore();

    const sustainabilityScore = getSustainabilityScore();

    const handleSave = () => {
        const name = prompt("Enter project name:", "My Awesome Booth");
        if (name) {
            saveProject(name);
            alert("Project saved!");
        }
    };

    return (
        <div className="p-4 space-y-6">
            <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Dimensions</h3>
                <div className="space-y-4">
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
            </div>

            <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Wall Color</h3>
                <div className="grid grid-cols-5 gap-2">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => setWallColor(color.value)}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${wallColor === color.value ? 'border-foreground scale-110' : 'border-foreground/20 hover:scale-105'
                                }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Furniture</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setPlacementMode('table')}
                        className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-colors ${placementMode === 'table' ? 'border-easyfairs-green bg-green-50 ring-2 ring-easyfairs-green' : 'border-gray-200 hover:border-easyfairs-green hover:bg-green-50'
                            }`}
                    >
                        <span className="text-2xl mb-1">🪑</span>
                        <span className="text-xs font-medium">Table</span>
                    </button>
                    <button
                        onClick={() => setPlacementMode('chair')}
                        className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-colors ${placementMode === 'chair' ? 'border-easyfairs-green bg-green-50 ring-2 ring-easyfairs-green' : 'border-gray-200 hover:border-easyfairs-green hover:bg-green-50'
                            }`}
                    >
                        <span className="text-2xl mb-1">💺</span>
                        <span className="text-xs font-medium">Chair</span>
                    </button>
                </div>
            </div>

            <div className="pt-4 border-t border-foreground/10">
                <button
                    onClick={handleSave}
                    className="w-full bg-easyfairs-green text-easyfairs-dark py-2 rounded-md font-bold hover:bg-white transition-colors"
                >
                    Save Project
                </button>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Sustainability Score</h3>
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-green-800">Eco-Friendly</span>
                        <span className="text-xs font-bold text-green-600">{sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${sustainabilityScore}%` }}></div>
                    </div>
                    <p className="text-[10px] text-green-700 mt-2">
                        {sustainabilityScore > 80 ? 'Excellent! Very eco-friendly.' : sustainabilityScore > 50 ? 'Good, but could be better.' : 'Consider reducing size or items.'}
                    </p>
                </div>
            </div>

            <div>
                <button
                    className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    onClick={() => alert('AR View: Scan QR code to view in your space (Prototype)')}
                >
                    <span>📱</span> View in AR
                </button>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-6 space-y-3">
                <button
                    className="w-full py-3 bg-easyfairs-dark text-white rounded-lg font-bold hover:bg-black transition-colors shadow-lg"
                    onClick={() => alert('Design saved! (Prototype)')}
                >
                    Save Design
                </button>
                <button
                    className="w-full py-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
                    onClick={() => window.location.reload()}
                >
                    Reset Configuration
                </button>
            </div>
        </div>
    );
}
