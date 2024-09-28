import { configureStore } from '@reduxjs/toolkit'
import topSalesSlice from './features/top-sales/topSalesSlice'
import catalogSlice from './features/catalog/catalogSlice'
import categoriesSlice from './features/categories/categoriesSlice'

const store = configureStore({
  reducer: {
    topSales: topSalesSlice,
    catalog: catalogSlice,
    categories: categoriesSlice,
  },
})

export default store
