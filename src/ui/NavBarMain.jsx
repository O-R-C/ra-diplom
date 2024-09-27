import PropTypes from 'prop-types'

export default function NavBarMain({ children, className }) {
  return (
    <div
      className={className}
      id='navbarMain'
    >
      {children}
    </div>
  )
}

NavBarMain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
