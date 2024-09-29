import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload
    },
    clearCart(state) {
      state.cart = []
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    addItem(state, action) {
      const item = state.cart.find((i) => i.id === action.payload.id && i.size === action.payload.size)
      if (item) {
        item.amount += action.payload.amount
      } else {
        state.cart.push(action.payload)
      }
    },
  },
})

export const getCart = (state) => state.cart.cart

export const { setCart, clearCart, removeItem, addItem } = cartSlice.actions
export default cartSlice.reducer
