import { useState } from 'react'
import PropTypes from 'prop-types'
import Section from '../../ui/Section'

export default function OrderForm({ handleSubmit }) {
  const [valueTel, setValueTel] = useState('')
  const [valueAddress, setValueAddress] = useState('')
  const [isAgree, setIsAgree] = useState(false)

  const handleChangeTel = (event) => {
    setValueTel(event.target.value.trimStart())
  }

  const handleChangeAddress = (event) => {
    setValueAddress(event.target.value.trimStart())
  }

  const handleChangeAgree = (event) => {
    setIsAgree(event.target.checked)
  }

  return (
    <Section
      className='order'
      title='Оформить заказ'
      type='h2'
    >
      <div
        className='card'
        style={{ maxWidth: '30rem', margin: '0 auto' }}
      >
        <form
          className='card-body'
          onSubmit={handleSubmit}
        >
          <div className='form-group'>
            <label htmlFor='phone'>Телефон</label>
            <input
              className='form-control'
              id='phone'
              name='phone'
              type='tel'
              autoComplete='on'
              value={valueTel}
              onChange={handleChangeTel}
              pattern='^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$'
              placeholder='Ваш телефон'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Адрес доставки</label>
            <input
              className='form-control'
              id='address'
              name='address'
              placeholder='Адрес доставки'
              type='text'
              value={valueAddress}
              onChange={handleChangeAddress}
              autoComplete='on'
              required
            />
          </div>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='agreement'
              checked={isAgree}
              onChange={handleChangeAgree}
              required
            />
            <label
              className='form-check-label'
              htmlFor='agreement'
            >
              Согласен с правилами доставки
            </label>
          </div>
          <button
            type='submit'
            className='btn btn-outline-secondary'
            disabled={!valueTel || !valueAddress || !isAgree}
            style={!valueTel || !valueAddress || !isAgree ? { cursor: 'not-allowed' } : {}}
          >
            Оформить
          </button>
        </form>
      </div>
    </Section>
  )
}

OrderForm.propTypes = {
  handleSubmit: PropTypes.func,
}
