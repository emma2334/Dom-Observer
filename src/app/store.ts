import { configureStore } from '@reduxjs/toolkit'
import editorSlice from '../features/editor'
import domSlice from '../features/dom'

export const store = configureStore({
  reducer: {
    editor: editorSlice,
    dom: domSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
