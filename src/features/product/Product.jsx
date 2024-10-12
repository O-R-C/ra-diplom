import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Row from '../../ui/Row'
import Section from '../../ui/Section'
import ProductSize from './ProductSize'
import PreLoader from '../../ui/PreLoader'
import { addItem } from '../cart/cartSlice'
import { clearProduct, fetchProduct } from './productSlice'
import SomethingWentWrong from '../../ui/SomethingWentWrong'

export default function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const { product, isLoading, error } = useSelector((state) => state.product)

  const { sku, manufacturer, title, color, material, season, sizes, images, reason, price, id } = product
  const availableSizes = sizes?.filter((size) => size.available)

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [productId, dispatch])

  const handleIncrement = () => {
    if (count >= 10) return
    setCount((count) => count + 1)
  }
  const handleDecrement = () => {
    if (count <= 1) return
    setCount((count) => count - 1)
  }

  const handleOrder = () => {
    const order = {
      id,
      sku,
      title,
      count,
      size: selectedSize,
      price,
      total: count * parseInt(price),
    }

    dispatch(addItem(order))
    dispatch(clearProduct())
    navigate('/cart')
  }

  if (error || !id) {
    return <SomethingWentWrong />
  }

  if (isLoading)
    return (
      <Row>
        <PreLoader />
      </Row>
    )

  return (
    <Section
      className='catalog-item'
      title={title ? title : ''}
      type='h2'
    >
      <Row>
        <div className='col-5'>
          <img
            src={images[0]}
            className='img-fluid'
            alt={title ? title : ''}
            style={{ width: '1000px', height: '258px', objectFit: 'contain' }}
          />
        </div>
        <div className='col-7'>
          <table className='table table-bordered'>
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku ? sku : ''}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer ? manufacturer : ''}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color ? color : ''}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material ? material : ''}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season ? season : ''}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason ? reason : ''}</td>
              </tr>
            </tbody>
          </table>
          {availableSizes.length > 0 ? (
            <div className='text-center'>
              <p>
                Размеры в наличии:{' '}
                {availableSizes.map((size) => (
                  <ProductSize
                    size={size.size}
                    key={size.size}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                ))}
              </p>
              <p>
                Количество:{' '}
                <span className='btn-group btn-group-sm pl-2'>
                  <button
                    className='btn btn-secondary'
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className='btn btn-outline-primary'>{count < 10 ? `0${count}` : count}</span>
                  <button
                    className='btn btn-secondary'
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </span>
              </p>
              <button
                className='btn btn-danger btn-block btn-lg'
                onClick={handleOrder}
                disabled={!selectedSize}
                style={!selectedSize ? { cursor: 'not-allowed', opacity: '0.4' } : { cursor: 'pointer' }}
              >
                В корзину
              </button>
            </div>
          ) : (
            <p className='text-center opacity-50'>Товар не доступен для заказа</p>
          )}
        </div>
      </Row>
    </Section>
  )
}
