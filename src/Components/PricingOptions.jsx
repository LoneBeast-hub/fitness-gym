// import React from 'react';
// 

// const PricingOptions = () => {

//     const pricingOptions = [
//         {
//             type: "REGULAR",
//             duration: "DAILY",
//             price: "N3,000.00",
//             features: [
//                 'access to gym, games and relaxation spot',
//                 'Participate in scheduled fitness workouts and wellness programmes',
//                 'Participate in dance fitness class',
//             ],
//         },
//         {
//             type: "CLASSICAL",
//             duration: "DAILY",
//             price: "N10,000.00",
//             features: [
//                 'access to gym, games and relaxation spot',
//                 'Participate in scheduled fitness workouts and wellness programmes',
//                 'Participate in dance fitness class',
//                 'priority consideration to all services and activites',
//                 'allowed to bring guest 5 time within a month. However, the guest must register to access the service',
//             ],
//         },
//         {
//             type: "REGULAR",
//             duration: "MONTHLY",
//             price: "N3,000.00",
//             features: [
//                 'access to gym, games and relaxation spot',
//                 'Participate in scheduled fitness workouts and wellness programmes',
//                 'Participate in dance fitness class',
//             ],
//         },
//         {
//             type: "CLASSICAL",
//             duration: "MONTHLY",
//             price: "N10,000.00",
//             features: [
//                 'access to gym, games and relaxation spot',
//                 'Participate in scheduled fitness workouts and wellness programmes',
//                 'Participate in dance fitness class',
//                 'priority consideration to all services and activites',
//                 'allowed to bring guest 5 time within a month. However, the guest must register to access the service',
//             ],
//         },
//         {
//             type: "REGULAR",
//             duration: "YEARLY",
//             price: "N3,000.00",
//             features: [
//                 'access to gym, games and relaxation spot',
//                 'Participate in scheduled fitness workouts and wellness programmes',
//                 'Participate in dance fitness class',
//             ],
//         },
//         {
//             type: "CLASSICAL",
//             duration: "YEARLY",
//             price: "N10,000.00",
//             features: [
//                 'access to gym, games and relaxation spot',
//                 'Participate in scheduled fitness workouts and wellness programmes',
//                 'Participate in dance fitness class',
//                 'priority consideration to all services and activites',
//                 'allowed to bring guest 5 time within a month. However, the guest must register to access the service',
//             ],
//         },
//     ];

//     return (
//         <div className="pricing-container">
//             {pricingOptions.map((option, index) => (
//                 <div key={index}>
//                     <h2>{option.type}</h2>
//                     <p>{option.price}</p>

//                     <ul className="choice--list">
//                             <li className="choice--items">
//                                 <div className="choice--span"><img src={image} alt="mark-tick"/></div>
//                                 <p className="choice--title">access to gym, games and relaxation spot</p>
//                             </li>
//                             <li className="choice--items">
//                                 <div className="choice--span"><img src={image} alt="mark-tick"/></div>
//                                 <p className="choice--title">Participate in scheduled fitness workouts and wellness programmes</p>
//                             </li>
//                             <li className="choice--items">
//                                 <div className="choice--span"><img src={image} alt="mark-tick"/></div>
//                                 <p className="choice--title">Participate in dance fitness class</p> 
//                             </li>
//                     </ul>

//                     <button href="" className="btn">Subscribe</button>
 
//                     {option.type === "CLASSICAL" && (
//                         <>
//                              <li className="choice--items">
//                                 <div className="choice--span"><img src={image} alt="mark-tick"/></div>
//                                <p className="choice--title">priority consideration to all services and activites</p> 
//                             </li>
//                             <li className="choice--items">
//                                 <div className="choice--span"><img src={image} alt="mark-tick"/></div>
//                                <p className="choice--title">allowed to bring guest 5 time within a month. However, the guest must register to access the service</p> 
//                             </li>
//                         </>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PricingOptions;


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