import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className="footer-link-items">
          <h1>EMC Energi AB</h1>
          <p> Org.nr: 559251-1694</p>
          <p>Nicoloviusgatan 6</p>
          <p>217 57</p>
          <p>Malmö</p>
          <a href="mailto:info@emcenergi.se">info@emcernergi.se </a>
        </div>


      </section>

      <section className='footer-link-items'>
        <h2>Navigering</h2>
        <Link to='/'>Hem</Link>
        <Link to='/partners'>Partners</Link>
        <Link to='/kontakt'>Kontakt</Link>
        <Link to='/tjansteerbjudande'>Tjänster</Link>
      </section>
    </div >
  )
}

export default Footer