export default function HomeSearchForm() {
  return (
    <>
      <div
        data-id='search-expander'
        className='header-controls-pic header-controls-search'
      ></div>

      <form
        data-id='search-form'
        className='header-controls-search-form form-inline invisible'
      >
        <input
          className='form-control'
          placeholder='Поиск'
          type='search'
        />
      </form>
    </>
  )
}
