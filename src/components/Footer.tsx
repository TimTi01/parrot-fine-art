import React, { FC } from 'react'
import '../styles/footer.scss'
import { FacebookIcon } from './icons/FacebookIcon'
import { Instagram } from './icons/Instagram'
import { WhatsApp } from './icons/WhatsApp'
// import '../styles/container.scss'
import { LogoWhite } from './LogoWhite'

const text = ['Artworks', 'Landscape', 'Portrait', 'Still life', 'Painting', 'Sculpture', 'Architecture', 'Graphic arts']
const links = ['imagine.com', '+44 (0) 35 2953 2953', 'info@imagine.com']

export const Footer:FC = () => {
  return (
    <footer className='footer'>
        <div className='footerWrap'>

          <div className='wrapFirstСontainer'>
            <div className="footerWrapLogoColumn">
                <LogoWhite/>
                <ul className='logoColumnTextWrap'>
                  <li className='textWrapItem'>Contract offer</li>
                  <li className='textWrapItem'>Card payment rules</li>
                </ul>
            </div>

            <ul className='footerWrapMenuColumn'>
              {text.map((item) => (
                <li key={item} className='menuColumnWrapMenu'>{item}</li>
              ))}
            </ul>
          </div>

          <div className='wrapSecondСontainer'>
            <ul className='secondСontainerСontacts'>
              {links.map((item) => (
                <li key={item} className='contactsLink'>{item}</li>
              ))}
              <div className='contactsIconsWrap'>
                <div className='wrapContainer'>
                  <FacebookIcon/>
                  <Instagram/>
                  <WhatsApp/>
                </div>
              </div>
            </ul>

            <span className='secondСontainerСopyright'>© IMAGINE 2021.  All rights Reserved</span>
          </div>
        </div>
    </footer>
  )
}
