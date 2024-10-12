import PropTypes from 'prop-types'
import { Link, useNavigation } from 'react-router-dom'
import PreLoader from './PreLoader'
import { useState } from 'react'

export default function Card({ item: { images, title, price, id } }) {
  const [isSelected, setIsSelected] = useState(false)
  const navigation = useNavigation()

  const handleClick = () => {
    setIsSelected(!isSelected)
  }

  if (isSelected && navigation.state === 'loading')
    return (
      <div className='col-4 d-flex justify-content-center align-items-center'>
        <PreLoader />
      </div>
    )

  return (
    <div className='col-4'>
      <div className='card'>
        <img
          src={images[0]}
          className='card-img-top img-fluid'
          style={{ height: '250px', objectFit: 'contain' }}
          alt={title}
        />
        <div className='card-body d-flex flex-column'>
          <p className='card-text'>{title}</p>
          <p className='card-text mt-auto'>{price}</p>
          {navigation.state === 'idle' && (
            <Link
              to={`/catalog/${id}`}
              className='btn btn-outline-primary'
              onClick={handleClick}
            >
              Заказать
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object,
}
