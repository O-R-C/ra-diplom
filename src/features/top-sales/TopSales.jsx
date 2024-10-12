import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Card from '../../ui/Card'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import PreLoader from '../../ui/PreLoader'
import { fetchTopSales } from './topSalesSlice'

export default function TopSales() {
  const dispatch = useDispatch()
  const { topSales, isLoading } = useSelector((state) => state.topSales)

  useEffect(() => {
    dispatch(fetchTopSales())
  }, [dispatch])

  if (isLoading)
    return (
      <Section
        title='Хиты продаж!'
        type='h2'
      >
        <PreLoader />
      </Section>
    )

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
