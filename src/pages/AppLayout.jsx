import { Outlet } from 'react-router-dom'
import HomeHeader from '../features/home/HomeHeader'
import Container from '../ui/Container'
import HomeFooter from '../features/home/HomeFooter'
import Banner from '../features/home/Banner'
import Main from '../ui/Main'

export default function AppLayout() {
  return (
    <Container className='container'>
      <HomeHeader />
      <Banner />
      <Main>
        <Outlet />
      </Main>
      <HomeFooter />
    </Container>
  )
}
