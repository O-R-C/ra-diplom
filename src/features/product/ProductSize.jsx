import PropTypes from 'prop-types'

export default function ProductSize({ size, setSelectedSize, selectedSize }) {
  const handleSelectSize = (e) => {
    setSelectedSize(e.target.textContent)
  }

  return (
    <span
      className={`catalog-item-size ${size === selectedSize ? 'selected' : ''}`}
      key={size.size}
      onClick={handleSelectSize}
      style={{ cursor: 'pointer' }}
    >
      {size}
    </span>
  )
}

ProductSize.propTypes = {
  size: PropTypes.string,
  selectedSize: PropTypes.string,
  setSelectedSize: PropTypes.func,
}
