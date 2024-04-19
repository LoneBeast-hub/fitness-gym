import React from 'react';
import image from "../assets/mark.png"

const PricingOptions = ({ pricingOptions }) => {
    return (
        <div className="pricing-container">
            {pricingOptions.map((option, index) => (
                <div key={index}>
                    <h2>{option.type}</h2>
                    <p>{option.price}</p>

                    <ul className="choice--list">
                            <li className="choice--items">
                                <div className="choice--span"><img src={image} alt="mark-tick"/></div>
                                <p className="choice--title">access to gym, games and relaxation spot</p>
                            </li>
                            <li className="choice--items">
                                <div className="choice--span"><img src={image} alt="mark-tick"/></div>
                                <p className="choice--title">Participate in scheduled fitness workouts and wellness programmes</p>
                            </li>
                            <li className="choice--items">
                                <div className="choice--span"><img src={image} alt="mark-tick"/></div>
                                <p className="choice--title">Participate in dance fitness class</p> 
                            </li>
                    </ul>

                    <button href="" className="btn">Subscribe</button>
 
                    {option.type === "CLASSICAL" && (
                        <>
                             <li className="choice--items">
                                <div className="choice--span"><img src={image} alt="mark-tick"/></div>
                               <p className="choice--title">priority consideration to all services and activites</p> 
                            </li>
                            <li className="choice--items">
                                <div className="choice--span"><img src={image} alt="mark-tick"/></div>
                               <p className="choice--title">allowed to bring guest 5 time within a month. However, the guest must register to access the service</p> 
                            </li>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PricingOptions;
