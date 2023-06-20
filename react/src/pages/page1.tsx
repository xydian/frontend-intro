import { Canvas } from '@react-three/fiber'
import React, { ReactElement } from 'react'
import { Box, OrbitControls } from '@react-three/drei'
import { Euler } from 'three'

const Page1 = (): ReactElement => {
  return (
    <>
      <Canvas
        style={{ height: '100vH' }}
        camera={{ position: [-2, -3, 3], up: [0, 0, 1] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <gridHelper
          args={[20, 20, 0xff0000, 'teal']}
          rotation={new Euler(1.5708)}
        />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Page1
