import Section from '../../ui/Section'
import footerSprite from '../../images/footer-sprite.png'

export default function FooterColContacts() {
  return (
    <Section
      title='Контакты:'
      classNameName={'footer-contacts'}
    >
      <a
        className='footer-contacts-phone'
        href='tel:+7-495-790-35-03'
      >
        +7 495 79 03 5 03
      </a>
      <span className='footer-contacts-working-hours'>Ежедневно: с 09-00 до 21-00</span>
      <a
        className='footer-contacts-email'
        href='mailto:office@bosanoga.ru'
      >
        office@bosanoga.ru
      </a>
      <div className='footer-social-links'>
        <div
          className='footer-social-link footer-social-link-twitter'
          style={{ backgroundImage: `url(${footerSprite})` }}
        ></div>
        <div
          className='footer-social-link footer-social-link-vk'
          style={{ backgroundImage: `url(${footerSprite})` }}
        ></div>
      </div>
    </Section>
  )
}
