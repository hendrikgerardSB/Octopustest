import { create } from 'zustand';
import { Product } from '@/data/products';

interface FurnitureItem {
  id: string;
  productId?: string;
  type: 'table' | 'chair';
  position: [number, number, number];
  rotation: [number, number, number];
}

interface SavedProject {
  id: string;
  name: string;
  date: string;
  thumbnail?: string;
  wallColor: string;
  boothDimensions: { width: number; depth: number };
  furniture: FurnitureItem[];
}

interface ConfiguratorState {
  wallColor: string;
  boothDimensions: { width: number; depth: number };
  furniture: FurnitureItem[];
  savedProjects: SavedProject[];
  viewMode: '2D' | '3D';
  placementMode: 'table' | 'chair' | null;
  setWallColor: (color: string) => void;
  setBoothDimensions: (dimensions: { width: number; depth: number }) => void;
  addFurniture: (item: Product | 'table' | 'chair', position?: [number, number, number]) => void;
  removeFurniture: (id: string) => void;
  saveProject: (name: string) => void;
  setViewMode: (mode: '2D' | '3D') => void;
  setPlacementMode: (mode: 'table' | 'chair' | null) => void;
  getSustainabilityScore: () => number;
}

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  wallColor: '#ffffff',
  boothDimensions: { width: 4, depth: 3 },
  furniture: [],
  savedProjects: [],
  viewMode: '3D',
  placementMode: null,
  setWallColor: (color) => set({ wallColor: color }),
  setBoothDimensions: (dimensions) => set({ boothDimensions: dimensions }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setPlacementMode: (mode) => set({ placementMode: mode }),
  addFurniture: (item, position = [0, 0, 0]) =>
    set((state) => {
      const type = typeof item === 'string' ? item : item.type;
      const productId = typeof item === 'string' ? undefined : item.id;

      return {
        furniture: [
          ...state.furniture,
          {
            id: Math.random().toString(36).substr(2, 9),
            productId,
            type,
            position,
            rotation: [0, 0, 0],
          },
        ],
        placementMode: null, // Exit placement mode after adding
      };
    }),
  removeFurniture: (id) =>
    set((state) => ({
      furniture: state.furniture.filter((item) => item.id !== id),
    })),
  saveProject: (name) =>
    set((state) => {
      const newProject: SavedProject = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        date: new Date().toLocaleDateString(),
        thumbnail: '/placeholder-project.png',
        wallColor: state.wallColor,
        boothDimensions: state.boothDimensions,
        furniture: state.furniture,
      };
      return { savedProjects: [...state.savedProjects, newProject] };
    }),
  getSustainabilityScore: () => {
    const { furniture, boothDimensions } = get();
    let score = 100;
    // Deduct for size
    score -= (boothDimensions.width * boothDimensions.depth) * 0.5;
    // Deduct for furniture count (simulating resource usage)
    score -= furniture.length * 2;
    // Cap at 0-100
    return Math.max(0, Math.min(100, Math.round(score)));
  }
}));
