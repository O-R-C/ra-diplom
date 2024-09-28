import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Row from '../../ui/Row'
import Card from '../../ui/Card'
import Section from '../../ui/Section'
import Wrapper from '../../ui/Wrapper'
import PreLoader from '../../ui/PreLoader'
import Categories from '../categories/Categories'
import { fetchCatalog, fetchMoreCatalog } from './catalogSlice'

export default function Catalog() {
  const dispatch = useDispatch()
  const { catalog, isLoading, error, isAll } = useSelector((state) => state.catalog)
  const [searchParams] = useSearchParams()
  const queryId = searchParams.get('category') || 'all'

  const handleClick = () => {
    const offset = catalog.length
    dispatch(fetchMoreCatalog({ offset, categoryId: queryId }))
  }

  useEffect(() => {
    dispatch(fetchCatalog({ categoryId: queryId }))
  }, [dispatch, queryId])

  if (error) return <p>{error}</p>
  if (isLoading && !catalog.length) return <PreLoader />
  if (!catalog.length) return null

  return (
    <Section
      className='catalog'
      title='Каталог'
      type='h2'
    >
      <Categories />
      <Row>
        {catalog.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </Row>
      <Wrapper className='text-center'>
        {isLoading ? (
          <PreLoader />
        ) : isAll ? null : (
          <button
            className='btn btn-outline-primary'
            onClick={handleClick}
          >
            Загрузить ещё
          </button>
        )}
      </Wrapper>
    </Section>
  )
}
