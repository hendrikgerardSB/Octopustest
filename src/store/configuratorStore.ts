import { create } from 'zustand';

export type BoothItem = {
  id: string;
  type: 'furniture' | 'structure';
  modelUrl?: string; // For now, we might just use primitive types
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color?: string;
};

interface ConfiguratorState {
  dimensions: { width: number; depth: number };
  items: BoothItem[];
  wallTexture: string | null;
  floorTexture: string | null;
  wallColor: string;
  floorColor: string;
  
  setDimensions: (width: number, depth: number) => void;
  addItem: (item: Omit<BoothItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateItemPosition: (id: string, position: [number, number, number]) => void;
  setWallColor: (color: string) => void;
  setFloorColor: (color: string) => void;
  reset: () => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  dimensions: { width: 3, depth: 3 }, // Default 3x3 meters
  items: [],
  wallTexture: null,
  floorTexture: null,
  wallColor: '#ffffff',
  floorColor: '#e5e5e5',

  setDimensions: (width, depth) => set({ dimensions: { width, depth } }),
  
  addItem: (item) => set((state) => ({
    items: [...state.items, { ...item, id: Math.random().toString(36).substr(2, 9) }]
  })),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id)
  })),
  
  updateItemPosition: (id, position) => set((state) => ({
    items: state.items.map((i) => i.id === id ? { ...i, position } : i)
  })),

  setWallColor: (color) => set({ wallColor: color }),
  setFloorColor: (color) => set({ floorColor: color }),
  
  reset: () => set({
    dimensions: { width: 3, depth: 3 },
    items: [],
    wallColor: '#ffffff',
    floorColor: '#e5e5e5'
  })
}));
