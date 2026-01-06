'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)

  // Generate random positions for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  // Rotate particles slowly
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0ea5e9"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
      </Canvas>
    </div>
  )
}
