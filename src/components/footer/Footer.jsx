import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Nestor</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://facebook.com" target='_blank' rel='noopener noreferrer'><FaFacebook/></a>
                <a href="https://instagram.com" target='_blank' rel='noopener noreferrer'><BiLogoInstagramAlt/></a>
                <a href="https://twitter.com" target='_blank' rel='noopener noreferrer'><FaTwitter/></a>
                <a href="https://www.youtube.com/channel/UCtohTKloNRibe2JrisdXolA" target='_blank' rel='noopener noreferrer'><BsYoutube/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Buenas</small>
            </div>
        </footer>
    )
}

export default Footer