import Section from '../../ui/Section'

export default function FooterColPays() {
  return (
    <>
      <Section title='Принимаем к оплате:'>
        <div className='footer-pay'>
          <div className='footer-pay-systems footer-pay-systems-paypal'></div>
          <div className='footer-pay-systems footer-pay-systems-master-card'></div>
          <div className='footer-pay-systems footer-pay-systems-visa'></div>
          <div className='footer-pay-systems footer-pay-systems-yandex'></div>
          <div className='footer-pay-systems footer-pay-systems-webmoney'></div>
          <div className='footer-pay-systems footer-pay-systems-qiwi'></div>
        </div>
      </Section>

      <Section>
        <div className='footer-copyright'>
          2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.
          <br />
          Доставка по всей России!
        </div>
      </Section>
    </>
  )
}
