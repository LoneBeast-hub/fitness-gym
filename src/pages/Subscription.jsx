import React from 'react';
import image from "../assets/login-gym.png";

function Subscription() {
    return (
        <div id="subcription">
            <div className="left-w">
                <h2 className="subscription--heading">Monthly Membership</h2>
                <form action="">
                    <div className="relative-block">
                        <div className="r-relay">
                            <label htmlFor="email">Name</label>
                            <input type="text" placeholder='Enter full name' />
                        </div>
                        <div className="r-relay">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder='Enter email address' />
                        </div>
                    </div>

                    <label htmlFor="text">Amount (NGN)</label>
                    <input type="text" placeholder='' />
                </form>
            </div>
            <div className="right-w">
               <img src={image} alt="side-view" /> 
            </div>
        </div>
    )
}

export default Subscription
