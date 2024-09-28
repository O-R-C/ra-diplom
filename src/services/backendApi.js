export const getTopSales = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/top-sales')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getCategories = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/categories')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getItems = async (categoryId, offset) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL +
        '/items' +
        `?offset=${offset}` +
        (categoryId !== 'all' ? `&categoryId=${categoryId}` : '')
    )
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
