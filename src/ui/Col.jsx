import PropTypes from 'prop-types'

export default function Col({ children, className }) {
  return <div className={`${className ? 'col ' + className : 'col'}`}>{children}</div>
}

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
