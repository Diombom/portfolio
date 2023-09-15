import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({x: 0, scale: 1, opacity: 1});

  const handleClick = (index) => {    
    
    setAnimateCard([{ x: -100, scale: 0.8, opacity: 0 }]);
    
    setTimeout(() => {

      setCurrentIndex(index);

      setAnimateCard([{ x: 0, scale: 1, opacity: 1 }])

    }, 300);
  }

  useEffect(() => {
    const query = '*[_type== "testimonials"]';
    const brandsQuery = '*[_type== "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      });

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    });
      
  }, [])

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
            <motion.div
              animate={animateCard}
              transition={{ duration: 0 }}
              className="app__testimonial-item app__flex"
            >
              <img src={urlFor(test.imageurl)} alt="testimonials" />
                <div className="app__testimonial-content">
                <p className="p-text">{test.feedback}</p>
                <div>
                  <h4 className="bold-text">{test.name}</h4>
                  <h5 className="p-text">{test.company}</h5>
                </div>
              </div>
            </motion.div>

          <div className="app__testimonial-btns-wrapper app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
            </div>
            <div className="app__testimonial-btns app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1)}>
              <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </div>

          
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0,1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(Testimonial, 'testimonials')