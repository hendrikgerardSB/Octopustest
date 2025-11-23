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
  wallColor: string;
  boothDimensions: { width: number; depth: number };
  furniture: FurnitureItem[];
}

interface ConfiguratorState {
  wallColor: string;
  boothDimensions: { width: number; depth: number };
  furniture: FurnitureItem[];
  savedProjects: SavedProject[];
  setWallColor: (color: string) => void;
  setBoothDimensions: (dimensions: { width: number; depth: number }) => void;
  addFurniture: (item: Product | 'table' | 'chair') => void;
  removeFurniture: (id: string) => void;
  saveProject: (name: string) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  wallColor: '#ffffff',
  boothDimensions: { width: 4, depth: 3 },
  furniture: [],
  savedProjects: [],
  setWallColor: (color) => set({ wallColor: color }),
  setBoothDimensions: (dimensions) => set({ boothDimensions: dimensions }),
  addFurniture: (item) =>
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
            position: [0, 0, 0],
            rotation: [0, 0, 0],
          },
        ],
      };
    }),
  removeFurniture: (id) =>
    set((state) => ({
      furniture: state.furniture.filter((item) => item.id !== id),
    })),
  saveProject: (name) =>
    set((state) => ({
      savedProjects: [
        ...state.savedProjects,
        {
          id: Math.random().toString(36).substr(2, 9),
          name,
          date: new Date().toLocaleDateString(),
          wallColor: state.wallColor,
          boothDimensions: state.boothDimensions,
          furniture: state.furniture,
        },
      ],
    })),
}));
