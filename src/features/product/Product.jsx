import { useLoaderData } from 'react-router-dom'

import Row from '../../ui/Row'
import Section from '../../ui/Section'
import { getProduct } from '../../services/backendApi'
import ProductSize from './ProductSize'
import { useState } from 'react'

const loader = async ({ params }) => {
  try {
    const product = await getProduct(params.id)
    return product
  } catch (error) {
    console.log(error)
  }
}

export default function Product() {
  const [selectedSize, setSelectedSize] = useState('')
  const { sku, manufacturer, title, color, material, season, sizes, images, reason } = useLoaderData()
  const availableSizes = sizes?.filter((size) => size.available)

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
                <button className='btn btn-secondary'>-</button>
                <span className='btn btn-outline-primary'>1</span>
                <button className='btn btn-secondary'>+</button>
              </span>
            </p>
          </div>
          {selectedSize && <button className='btn btn-danger btn-block btn-lg'>В корзину</button>}
        </div>
      </Row>
    </Section>
  )
}

Product.loader = loader
