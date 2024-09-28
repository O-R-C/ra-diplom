import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Category({ category: { title, id }, active }) {
  return (
    <li className='nav-item'>
      <Link
        to={`?category=${id}`}
        className={`nav-link ${active ? 'active' : ''}`}
      >
        {title}
      </Link>
    </li>
  )
}

Category.propTypes = {
  category: PropTypes.object,
  active: PropTypes.bool,
}
