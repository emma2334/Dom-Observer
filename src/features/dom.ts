import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import demo from '../demo'

interface DomState {
  code: string
}

const initialState = {
  code: demo,
} as DomState

export const domSlice = createSlice({
  name: 'dom',
  initialState,
  reducers: {
    update: (state, action) => {
      state.code = action.payload
    },
  },
})

export const { update } = domSlice.actions

export const selectDom = (state: RootState) => state.dom

export default domSlice.reducer
