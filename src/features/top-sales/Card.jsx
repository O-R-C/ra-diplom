import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({ item: { images, title, price } }) {
  return (
    <div className='col-4'>
      <div className='card'>
        <img
          src={images[0]}
          className='card-img-top img-fluid'
          alt={title}
        />
        <div className='card-body'>
          <p className='card-text'>{title}</p>
          <p className='card-text'>{price}</p>
          <Link
            to='/products/1'
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
