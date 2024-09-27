import { Link } from 'react-router-dom'

export default function BrandLogo() {
  return (
    <Link
      className='navbar-brand'
      to='/'
    >
      <img
        src='/img/header-logo.png'
        alt='Bosa Noga'
      />
    </Link>
  )
}
