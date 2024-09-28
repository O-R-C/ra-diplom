import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from './categoriesSlice'
import { useEffect } from 'react'
import Category from './Category'
import { useSearchParams } from 'react-router-dom'

export default function Categories() {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const { categories } = useSelector((state) => state.categories)

  const queryId = searchParams.get('category') || 'all'

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (categories.length <= 1) return null

  return (
    <ul className='catalog-categories nav justify-content-center'>
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          active={queryId == category.id.toString()}
        />
      ))}
    </ul>
  )
}
