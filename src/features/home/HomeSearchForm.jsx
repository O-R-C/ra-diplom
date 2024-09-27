import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeSearchForm() {
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  function toCatalog() {
    const url = '/catalog?search=' + searchValue

    setSearchValue('')
    navigate(url)
  }

  const handleClick = () => {
    if (!searchValue?.trim()) {
      setIsHidden((isHidden) => !isHidden)
      return
    }

    toCatalog()
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    handleClick()
  }

  return (
    <>
      <label
        htmlFor='search-expander-input'
        data-id='search-expander'
        className='header-controls-pic header-controls-search'
        onClick={handleClick}
      ></label>

      {!isHidden && (
        <form
          onSubmit={handleSubmit}
          data-id='search-form'
          className={`header-controls-search-form `}
        >
          <input
            className='form-control pr-5'
            placeholder='Поиск'
            type='search'
            onChange={handleChange}
            value={searchValue}
            id='search-expander-input'
          />
        </form>
      )}
    </>
  )
}
