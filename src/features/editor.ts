import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import demo from '../demo'

interface EditorState {
  code: string
  updated: number
}

const initialState = {
  code: demo,
  updated: Date.now(),
} as EditorState

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    update: (state, action) => {
      state.code = action.payload
      state.updated = Date.now()
    },
  },
})

export const { update } = editorSlice.actions

export const selectEditor = (state: RootState): EditorState => state.editor

export default editorSlice.reducer
