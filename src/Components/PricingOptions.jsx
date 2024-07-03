

import React, { useState } from 'react';
import Tab from './Tab'

const PricingOptions = ({ children }) => {
    const [ activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index)
    }

    

  return (
   <div className="">
        <ul className="tab u-margin-bottom-normal">
            <button type="button">
                {children.map((child, index) => (
                    <Tab 
                        key={index}
                        label={child.props.label}
                        isActive={index === activeTabIndex}
                        onClick={() => handleTabClick(index)}
                    />
                ))}
            </button>

        </ul>
        <div className="pricing-container">
            {children[activeTabIndex].props.children}
        </div>
   </div>
  )
}

export default PricingOptions