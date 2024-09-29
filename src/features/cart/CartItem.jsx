import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utility/formatCurrency'
import { useDispatch } from 'react-redux'
import { removeItem } from './cartSlice'

export default function CartItem({ item: { id, title, amount, size, price, total } }) {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <>
      <td>
        <Link to={`/catalog/${id}`}>{title}</Link>
      </td>
      <td>{size}</td>
      <td>{amount}</td>
      <td>{formatCurrency(price)} руб.</td>
      <td>{formatCurrency(total)} руб.</td>
      <td>
        <button
          className='btn btn-outline-danger btn-sm'
          onClick={handleRemove}
        >
          Удалить
        </button>
      </td>
    </>
  )
}

CartItem.propTypes = {
  item: PropTypes.object,
}
