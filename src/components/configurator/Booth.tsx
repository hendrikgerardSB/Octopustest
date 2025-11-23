"use client";

import { useConfiguratorStore } from '@/store/configuratorStore';

export default function Booth() {
    const wallColor = useConfiguratorStore((state) => state.wallColor);
    const { width, depth } = useConfiguratorStore((state) => state.boothDimensions);

    return (
        <group>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                <planeGeometry args={[width + 2, depth + 2]} />
                <meshStandardMaterial color="#e5e7eb" />
            </mesh>

            {/* Booth Floor Area (Darker to distinguish) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry args={[width, depth]} />
                <meshStandardMaterial color="#d1d5db" />
            </mesh>

            {/* Back Wall */}
            <mesh position={[0, 1.5, -depth / 2]}>
                <boxGeometry args={[width, 3, 0.1]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-width / 2, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[depth, 3, 0.1]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Right Wall */}
            <mesh position={[width / 2, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[depth, 3, 0.1]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>
        </group>
    );
}
