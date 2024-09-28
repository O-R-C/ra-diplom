import PropTypes from 'prop-types'

export default function Row({ children }) {
  return <div className='row w-100 m-auto'>{children}</div>
}

Row.propTypes = {
  children: PropTypes.node,
}
