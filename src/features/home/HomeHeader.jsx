import Row from '../../ui/Row'
import Col from '../../ui/Col'
import Header from '../../ui/Header'
import NavBar from '../../ui/NavBar'
import BrandLogo from './BrandLogo'
import NavList from '../../ui/NavList'
import NavBarMain from '../../ui/NavBarMain'
import Wrapper from '../../ui/Wrapper'
import { navLinks as navLinksData } from '../../data/navLinks'
import HomeCartIcon from './HomeCartIcon'
import HomeSearchForm from './HomeSearchForm'

export default function HomeHeader() {
  return (
    <Header>
      <Row>
        <Col>
          <NavBar className='navbar navbar-expand-sm navbar-light bg-light'>
            <BrandLogo />
            <NavBarMain className='collapse navbar-collapse'>
              <NavList
                className='navbar-nav mr-auto'
                items={navLinksData}
              />
              <Wrapper className='header-controls-pics'>
                <HomeSearchForm />
                <HomeCartIcon className='header-controls-pic header-controls-cart' />
              </Wrapper>
            </NavBarMain>
          </NavBar>
        </Col>
      </Row>
    </Header>
  )
}
