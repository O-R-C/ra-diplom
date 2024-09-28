import PropTypes from 'prop-types'
import Row from './Row'

export default function Footer({ children, className }) {
  return (
    <footer className={className}>
      <Row>{children}</Row>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
