import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getCart as getLocalStorageCart,
  setCart as setLocalStorageCart,
  clearCart as clearLocalStorageCart,
} from '../../utility/localStorageCart'
import { sendOrder } from '../../services/backendApi'

const initialState = {
  cart: getLocalStorageCart(),
  isLoading: false,
  error: null,
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

      setLocalStorageCart(state.cart)
    },
    addItem(state, action) {
      const item = state.cart.find((i) => i.id === action.payload.id && i.size === action.payload.size)
      if (item) {
        item.amount += action.payload.amount
      } else {
        state.cart.push(action.payload)
      }

      setLocalStorageCart(state.cart)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCart.fulfilled, (state) => {
        state.isLoading = false
        state.cart = []
        clearLocalStorageCart()
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const fetchCart = createAsyncThunk('cart/fetchCart', async (data) => {
  const res = await sendOrder(data)
  return res
})

export const getCart = (state) => state.cart.cart

export const { setCart, clearCart, removeItem, addItem } = cartSlice.actions
export default cartSlice.reducer
