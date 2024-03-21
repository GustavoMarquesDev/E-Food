import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // O colchete é usado para acessar a propriedade dentro do objeto
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
