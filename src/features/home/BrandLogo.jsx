import { Link } from 'react-router-dom'
import headerLogo from '../../images/header-logo.png'

export default function BrandLogo() {
  return (
    <Link
      className='navbar-brand'
      to='/'
    >
      <img
        src={headerLogo}
        className='header-logo img-fluid'
        alt='Bosa Noga'
      />
    </Link>
  )
}
