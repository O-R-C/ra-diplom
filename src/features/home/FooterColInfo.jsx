import Section from '../../ui/Section'
import { navLinks } from '../../data/navLinks'
import { Link } from 'react-router-dom'

export default function FooterColInfo() {
  return (
    <Section title='Информация'>
      <ul className='nav flex-column'>
        {navLinks?.map((item) => (
          <li
            key={item.to}
            className='nav-item'
          >
            <Link
              to={item.to}
              className='nav-link'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
