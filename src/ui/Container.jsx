import PropTypes from 'prop-types'

export default function Container({ children }) {
  return (
    <div
      className='container'
      style={{ minHeight: '100dvh', display: 'grid', gridTemplateRows: 'auto auto 1fr auto' }}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}
