import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../cart/cartSlice'
import headerControlsSprite from '../../images/header-controls-sprite.png'

export default function HomeCartIcon({ className }) {
  const navigate = useNavigate()
  const cart = useSelector(getCart)

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${headerControlsSprite})` }}
      onClick={handleClick}
    >
      {cart.length > 0 && <div className='header-controls-cart-full'>{cart.length}</div>}
      <div className='header-controls-cart-menu'></div>
    </div>
  )
}

HomeCartIcon.propTypes = {
  className: PropTypes.string,
}
