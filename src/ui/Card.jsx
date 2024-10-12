import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({ item: { images, title, price, id } }) {
  return (
    <div className='col-4'>
      <div className='card h-100'>
        <img
          src={images[0]}
          className='card-img-top img-fluid'
          style={{ height: '250px', objectFit: 'contain' }}
          alt={title}
        />
        <div className='card-body d-flex flex-column justify-content-end'>
          <p className='card-text'>{title}</p>
          <p className='card-text'>{price} руб.</p>
          <Link
            to={`/catalog/${id}`}
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
