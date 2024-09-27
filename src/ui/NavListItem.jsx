import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function NavListItem({ to, title }) {
  return (
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        to={to}
      >
        {title}
      </NavLink>
    </li>
  )
}

NavListItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
}
