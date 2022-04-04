import React from 'react'
import { Link } from 'react-router-dom'

const PartnerCards = (props) => {
  return (
    <>
      <div className='partner__card'>
        <Link className='partner__card__link' to={props.path}>
          <img className='partner__item__img'
            src={props.src}
            alt="Partner Logo" />

          <div className='partner__item__info'>
            <h5 className='partner__item__text'>{props.text}</h5>
          </div>

        </Link>

        <a href="https://www.google.se
          ">

        </a>
        {/* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" /> */}
      </div>

    </>
  )
}

export default PartnerCards