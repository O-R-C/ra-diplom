import Row from '../../ui/Row'
import Col from '../../ui/Col'
import Header from '../../ui/Header'
import NavBar from '../../ui/NavBar'
import BrandLogo from './BrandLogo'
import NavList from '../../ui/NavList'
import { navLinks as navLinksData } from '../../data/navLinks'

export default function HomeHeader() {
  return (
    <Header className='container'>
      <Row>
        <Col>
          <NavBar className='navbar navbar-expand-sm navbar-light bg-light'>
            <BrandLogo />
            <div
              className='collapse navbar-collapse'
              id='navbarMain'
            >
              <NavList
                className='navbar-nav mr-auto'
                items={navLinksData}
              />
              <div>
                <div className='header-controls-pics'>
                  <div
                    data-id='search-expander'
                    className='header-controls-pic header-controls-search'
                  ></div>
                  {/* Do programmatic navigation on click to /cart.html */}
                  <div className='header-controls-pic header-controls-cart'>
                    <div className='header-controls-cart-full'>1</div>
                    <div className='header-controls-cart-menu'></div>
                  </div>
                </div>
                <form
                  data-id='search-form'
                  className='header-controls-search-form form-inline invisible'
                >
                  <input
                    className='form-control'
                    placeholder='Поиск'
                    type='search'
                  />
                </form>
              </div>
            </div>
          </NavBar>
        </Col>
      </Row>
    </Header>
  )
}
