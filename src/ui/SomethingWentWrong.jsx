import { useNavigate } from 'react-router-dom'

export default function SomethingWentWrong() {
  const navigate = useNavigate()

  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto mt-5'>
      <p>Что-то пошло не так</p>
      <button
        onClick={() => navigate(0)}
        className='btn btn-outline-primary'
      >
        Обновить
      </button>
    </div>
  )
}
