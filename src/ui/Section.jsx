import PropTypes from 'prop-types'

export default function Section({ children, className, title, type }) {
  return (
    <section className={className ? className : ''}>
      {title && type === 'h5' && <h5>{title}</h5>}
      {title && type === 'h2' && <h2 className='text-center'>{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
}
