import PropTypes from 'prop-types'

export default function HomeCartIcon({ className }) {
  /* Do programmatic navigation on click to /cart.html */

  return (
    <div className={className}>
      <div className='header-controls-cart-full'>1</div>
      <div className='header-controls-cart-menu'></div>
    </div>
  )
}

HomeCartIcon.propTypes = {
  className: PropTypes.string,
}
