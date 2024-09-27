import Banner from '../features/home/Banner'
import HomeHeader from '../features/home/HomeHeader'
import Container from '../ui/Container'

export default function AppLayout() {
  return (
    <Container className='container'>
      <HomeHeader />
      <Banner />
    </Container>
  )
}
