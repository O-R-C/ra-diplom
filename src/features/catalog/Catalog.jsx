import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Row from '../../ui/Row'
import Card from '../../ui/Card'
import Section from '../../ui/Section'
import Wrapper from '../../ui/Wrapper'
import PreLoader from '../../ui/PreLoader'
import Categories from '../categories/Categories'
import { fetchCatalog, fetchMoreCatalog } from './catalogSlice'
import CatalogSearchForm from './CatalogSearchForm'

export default function Catalog() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { catalog, isLoading, error, isAll } = useSelector((state) => state.catalog)
  const [searchParams] = useSearchParams()
  const queryId = searchParams.get('category') || 'all'
  const q = searchParams.get('q') || ''

  const handleClick = () => {
    const offset = catalog.length
    dispatch(fetchMoreCatalog({ q, offset, categoryId: queryId }))
  }

  useEffect(() => {
    dispatch(fetchCatalog({ q, categoryId: queryId }))
  }, [dispatch, queryId, q])

  if (error) return <p>{error}</p>
  if (isLoading && !catalog.length) return <PreLoader />
  if (!catalog.length && !q) return null

  return (
    <Section
      className='catalog'
      title='Каталог'
      type='h2'
    >
      {location.pathname === '/catalog' && <CatalogSearchForm />}
      <Categories />
      <Row>
        {catalog.length > 0 ? (
          catalog.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <p className='text-center w-100'>Ничего не найдено</p>
        )}
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
