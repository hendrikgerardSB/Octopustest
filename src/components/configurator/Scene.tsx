'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid } from '@react-three/drei';
import { Booth } from './Booth';
import { Suspense } from 'react';

export default function Scene() {
    return (
        <div className="w-full h-full bg-gray-50">
            <Canvas
                shadows
                camera={{ position: [5, 5, 5], fov: 50 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[10, 10, 5]}
                        intensity={1}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />

                    <group position={[0, -0.5, 0]}>
                        <Booth />
                        <Grid
                            infiniteGrid
                            fadeDistance={30}
                            sectionColor="#4a4a4a"
                            cellColor="#b0b0b0"
                        />
                    </group>

                    <OrbitControls
                        makeDefault
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2.1}
                        minDistance={2}
                        maxDistance={20}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
