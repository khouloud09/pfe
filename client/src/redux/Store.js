import { configureStore } from '@reduxjs/toolkit'
import AnnonceSlice from './Slices/AnnonceSlice'
import UserSlice from './Slices/UserSlice'

const store = configureStore({
  reducer: {
    user: UserSlice,
     annonce :AnnonceSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store