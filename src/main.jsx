import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import store from './store'

import AppLayout from './pages/AppLayout'
import ErrorPage from './pages/ErrorPage'
import ContactsPage from './pages/ContactsPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Product from './features/product/Product'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/catalog',
        element: <CatalogPage />,
      },
      {
        path: '/catalog/:id',
        element: <ProductPage />,
        loader: Product.loader,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster toastOptions={{ duration: 4000 }} />
    </Provider>
  </StrictMode>
)
