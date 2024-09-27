import PropTypes from 'prop-types'

export default function NavBar({ children, className }) {
  return <nav className={className}>{children}</nav>
}

NavBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
