import Col from '../../ui/Col'

export default function Banner() {
  return (
    <Col>
      <div className='banner'>
        <img
          src='/img/banner.jpg'
          className='img-fluid'
          alt='К весне готовы!'
        />
        <h2 className='banner-header'>К весне готовы!</h2>
      </div>
    </Col>
  )
}
