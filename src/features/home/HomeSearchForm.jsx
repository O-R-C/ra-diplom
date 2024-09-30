import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerControlsSprite from '../../images/header-controls-sprite.png'

export default function HomeSearchForm() {
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const handleClick = () => {
    setIsHidden((isHidden) => !isHidden)

    if (searchValue.trim() === '') return

    const url = '/catalog?q=' + searchValue.toLowerCase()

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
      <span
        htmlFor='search-expander-input'
        data-id='search-expander'
        className='header-controls-pic header-controls-search'
        style={{ backgroundImage: `url(${headerControlsSprite})` }}
        onClick={handleClick}
      ></span>

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
            autoFocus
          />
        </form>
      )}
    </>
  )
}
