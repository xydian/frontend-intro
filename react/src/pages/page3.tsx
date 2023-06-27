import { Line, MapControls, OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactElement } from 'react'
import { Euler } from 'three'
import { Form, TextField } from '../components'
import { number, object } from 'yup'
import { Button, Divider, Stack } from '@mui/material'
import usePage3Store from './page3/store'

const Page3 = (): ReactElement => {
  const walls_floorplan = usePage3Store((state) => state.walls)

  const schema = object({
    x_start: number().required().min(0).max(10).default(0),
    y_start: number().required().min(0).max(10).default(0),
  })

  const onClickDeleteWall = () => {
    alert('TODO: delete')
  }

  return (
    <>
      <Form onSubmit={() => alert('submitted')} validationSchema={schema}>
        <Stack direction="column" spacing={2}>
          <TextField name="x_start" placeholder="X Start" sx={{ width: 300 }} />

          <TextField name="y_start" placeholder="Y Start" sx={{ width: 300 }} />

          <Button type="submit" sx={{ width: 200 }}>
            Wand hinzufügen
          </Button>
        </Stack>
      </Form>

      <Divider />

      <Button sx={{ width: 200 }} onClick={onClickDeleteWall}>
        Ausgewählte Wand löschen
      </Button>

      <Divider />

      <Canvas style={{ height: '100vH' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
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

        {/* SCENE CONTENT */}

        {walls_floorplan.map((wall, index) => (
          <Line
            points={[wall.start, wall.end]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
            color="black" // Default
            lineWidth={4} // In pixels (default)
            segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
            dashed={false} // Default
          />
        ))}
      </Canvas>
    </>
  )
}

export default Page3
