import { useSelector } from 'react-redux'
import Col from '../../ui/Col'
import Section from '../../ui/Section'
import { getCart } from './cartSlice'
import CartItem from './CartItem'
import { formatCurrency } from '../../utility/formatCurrency'

export default function Cart() {
  const cart = useSelector(getCart)
  console.log('🚀 ~ cart:', cart)

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
      <Section
        className='order'
        title='Оформить заказ'
        type='h2'
      >
        <div
          className='card'
          style={{ maxWidth: '30rem', margin: '0 auto' }}
        >
          <form className='card-body'>
            <div className='form-group'>
              <label htmlFor='phone'>Телефон</label>
              <input
                className='form-control'
                id='phone'
                placeholder='Ваш телефон'
                type='tel'
                autoComplete='on'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Адрес доставки</label>
              <input
                className='form-control'
                id='address'
                placeholder='Адрес доставки'
                type='text'
                autoComplete='on'
                required
              />
            </div>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='agreement'
                required
              />
              <label
                className='form-check-label'
                htmlFor='agreement'
              >
                Согласен с правилами доставки
              </label>
            </div>
            <button
              type='submit'
              className='btn btn-outline-secondary'
            >
              Оформить
            </button>
          </form>
        </div>
      </Section>
    </Col>
  )
}
