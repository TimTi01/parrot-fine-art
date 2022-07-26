import React, { FC } from 'react'
import '../styles/footer.scss'
import '../styles/container.scss'
import { LogoWhite } from './LogoWhite'

export const Footer:FC = () => {
  return (
    <footer className='footer'>
        <div className='footerWrap'>
            <div className="logoColumn">
                <LogoWhite/>
                <div className="logoColumnTextWrap">
                    <span className='logoColumnText'>Contract offer</span>
                    <span className='logoColumnText'>Card payment rules</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
