import { Canvas } from '@react-three/fiber'
import React, { ReactElement, useEffect } from 'react'
import {
  Box,
  MapControls,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import { Euler, Object3D, Vector3 } from 'three'

const Page1 = (): ReactElement => {
  useEffect(() => {
    // ModuGen uses the z-axis as the default up direction
    Object3D.DEFAULT_UP = new Vector3(0, 0, 1)
  }, [])

  // return (
  //   <>
  //     <Canvas
  //       style={{ height: '100vH' }}
  //       camera={{ position: [-2, -3, 3], up: [0, 0, 1] }}
  //     >
  //       <ambientLight />
  //       <pointLight position={[10, 10, 10]} />
  //       <Box position={[-1.2, 0, 0]} />
  //       <Box position={[1.2, 0, 0]} />
  //       <gridHelper
  //         args={[20, 20, 0xff0000, 'teal']}
  //         rotation={new Euler(1.5708)}
  //       />
  //       <OrbitControls />
  //     </Canvas>
  //   </>
  // )

  return (
    <>
      <Canvas
        style={{ height: '100vH' }}
        // camera={{ position: [-2, -3, 3], up: [0, 0, 1] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <gridHelper
          args={[20, 20, 0xff0000, 'teal']}
          rotation={new Euler(1.5708)}
        />

        <OrthographicCamera
          makeDefault
          position={[0, 0, 3]}
          // zoom={orthoZoom || orthoCameraZoom}
          zoom={50}
          up={[0, 0, 1]}
        />

        <MapControls
          makeDefault
          // ref={mapControlsRef}
          // enabled={!isLocked}
          enableRotate={false}
          autoRotate={false}
          // target={rotationTarget.v}
          target={[0, 0, 0]}
          dampingFactor={1}
          // this is needed as we not only want to move in a birds-eye-view but
          // also want to e.g. jump into the local view of a wall (together with
          // position and target)
          // test
          screenSpacePanning={true}
        />
      </Canvas>
    </>
  )
}

export default Page1
