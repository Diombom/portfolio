import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a 
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#E92443'} : {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots