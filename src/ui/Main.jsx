import PropTypes from 'prop-types'
import Row from './Row'

export default function Main({ children }) {
  return (
    <main>
      <Row>{children}</Row>
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}
