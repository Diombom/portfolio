import React from 'react'
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariats = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const rcub = '{';
const lcub = '}';
const rsqb = '[';
const lsqb = ']';

const Header = () => {

  const [animateText] = useTypewriter({
    words: ['graphic design', 'student', 'music'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Diombom</h1>
            </div>
          </div>

          {/* <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Frontend</p>
            <p className="p-text">Backend</p>
          </div> */}

          <div className="terminal">
            <div className="top">
              <div className="btns">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="title">Diombom's Summary</div>
            </div>
            <p className="body">
              <p><span className="const">const</span> <span className="const-name">fullstackWebDeveloper</span> = {rcub}</p>
              <p className="tab"><span className="object-item">frontend</span>  : {rsqb}'html5', 'css3', 'reactjs', 'some other thing', 'another', 'one'{lsqb},</p>
              <p className="tab"><span className="object-item">backend</span>  : {rsqb}'php', 'mysql', 'nodejs', 'mongodb'{lsqb}</p>
              <p className="tab"><span className="object-item">others</span>  : <span className="typewriter"> {animateText} </span> <span className="indicator"></span></p>
              <p>{lcub}</p>              
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="Diombom" />

        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariats}
        whileInView={scaleVariats.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')