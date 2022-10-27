import React from 'react'
import './styles/footer.css'

const Footer = () => {

  return (
    <footer className='footer__container'>
        <div className='footer__icon'>
        <a href="https://www.instagram.com/alexiscortez__/" target="_blank"> <i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className='footer__icon'>
        <a href="https://www.linkedin.com/in/alexis-cortez-dev/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='footer__icon'>
        <a href="https://twitter.com/alexiscortez__" target="_blank"><i className="fa-brands fa-twitter"></i></a>
        </div>

    </footer>

  )
}

export default Footer