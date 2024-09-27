import PropTypes from 'prop-types'

export default function Header({ children, className }) {
  return <header className={className}>{children}</header>
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
