import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopSales } from '../../services/backendApi'

const initialState = {
  topSales: [],
  isLoading: false,
  error: null,
}

const topSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    setTopSales(state, action) {
      state.topSales = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSales.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchTopSales.fulfilled, (state, action) => {
        state.isLoading = false
        state.topSales = action.payload
      })
      .addCase(fetchTopSales.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const fetchTopSales = createAsyncThunk('topSales/fetchTopSales', async () => {
  const topSales = await getTopSales()
  return topSales
})

export const topSales = (state) => state.topSales

export const { setTopSales } = topSalesSlice.actions
export default topSalesSlice.reducer
