import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { update as updateDom } from './dom'
import demo from '../demo'

interface EditorState {
  code: string
  sync: boolean
}

const initialState = {
  code: demo,
  updated: Date.now(),
  sync: true,
} as EditorState

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    edit: (state, action) => {
      state.code = action.payload.replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        '',
      )
      state.sync = false
    },
    update: (state, action) => {
      state.code = action.payload.replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        '',
      )
      state.sync = true
    },
  },
  extraReducers: builder => {
    builder.addCase(updateDom, (state, action) => {
      state.sync = true
    })
  },
})

export const { edit, update } = editorSlice.actions

export const selectEditor = (state: RootState) => state.editor

export default editorSlice.reducer
