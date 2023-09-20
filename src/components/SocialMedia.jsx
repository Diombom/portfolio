import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaSpotify } from 'react-icons/fa';

const SocialMedia = () => {
  return (
<div className="app__social">
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
  )
}

export default SocialMedia