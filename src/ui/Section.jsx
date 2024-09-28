import PropTypes from 'prop-types'

export default function Section({ children, className, title }) {
  return (
    <section className={className ? className : ''}>
      {title && <h5>{title}</h5>}
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
}
