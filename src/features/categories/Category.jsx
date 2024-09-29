import PropTypes from 'prop-types'
import { Link, useSearchParams } from 'react-router-dom'

export default function Category({ category: { title, id }, active }) {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  return (
    <li className='nav-item'>
      <Link
        to={`?category=${id}${q ? `&q=${q}` : ''}`}
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
