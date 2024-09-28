import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({ item: { images, title, price, id } }) {
  return (
    <div className='col-4'>
      <div className='card'>
        <img
          src={images[0]}
          className='card-img-top img-fluid'
          style={{ height: '250px', objectFit: 'contain' }}
          alt={title}
        />
        <div className='card-body'>
          <p className='card-text'>{title}</p>
          <p className='card-text'>{price}</p>
          <Link
            to={`/products/${id}`}
            className='btn btn-outline-primary'
          >
            Заказать
          </Link>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object,
}
