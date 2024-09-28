import { useDispatch, useSelector } from 'react-redux'
import Section from '../../ui/Section'
import { useEffect } from 'react'
import { fetchTopSales } from './topSalesSlice'

export default function TopSales() {
  const dispatch = useDispatch()
  const { topSales, isLoading, error } = useSelector((state) => state.topSales)
  console.log('🚀 ~ topSales:', topSales, isLoading, error)

  useEffect(() => {
    dispatch(fetchTopSales())
  }, [dispatch])

  return (
    <Section
      title='Хиты продаж!'
      type='h2'
    ></Section>
  )
}
