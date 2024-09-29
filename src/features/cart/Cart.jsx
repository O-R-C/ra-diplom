import { useDispatch, useSelector } from 'react-redux'
import Col from '../../ui/Col'
import Section from '../../ui/Section'
import { fetchCart, getCart } from './cartSlice'
import CartItem from './CartItem'
import { formatCurrency } from '../../utility/formatCurrency'
import OrderForm from './OrderForm'

export default function Cart() {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  console.log('🚀 ~ cart:', cart)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const order = {
      owner: {
        phone: formData.get('phone'),
        address: formData.get('address'),
      },
      items: cart,
    }

    console.log('🚀 ~ order:', order)

    dispatch(fetchCart(order))
  }

  if (cart.length === 0) {
    return (
      <Col>
        <Section
          className='cart'
          title='Корзина'
          type='h2'
        >
          Корзина пустая
        </Section>
      </Col>
    )
  }

  return (
    <Col>
      <Section
        className='cart'
        title='Корзина'
        type='h2'
      >
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Название</th>
              <th scope='col'>Размер</th>
              <th scope='col'>Кол-во</th>
              <th scope='col'>Стоимость</th>
              <th scope='col'>Итого</th>
              <th scope='col'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td scope='row'>{index + 1}</td>
                <CartItem
                  key={index}
                  item={item}
                />
              </tr>
            ))}
            <tr>
              <td
                colSpan='5'
                className='text-right'
              >
                Общая стоимость
              </td>
              <td>{formatCurrency(cart.reduce((acc, item) => acc + item.total, 0))} руб.</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <OrderForm handleSubmit={handleSubmit} />
    </Col>
  )
}
