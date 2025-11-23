'use client';

import { useConfiguratorStore } from '@/store/configuratorStore';
import { useRef } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export function Booth() {
    const { dimensions, wallColor, floorColor } = useConfiguratorStore();
    const { width, depth } = dimensions;

    const wallHeight = 2.5; // Standard wall height in meters
    const wallThickness = 0.1;

    return (
        <group>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[width, depth]} />
                <meshStandardMaterial color={floorColor} roughness={0.8} />
            </mesh>

            {/* Back Wall */}
            <mesh
                position={[0, wallHeight / 2, -depth / 2 - wallThickness / 2]}
                receiveShadow
                castShadow
            >
                <boxGeometry args={[width + wallThickness * 2, wallHeight, wallThickness]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Left Wall */}
            <mesh
                position={[-width / 2 - wallThickness / 2, wallHeight / 2, 0]}
                receiveShadow
                castShadow
            >
                <boxGeometry args={[wallThickness, wallHeight, depth]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Right Wall */}
            <mesh
                position={[width / 2 + wallThickness / 2, wallHeight / 2, 0]}
                receiveShadow
                castShadow
            >
                <boxGeometry args={[wallThickness, wallHeight, depth]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Items */}
            {useConfiguratorStore((state) => state.items).map((item) => (
                <group key={item.id} position={item.position}>
                    <mesh castShadow receiveShadow>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color={item.color || '#3b82f6'} />
                    </mesh>
                    <Html position={[0, 0.5, 0]} center>
                        <div className="bg-black/75 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
                            {item.name}
                        </div>
                    </Html>
                </group>
            ))}
        </group>
    );
}
