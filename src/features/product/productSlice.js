import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProduct } from '../../services/backendApi'

const initialState = {
  product: {},
  isLoading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.product = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.product = action.payload
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id) => {
  const product = await getProduct(id)
  return product
})

export const { clearProduct } = productSlice.actions
export default productSlice.reducer
