import React, {useState} from "react";
// import PricingOptions from "./PricingOptions";

const Pricing = () => {
    const [pricingOption, setPricingOption] = useState("REGULAR");

    const pricingOptions = [
        {
            type: "REGULAR",
            duration: "DAILY",
            price: "N3,000.00",
            features: [
                'access to gym, games and relaxation spot',
                'Participate in scheduled fitness workouts and wellness programmes',
                'Participate in dance fitness class',
            ],
        },
        {
            type: "CLASSICAL",
            duration: "DAILY",
            price: "N10,000.00",
            features: [
                'access to gym, games and relaxation spot',
                'Participate in scheduled fitness workouts and wellness programmes',
                'Participate in dance fitness class',
                'priority consideration to all services and activites',
                'allowed to bring guest 5 time within a month. However, the guest must register to access the service',
            ],
        },
        {
            type: "REGULAR",
            duration: "MONTHLY",
            price: "N3,000.00",
            features: [
                'access to gym, games and relaxation spot',
                'Participate in scheduled fitness workouts and wellness programmes',
                'Participate in dance fitness class',
            ],
        },
        {
            type: "CLASSICAL",
            duration: "MONTHLY",
            price: "N10,000.00",
            features: [
                'access to gym, games and relaxation spot',
                'Participate in scheduled fitness workouts and wellness programmes',
                'Participate in dance fitness class',
                'priority consideration to all services and activites',
                'allowed to bring guest 5 time within a month. However, the guest must register to access the service',
            ],
        },
        {
            type: "REGULAR",
            duration: "YEARLY",
            price: "N3,000.00",
            features: [
                'access to gym, games and relaxation spot',
                'Participate in scheduled fitness workouts and wellness programmes',
                'Participate in dance fitness class',
            ],
        },
        {
            type: "CLASSICAL",
            duration: "YEARLY",
            price: "N10,000.00",
            features: [
                'access to gym, games and relaxation spot',
                'Participate in scheduled fitness workouts and wellness programmes',
                'Participate in dance fitness class',
                'priority consideration to all services and activites',
                'allowed to bring guest 5 time within a month. However, the guest must register to access the service',
            ],
        },
    ];


    const handleOptionChange = (option) => {
        setPricingOption(option);
    };
    return ( 
        <div id="pricing">
            <div className="container">
                <h1 className="pricing--heading u-margin-bottom-normal"> membership  <span> plans </span></h1>

                 <div className="tab u-margin-bottom-normal">
                    <button onClick={() => handleOptionChange("DAILY")} className="activator">DAILY</button>
                    <button onClick={() => handleOptionChange("MONTHLY")}>MONTHLY</button>
                    <button onClick={() => handleOptionChange("YEARLY")}>YEARLY</button>
                </div>

                <pricingOptions pricingOptions={pricingOptions.filter((option) => option.type === pricingOption)}/>

                <div className="pricing-container">
                    {pricingOptions.map((option, index) => {
                        <div key={index}>
                            <h2>{option.type}</h2>
                            <p>{option.price}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
