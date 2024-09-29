import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItems } from '../../services/backendApi'

const initialState = {
  catalog: [],
  isAll: false,
  isLoading: false,
  error: null,
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.catalog = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true
        state.catalog = []
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false
        state.catalog = action.payload
        state.isAll = action.payload.length < 6 ? true : false
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

    builder
      .addCase(fetchMoreCatalog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMoreCatalog.fulfilled, (state, action) => {
        state.isLoading = false
        state.catalog = [...state.catalog, ...action.payload]
        state.isAll = action.payload.length < 6 ? true : false
      })
      .addCase(fetchMoreCatalog.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async ({ q = '', categoryId = 'all', offset = 0 }) => {
    const data = await getItems(q, categoryId, offset)
    return data
  }
)

export const fetchMoreCatalog = createAsyncThunk(
  'catalog/fetchMoreCatalog',
  async ({ q = '', categoryId = 'all', offset = 0 }) => {
    const data = await getItems(q, categoryId, offset)
    return data
  }
)

export const { setCatalog } = catalogSlice.actions
export default catalogSlice.reducer
