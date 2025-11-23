"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Booth from './Booth';
import FurnitureItem from './FurnitureItem';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Suspense } from 'react';

export default function Scene() {
    const furniture = useConfiguratorStore((state) => state.furniture);

    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Booth />
                    {furniture.map((item) => (
                        <FurnitureItem
                            key={item.id}
                            type={item.type}
                            position={item.position}
                            rotation={item.rotation}
                        />
                    ))}
                    <OrbitControls makeDefault />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
