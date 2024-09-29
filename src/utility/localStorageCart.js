export const setCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || []
}

export const clearCart = () => {
  localStorage.removeItem('cart')
}
