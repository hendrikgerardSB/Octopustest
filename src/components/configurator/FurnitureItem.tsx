"use client";

import React, { useRef, useState } from 'react';
import { PivotControls } from '@react-three/drei';
import { useConfiguratorStore } from '@/store/configuratorStore';
import * as THREE from 'three';

interface FurnitureItemProps {
    id: string;
    type: 'table' | 'chair' | 'sofa' | 'bar_stool' | 'spotlight' | 'floor_lamp' | 'led_strip' | 'plant' | 'rug' | 'wall_art' | 'panel' | 'glass_panel' | 'door';
    position: [number, number, number];
    rotation: [number, number, number];
}

export default function FurnitureItem({ id, type, position, rotation }: FurnitureItemProps) {
    const updateFurniturePosition = useConfiguratorStore((state) => state.updateFurniturePosition);
    const [isSelected, setIsSelected] = useState(false);
    const groupRef = useRef<THREE.Group>(null);

    const handleDragEnd = () => {
        if (groupRef.current) {
            const { x, y, z } = groupRef.current.position;
            // Snap to floor (y=0) and update store
            updateFurniturePosition(id, [x, 0, z]);
        }
    };

    const content = (
        <group
            ref={groupRef}
            position={position}
            rotation={rotation}
            onClick={(e) => {
                e.stopPropagation();
                setIsSelected(!isSelected);
            }}
        >
            {type === 'table' && (
                <group>
                    {/* Table Top */}
                    <mesh position={[0, 0.75, 0]}>
                        <boxGeometry args={[1.5, 0.1, 0.8]} />
                        <meshStandardMaterial color="#8B4513" />
                    </mesh>
                    {/* Legs */}
                    <mesh position={[-0.6, 0.375, -0.3]}>
                        <boxGeometry args={[0.1, 0.75, 0.1]} />
                        <meshStandardMaterial color="#5D4037" />
                    </mesh>
                    <mesh position={[0.6, 0.375, -0.3]}>
                        <boxGeometry args={[0.1, 0.75, 0.1]} />
                        <meshStandardMaterial color="#5D4037" />
                    </mesh>
                    <mesh position={[-0.6, 0.375, 0.3]}>
                        <boxGeometry args={[0.1, 0.75, 0.1]} />
                        <meshStandardMaterial color="#5D4037" />
                    </mesh>
                    <mesh position={[0.6, 0.375, 0.3]}>
                        <boxGeometry args={[0.1, 0.75, 0.1]} />
                        <meshStandardMaterial color="#5D4037" />
                    </mesh>
                </group>
            )}

            {type === 'chair' && (
                <group>
                    {/* Seat */}
                    <mesh position={[0, 0.45, 0]}>
                        <boxGeometry args={[0.5, 0.05, 0.5]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    {/* Back */}
                    <mesh position={[0, 0.95, -0.225]}>
                        <boxGeometry args={[0.5, 1, 0.05]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    {/* Legs */}
                    <mesh position={[-0.2, 0.225, -0.2]}>
                        <boxGeometry args={[0.05, 0.45, 0.05]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                    <mesh position={[0.2, 0.225, -0.2]}>
                        <boxGeometry args={[0.05, 0.45, 0.05]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                    <mesh position={[-0.2, 0.225, 0.2]}>
                        <boxGeometry args={[0.05, 0.45, 0.05]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                    <mesh position={[0.2, 0.225, 0.2]}>
                        <boxGeometry args={[0.05, 0.45, 0.05]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                </group>
            )}

            {type === 'sofa' && (
                <group>
                    {/* Base */}
                    <mesh position={[0, 0.2, 0]}>
                        <boxGeometry args={[2, 0.4, 0.8]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>
                    {/* Backrest */}
                    <mesh position={[0, 0.6, -0.3]}>
                        <boxGeometry args={[2, 0.6, 0.2]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>
                    {/* Armrests */}
                    <mesh position={[-0.9, 0.4, 0]}>
                        <boxGeometry args={[0.2, 0.4, 0.8]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>
                    <mesh position={[0.9, 0.4, 0]}>
                        <boxGeometry args={[0.2, 0.4, 0.8]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>
                </group>
            )}

            {type === 'bar_stool' && (
                <group>
                    {/* Seat */}
                    <mesh position={[0, 0.8, 0]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
                        <meshStandardMaterial color="#8B4513" />
                    </mesh>
                    {/* Leg */}
                    <mesh position={[0, 0.4, 0]}>
                        <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    {/* Base */}
                    <mesh position={[0, 0.02, 0]}>
                        <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                </group>
            )}

            {type === 'spotlight' && (
                <group>
                    {/* Stand */}
                    <mesh position={[0, 0.02, 0]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                    {/* Pole */}
                    <mesh position={[0, 0.75, 0]}>
                        <cylinderGeometry args={[0.02, 0.02, 1.5, 16]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                    {/* Head */}
                    <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
                        <coneGeometry args={[0.1, 0.2, 32]} />
                        <meshStandardMaterial color="#333" emissive="#555" />
                    </mesh>
                    <pointLight position={[0, 1.4, 0.2]} intensity={2} distance={5} color="#fff" />
                </group>
            )}

            {type === 'floor_lamp' && (
                <group>
                    {/* Base */}
                    <mesh position={[0, 0.02, 0]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
                        <meshStandardMaterial color="#d4af37" />
                    </mesh>
                    {/* Pole */}
                    <mesh position={[0, 0.9, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 1.8, 16]} />
                        <meshStandardMaterial color="#d4af37" />
                    </mesh>
                    {/* Shade */}
                    <mesh position={[0, 1.6, 0]}>
                        <cylinderGeometry args={[0.2, 0.3, 0.4, 32, 1, true]} />
                        <meshStandardMaterial color="#fff" side={THREE.DoubleSide} transparent opacity={0.9} />
                    </mesh>
                    <pointLight position={[0, 1.6, 0]} intensity={1.5} distance={8} color="#ffaa00" />
                </group>
            )}

            {type === 'plant' && (
                <group>
                    {/* Pot */}
                    <mesh position={[0, 0.2, 0]}>
                        <cylinderGeometry args={[0.2, 0.15, 0.4, 16]} />
                        <meshStandardMaterial color="#d2691e" />
                    </mesh>
                    {/* Plant */}
                    <mesh position={[0, 0.6, 0]}>
                        <dodecahedronGeometry args={[0.3, 0]} />
                        <meshStandardMaterial color="#228b22" />
                    </mesh>
                </group>
            )}

            {type === 'rug' && (
                <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2, 3]} />
                    <meshStandardMaterial color="#888" map={null} /> {/* Could add texture later */}
                </mesh>
            )}

            {type === 'wall_art' && (
                <group position={[0, 1.5, 0]}> {/* Default height, user drags to wall */}
                    <mesh>
                        <boxGeometry args={[1, 1.5, 0.05]} />
                        <meshStandardMaterial color="#fff" />
                    </mesh>
                    {/* Frame */}
                    <mesh position={[0, 0, -0.01]}>
                        <boxGeometry args={[1.1, 1.6, 0.04]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                </group>
            )}

            {(type === 'panel' || type === 'glass_panel' || type === 'door') && (
                <group>
                    {/* Frame */}
                    <mesh position={[0, 1.25, 0]}>
                        <boxGeometry args={[1, 2.5, 0.05]} />
                        <meshStandardMaterial color="#ddd" wireframe={type === 'glass_panel'} transparent={type === 'glass_panel'} opacity={type === 'glass_panel' ? 0.3 : 1} />
                    </mesh>
                    {/* Glass/Door specific details could go here */}
                </group>
            )}
        </group>
    );

    return (
        <PivotControls
            visible={isSelected}
            scale={1}
            depthTest={false}
            fixed={true}
            lineWidth={2}
            anchor={[0, 0, 0]}
            onDragEnd={handleDragEnd}
            disableAxes={false}
            disableSliders={false}
            disableRotations={true} // Only allow translation for now
            autoTransform={true}
        >
            {content}
        </PivotControls>
    );
}
