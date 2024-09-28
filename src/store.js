import { configureStore } from '@reduxjs/toolkit'
import topSalesSlice from './features/top-sales/topSalesSlice'

const store = configureStore({
  reducer: {
    topSales: topSalesSlice,
  },
})

export default store
