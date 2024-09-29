import { useSearchParams } from 'react-router-dom'

export default function CatalogSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target[0].value.toLowerCase()
    const categoryId = searchParams.get('category') || 'all'
    setSearchParams(`?category=${categoryId}` + (searchValue ? `&q=${searchValue}` : ''))
  }

  return (
    <form
      className='catalog-search-form form-inline'
      onSubmit={handleSubmit}
    >
      <input
        className='form-control'
        placeholder='Поиск'
        name='q'
        type='search'
        defaultValue={searchParams.get('q') || ''}
      />
    </form>
  )
}
