import PropTypes from 'prop-types'

export default function Wrapper({ children, className }) {
  return <div className={className}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
