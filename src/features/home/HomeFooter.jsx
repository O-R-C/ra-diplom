import Col from '../../ui/Col'
import Footer from '../../ui/Footer'
import Row from '../../ui/Row'
import FooterColContacts from './FooterColContacts'
import FooterColInfo from './FooterColInfo'
import FooterColPays from './FooterColPays'

export default function HomeFooter() {
  return (
    <Footer className='footer bg-light'>
      <Row>
        <Col>
          <FooterColInfo />
        </Col>
        <Col>
          <FooterColPays />
        </Col>
        <Col className='text-right'>
          <FooterColContacts />
        </Col>
      </Row>
    </Footer>
  )
}
