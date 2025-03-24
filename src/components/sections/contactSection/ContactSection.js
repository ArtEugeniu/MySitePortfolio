import './ContactSection.scss'

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title section-title">
          Contact me
        </h2>

 
          <ul className="contact__list">
            <li className="contact__item ">
              <a className="contact__link contact__link--gmail" href="mailto:artemieff96@gmail.com">artemieff96@gmail.com</a>
            </li>
            <li className="contact__item ">
              <a className="contact__link contact__link--tel" href="tel:+37362120948">+37362120948</a>
            </li>
            <li className="contact__item ">
              <a className="contact__link contact__link--git" href="https://github.com/ArtEugeniu">@ArtEugeniu</a>
            </li>
            <li className="contact__item ">
              <a className="contact__link contact__link--telegram" href="https://t.me/artemieff69">@Artemieff69</a>
            </li>
          </ul>

      </div>
    </section>
  )
}

export default ContactSection;