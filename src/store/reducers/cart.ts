import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  itens: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.itens.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.itens.findIndex(
        (item) => item.id === action.payload
      )
      if (indexToRemove !== -1) {
        state.itens.splice(indexToRemove, 1)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
