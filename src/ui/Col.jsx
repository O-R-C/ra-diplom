import PropTypes from 'prop-types'

export default function Col({ children }) {
  return <div className='col'>{children}</div>
}

Col.propTypes = {
  children: PropTypes.node,
}
