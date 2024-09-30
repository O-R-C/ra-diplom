import Col from '../../ui/Col'
import banner from '../../images/banner.jpg'

export default function Banner() {
  return (
    <Col>
      <div className='banner'>
        <img
          src={banner}
          className='img-fluid'
          alt='К весне готовы!'
        />
        <h2 className='banner-header'>К весне готовы!</h2>
      </div>
    </Col>
  )
}
