import Catalog from '../features/catalog/Catalog'
import TopSales from '../features/top-sales/TopSales'
import Col from '../ui/Col'

export default function HomePage() {
  return (
    <Col>
      <TopSales />
      <Catalog />
    </Col>
  )
}
