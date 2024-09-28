export const getTopSales = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/top-sales')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
