import './ContactSection.scss'

function ContactSection() {
  return(
    <section className="contact">
      <div className="container">
        <h2 className="contact__title section-title">
          Contact
        </h2>

        <div className='contact__block'>
          <ul className="contact__list">
            <li className="contact__item">telega</li>
            <li className="contact__item">email</li>
            <li className="contact__item">tel</li>
            <li className="contact__item">gitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;