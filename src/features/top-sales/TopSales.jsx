import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Card from '../../ui/Card'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import PreLoader from '../../ui/PreLoader'
import { fetchTopSales } from './topSalesSlice'

export default function TopSales() {
  const dispatch = useDispatch()
  const { topSales, isLoading, error } = useSelector((state) => state.topSales)

  useEffect(() => {
    dispatch(fetchTopSales())
  }, [dispatch])

  if (error) return <p>{error}</p>

  if (isLoading) return <PreLoader />

  if (!topSales.length) return null

  return (
    <Section
      title='Хиты продаж!'
      type='h2'
    >
      <Row>
        {topSales.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </Row>
    </Section>
  )
}
