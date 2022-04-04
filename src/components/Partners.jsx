import React from 'react'
import Partnercards from './PartnerCards'
import './Partners.css'



const Partners = () => {
  return (
    <div className="partners-container">
      <h1>Våra samarbetspartners</h1>
      <div className='partners-wrapper'>
        <Partnercards
          src="src\img\bbk_group_tag.svg"
          href="www.google.se"
          path="www.bbk.se"
          element={() => {

          }}
        />
        < Partnercards
          src="src\img\riksbyggen.webp"

          href="https://bbkgroup.com/"
          path="/index.html"
          text="BRF Malmöhus 24"
        />
        <Partnercards
          src="src\img\10270_465504280178104_215354971_n-KC-logo.jpg"

          href="https://bbkgroup.com/"
          path="/index.html"
          text="Karlsson Climate"
        />
        <Partnercards
          src="src\img\sbc_header_logo--dark.svg"

          href="https://bbkgroup.com/"
          path="/index.html"
        />

        <Partnercards
          src="src\img\hsb-logo.v2.webp"
          href="https://bbkgroup.com/"
          path="/index.html"
          text="HSB Astern"

        />

      </div>
    </div>


  )
}

export default Partners