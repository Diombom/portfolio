import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaSpotify } from 'react-icons/fa';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="app__contact app__flex">
        <h2 className="head-text">Take A Coffee & Chat With Me</h2>
        <div className="app__contact-action app__flex">
            <div className="app__contact-action-container app__flex">
                <img src={images.email} alt="email" />
                <a href="mailto:brandondiom@gmail.com" className="bold-text">brandondiom@gmail.com</a>
            </div>
            <div className="app__contact-action-container app__flex">
                <img src={images.mobile} alt="phone" />
                <a className="bold-text" href="tel:+237 673 056 639">+237 673 056 639</a>
            </div>
        </div>
        <div className="app__contact-links app__flex">
            <a href="https://linkedin.com/in/diom-brandon-4b5a66b8/" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="social-icon linkedin" />
            </a>
            <a href="https://twitter.com/BrandonDiom" target="_blank" rel="noreferrer">
                <BsTwitter className="social-icon twitter" />
            </a>
            <a href="https://open.spotify.com/user/8gf542m9xtlnuwp2meanvfojh" target="_blank" rel="noreferrer">
                <FaSpotify className="social-icon spotify" />
            </a>
            <a href="https://instagram.com/silent_noise_2.0" target="_blank" rel="noreferrer">
                <BsInstagram className="social-icon instagram" />
            </a>
            <a href="https://facebook.com/diom.brandon" target="_blank" rel="noreferrer">
                <FaFacebookF className="social-icon facebook" />
            </a>            
        </div>
    </div>
  )
}

export default AppWrap(Contact, 'contact');