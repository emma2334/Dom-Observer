import { configureStore } from '@reduxjs/toolkit'
import observerSlice from '../features/editor'

export const store = configureStore({
  reducer: {
    editor: observerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
