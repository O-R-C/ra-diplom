import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../../services/backendApi'

const initialState = {
  categories: [{ id: 'all', title: 'Все' }],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = [{ id: 'all', title: 'Все' }, ...action.payload]
    })
  },
})

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const data = await getCategories()
  return data
})

export default categoriesSlice.reducer
