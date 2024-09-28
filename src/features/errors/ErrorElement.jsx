import { Link, useRouteError } from 'react-router-dom'

export default function ErrorElement() {
  const error = useRouteError()

  return (
    <div
      id='error-page'
      className='container text-center pt-5'
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <p>
        <Link
          to='/'
          className='nav-link active'
        >
          Back to home
        </Link>
      </p>
    </div>
  )
}
