"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import Booth from './Booth';
import FurnitureItem from './FurnitureItem';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Suspense, useState } from 'react';

export default function Scene() {
    const furniture = useConfiguratorStore((state) => state.furniture);
    const viewMode = useConfiguratorStore((state) => state.viewMode);
    const placementMode = useConfiguratorStore((state) => state.placementMode);
    const addFurniture = useConfiguratorStore((state) => state.addFurniture);
    const [ghostPosition, setGhostPosition] = useState<[number, number, number] | null>(null);

    const handlePointerMove = (e: any) => {
        if (placementMode) {
            // Project point to floor (y=0)
            setGhostPosition([e.point.x, 0, e.point.z]);
        }
    };

    const handleClick = () => {
        if (placementMode && ghostPosition) {
            addFurniture(placementMode, ghostPosition);
            setGhostPosition(null);
        }
    };

    return (
        <div className="w-full h-full">
            <Canvas>
                <Suspense fallback={null}>
                    {viewMode === '3D' ? (
                        <PerspectiveCamera makeDefault position={[0, 5, 8]} fov={50} />
                    ) : (
                        <OrthographicCamera makeDefault position={[0, 10, 0]} zoom={50} />
                    )}

                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />

                    <group
                        onPointerMove={handlePointerMove}
                        onClick={handleClick}
                    >
                        <Booth />
                        {/* Invisible floor plane for raycasting if Booth floor isn't enough */}
                        <mesh rotation={[-Math.PI / 2, 0, 0]} visible={false}>
                            <planeGeometry args={[100, 100]} />
                        </mesh>
                    </group>

                    {furniture.map((item) => (
                        <FurnitureItem
                            key={item.id}
                            type={item.type}
                            position={item.position}
                            rotation={item.rotation}
                        />
                    ))}

                    {/* Ghost Item */}
                    {placementMode && ghostPosition && (
                        <group position={ghostPosition}>
                            <FurnitureItem type={placementMode} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                            <mesh position={[0, 0.1, 0]}>
                                <boxGeometry args={[1, 1, 1]} />
                                <meshBasicMaterial color="blue" wireframe opacity={0.5} transparent />
                            </mesh>
                        </group>
                    )}

                    <OrbitControls
                        makeDefault
                        enableRotate={viewMode === '3D'}
                        enableZoom={true}
                        maxPolarAngle={viewMode === '3D' ? Math.PI / 2.1 : 0}
                    />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
