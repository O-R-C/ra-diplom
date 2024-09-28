import PropTypes from 'prop-types'
import NavListItem from './NavListItem'

export default function NavList({ className, items = [] }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <NavListItem
          key={item.to}
          {...item}
        />
      ))}
    </ul>
  )
}

NavList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}
