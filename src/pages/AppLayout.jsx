import { Outlet } from 'react-router-dom'
import HomeHeader from '../features/home/HomeHeader'
import Container from '../ui/Container'
import HomeFooter from '../features/home/HomeFooter'
import Banner from '../features/home/Banner'

export default function AppLayout() {
  return (
    <Container className='container'>
      <HomeHeader />
      <Banner />
      <main>
        <Outlet />
      </main>
      <HomeFooter />
    </Container>
  )
}
