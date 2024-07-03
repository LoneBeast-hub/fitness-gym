import React, {useState} from 'react';
import { PaystackButton } from 'react-paystack';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import image from '../assets/login-gym.png';
import visa from '../assets/visa.png';
import paypal from '../assets/paypal.png';
import mastercard from '../assets/mastercard.png';

function Subscription() {

    const publicKey = "pk_test_f71e052064e4cf01f5b955a69cc9907ab02c657f";  //This key should not be shown anyhow, but work with this for now
    const [email, setEmail] = useState("");
    const [amount, setAmount ] = useState("");
    const [name, setName ] = useState("");
    const [number, setNumber] = useState("");

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }
    
    const componentProps = {
        email, //This is the email gotten from the form
        amount: amount * 100, // Amount in kobo
        metadata: {
            name,
            number,
            ref: 'REG_' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference
        },
        publicKey, 
        text: "Make Payment",
        onSuccess: () => {
            window.location.href = '/signup';
        },
        onClose: () => alert("Are you sure you want to close?")
    }

    const location = useLocation();
    const { state } = location || {};
    const { price, duration } = state || {};

    return (
        <div id="subscription">
            <div className="left-w">
                <h2 className="subscription--heading u-margin-bottom-small">{duration} Membership</h2>
                <form action="" className="form" onSubmit={(event) => {event.preventDefault(); }}>
                    <div className="relative-block">
                        <div className="r-relay">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter full name' onChange={(e) => setName(e.target.value)} value={name} required />
                        </div>
                        <div className="r-relay">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter email address' onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                    </div>

                    <div className="r-full-relay">
                        <label htmlFor="amount">Amount (NGN)</label>
                        <select value={amount} placeholder={price} style={{backgroundColor: '#f2f2f2'}} onChange={handleAmountChange} > 
                            <option value={null}>Select Amount</option>
                            <option value={price} >{price}</option>
                        </select>
                    </div>

                    <div className="r-full-relay">
                        <label htmlFor="tel">Phone Number</label>
                        <input type="text" placeholder='Enter Phone Number' required style={{backgroundColor: '#fafafa'}} onChange={(e) => setNumber(e.target.value)} value={number} />
                    </div>

                    <div className="r-full-relay">
                        <label htmlFor="text">Payment</label>
                        <div className="f-w-card">
                            <div className="bank-card">
                                <img src={visa} alt="visa" />
                            </div>
                            <div className="bank-card">
                                <img src={paypal} alt="paypal" />
                            </div>
                            <div className="bank-card">
                                <img src={mastercard} alt="mastercard" />
                            </div>
                        </div>
                    </div> 

                    <PaystackButton className="form-btn" value="Pay with paystack"  {...componentProps}  />
                       
                </form>

                <p className="signup-link">
                    Already have an account?
                    <Link to="/login" className="signup-link link"> Sign in</Link>
                </p>
            </div>
            <div className="right-w">
                <img src={image} alt="woman in gym"/>
            </div>
        </div>
    )
}

export default Subscription
