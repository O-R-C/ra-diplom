import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeSearchForm() {
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const handleClick = () => {
    setIsHidden((isHidden) => !isHidden)

    if (searchValue.trim() === '') return

    const url = '/catalog?q=' + searchValue

    setSearchValue('')
    navigate(url)
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
