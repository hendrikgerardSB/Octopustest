"use client";

import React from 'react';

interface FurnitureItemProps {
    type: 'table' | 'chair';
    position: [number, number, number];
    rotation: [number, number, number];
}

export default function FurnitureItem({ type, position, rotation }: FurnitureItemProps) {
    if (type === 'table') {
        return (
            <group position={position} rotation={rotation}>
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
        );
    }

    if (type === 'chair') {
        return (
            <group position={position} rotation={rotation}>
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
        );
    }

    return null;
}
