import React from 'react'
import './footer.css'
import footerLogo from '../../assest/footerlogo.svg'
import facebook from '../../assest/facebook.svg'
import instagram from '../../assest/instagram.svg'
import twitter from '../../assest/twitter.svg'

const Footer = () => {
  return (
    <div className='footer'>
       <section className='footer-section1'>
       <img alt='logo' src={footerLogo}/>
       <div className='socials'>
        <img alt='facebook' src={facebook} />
        <img alt='instagram' src={instagram} />
        <img alt='twitter' src={twitter} />
       </div>
       </section>
        <section className='footer-section2'>
            <div>
                <h5>Community</h5>
                <ul>
                    <li><a>NFT</a></li>
                    <li><a>Tokens</a></li>
                    <li><a>Landlords</a></li>
                    <li><a>Discord</a></li>
                </ul> 
            </div>
            <div>
                <h5>Places</h5>
                <ul>
                    <li><a>Castle</a></li>
                    <li><a>Farms </a></li>
                    <li><a>Beach</a></li>
                    <li><a>Learn more</a></li>
                </ul>
            </div>
            <div>
                <h5>About us</h5>      
                <ul>
                    <li><a>Road map</a></li>
                    <li><a>Creators </a></li>
                    <li><a>Career</a></li>
                    <li><a>Contact us</a></li>
                </ul>
            </div>
        </section>
        <section className='footer-section3'>
            <p>© 2022 Metabnb</p>
        </section>
    </div>
  )
}

export default Footer