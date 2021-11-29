import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import demo from '../demo'

interface DomState {
  code: string
  updated: number
  converted: number
}

const initialState = {
  code: demo,
  updated: Date.now(),
} as DomState

export const domSlice = createSlice({
  name: 'displayer',
  initialState,
  reducers: {
    update: (state, action) => {
      state.code = action.payload
      state.updated = Date.now()
    },
  },
})

export const { update } = domSlice.actions

export const selectDom = (state: RootState): DomState => state.dom

export default domSlice.reducer
