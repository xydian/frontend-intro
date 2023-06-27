import { create } from 'zustand'
import { walls_floorplan } from '../../data/task2'
import { reject } from 'lodash-es'

interface State {
  walls: Wall[]

  addWall: (wall: Wall) => void
  removeWall: (index: number) => void
}

const usePage3Store = create<State>((set) => ({
  walls: walls_floorplan,

  addWall: (wall: Wall) =>
    set((state: State) => ({ walls: [...state.walls, wall] })),

  removeWall: (index: number) =>
    set((state: State) => ({
      walls: reject(state.walls, (_, i) => i === index),
    })),
}))

export default usePage3Store
