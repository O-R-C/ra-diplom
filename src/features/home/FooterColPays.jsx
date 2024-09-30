import Section from '../../ui/Section'
import footerSprite from '../../images/footer-sprite.png'

export default function FooterColPays() {
  return (
    <>
      <Section title='Принимаем к оплате:'>
        <div className='footer-pay'>
          <div
            className='footer-pay-systems footer-pay-systems-paypal'
            style={{ backgroundImage: `url(${footerSprite})` }}
          ></div>
          <div
            className='footer-pay-systems footer-pay-systems-master-card'
            style={{ backgroundImage: `url(${footerSprite})` }}
          ></div>
          <div
            className='footer-pay-systems footer-pay-systems-visa'
            style={{ backgroundImage: `url(${footerSprite})` }}
          ></div>
          <div
            className='footer-pay-systems footer-pay-systems-yandex'
            style={{ backgroundImage: `url(${footerSprite})` }}
          ></div>
          <div
            className='footer-pay-systems footer-pay-systems-webmoney'
            style={{ backgroundImage: `url(${footerSprite})` }}
          ></div>
          <div
            className='footer-pay-systems footer-pay-systems-qiwi'
            style={{ backgroundImage: `url(${footerSprite})` }}
          ></div>
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
