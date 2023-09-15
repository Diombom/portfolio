import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const query = '*[_type== "experiences"]';
    const skillsQuery = '*[_type== "skills"]';

    client.fetch(query)
      .then((experience) => {
        // console.log(experience)
        setExperience(experience);
      });

    client.fetch(skillsQuery)
    .then((data) => {
      setSkill(data);
    });
      
  }, [])


  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((skill) => (
            <motion.div
              whileInView={{y: [100,0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
            {experience.map((work) => (
              <motion.div
                className="app__skills-exp-item"
                key={work.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{work.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {
                    work.works.map((item) => (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work app__flex"
                          data-tip
                          data-for={item.name}
                          key={item.name}
                          >
                          <h4 className="bold-text skills-heading">{item.name}</h4>
                          <p className="p-text skills-heading">{item.company}</p>
                        </motion.div>
                        <Tooltip
                          id={item.name}
                          effect="solid"
                          arrowColor="fff"
                          className="skills-tooltip"
                          anchorSelect=".skills-heading"
                          >
                          {item.desc}
                        </Tooltip>
                      </>
                    ))
                  }
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills');