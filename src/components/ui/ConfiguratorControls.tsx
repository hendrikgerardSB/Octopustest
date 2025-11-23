'use client';

import { useConfiguratorStore } from '@/store/configuratorStore';
import { Settings, Box, Palette, Layout, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const TABS = [
    { id: 'layout', label: 'Layout', icon: Layout },
    { id: 'style', label: 'Style', icon: Palette },
    { id: 'furnish', label: 'Furnish', icon: Box },
    { id: 'settings', label: 'Settings', icon: Settings },
];

export default function ConfiguratorControls() {
    const [activeTab, setActiveTab] = useState('layout');
    const [isCollapsed, setIsCollapsed] = useState(false);

    const {
        dimensions,
        setDimensions,
        wallColor,
        setWallColor,
        floorColor,
        setFloorColor
    } = useConfiguratorStore();

    return (
        <div className={`absolute top-4 left-4 bottom-4 transition-all duration-300 ease-in-out z-10 flex ${isCollapsed ? 'w-16' : 'w-80'}`}>

            {/* Main Panel */}
            <div className="flex-1 bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl overflow-hidden flex flex-col relative">

                {/* Header */}
                <div className={`p-6 border-b border-gray-100 ${isCollapsed ? 'items-center' : ''}`}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-white font-bold">E</span>
                        </div>
                        {!isCollapsed && (
                            <div>
                                <h1 className="font-bold text-gray-900 leading-tight">Easyfairs</h1>
                                <p className="text-xs text-gray-500 font-medium">Configurator</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tabs (Vertical if collapsed, Horizontal if expanded? No, let's keep horizontal for expanded, but maybe vertical icons for collapsed) */}
                {/* Actually, for this "shapeof.ai" feel, let's do a clean sidebar of icons if collapsed, or top tabs if expanded. 
            Let's stick to expanded view for now but make it look premium. */}

                {!isCollapsed && (
                    <>
                        <div className="flex px-2 pt-2">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-3 flex flex-col items-center gap-1 rounded-xl transition-all duration-200 ${activeTab === tab.id
                                        ? 'bg-gray-100 text-blue-600 shadow-sm'
                                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <tab.icon size={18} />
                                    <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            {activeTab === 'layout' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-semibold text-gray-700">Width</label>
                                            <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{dimensions.width}m</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="2"
                                            max="10"
                                            step="0.5"
                                            value={dimensions.width}
                                            onChange={(e) => setDimensions(parseFloat(e.target.value), dimensions.depth)}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-semibold text-gray-700">Depth</label>
                                            <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{dimensions.depth}m</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="2"
                                            max="10"
                                            step="0.5"
                                            value={dimensions.depth}
                                            onChange={(e) => setDimensions(dimensions.width, parseFloat(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'style' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-gray-700">Wall Color</label>
                                        <div className="grid grid-cols-5 gap-3">
                                            {['#ffffff', '#f3f4f6', '#3b82f6', '#ef4444', '#10b981'].map((color) => (
                                                <button
                                                    key={color}
                                                    className={`w-10 h-10 rounded-full shadow-sm transition-transform hover:scale-110 focus:outline-none ring-2 ring-offset-2 ${wallColor === color ? 'ring-blue-500 scale-110' : 'ring-transparent'
                                                        }`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => setWallColor(color)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-gray-700">Floor Color</label>
                                        <div className="grid grid-cols-5 gap-3">
                                            {['#e5e5e5', '#d1d5db', '#9ca3af', '#4b5563', '#1f2937'].map((color) => (
                                                <button
                                                    key={color}
                                                    className={`w-10 h-10 rounded-full shadow-sm transition-transform hover:scale-110 focus:outline-none ring-2 ring-offset-2 ${floorColor === color ? 'ring-blue-500 scale-110' : 'ring-transparent'
                                                        }`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => setFloorColor(color)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'furnish' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <p className="text-sm text-gray-500 mb-2">Drag and drop items to place them.</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { id: 'table', name: 'Table', icon: Box },
                                            { id: 'chair', name: 'Chair', icon: Box },
                                            { id: 'counter', name: 'Counter', icon: Box },
                                            { id: 'plant', name: 'Plant', icon: Box },
                                        ].map((item) => (
                                            <button
                                                key={item.id}
                                                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                                                onClick={() => {
                                                    // For now, just add to center
                                                    useConfiguratorStore.getState().addItem({
                                                        type: 'furniture',
                                                        name: item.name,
                                                        position: [0, 0, 0],
                                                        rotation: [0, 0, 0],
                                                        scale: [1, 1, 1],
                                                        color: '#3b82f6'
                                                    });
                                                }}
                                            >
                                                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                                    <item.icon size={20} className="text-gray-600 group-hover:text-blue-600" />
                                                </div>
                                                <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">{item.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-gray-50/50 border-t border-gray-100 backdrop-blur-sm">
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</span>
                                <span className="text-2xl font-bold text-gray-900">€{(dimensions.width * dimensions.depth * 150).toFixed(0)}</span>
                            </div>
                            <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-gray-900/20 hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
                                Request Quote
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-white shadow-md rounded-r-lg flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors z-20"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

        </div>
    );
}
