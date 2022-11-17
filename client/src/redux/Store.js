import { configureStore } from '@reduxjs/toolkit'
import AnnonceSlice from './Slices/AnnonceSlice'
import UserSlice from './Slices/UserSlice'
import FavorisSlice from './Slices/ListFavoris'

const store = configureStore({
  reducer: {
    user: UserSlice,
     annonce :AnnonceSlice,
     listFavoris :FavorisSlice 
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store