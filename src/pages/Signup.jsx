import React, { useState } from 'react';
import image from '../assets/login-gym.png';
import Modal from '../Components/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();
     //handle form events 
     const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
      });
  
      // handle password eye
      const [passwordEye, setPasswordEye] = useState(false);
  
      const handlePasswordClick = () => {
          setPasswordEye(!passwordEye)
      }
      
      // handle confirm handle eye
      const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  
      const handleConfirmPasswordClick = () => {
          setConfirmPasswordEye(!confirmPasswordEye)
      }
  
      //checks passwword evemt
      const password = watch('password');

      const options = [
        {label: "Beginner"},
        {label: "Intermediate"},
        {label: "Advanced"}
      ]

      const [open, setOpen] = useState(false);
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [passwordState, setPasswordState] = useState("");
      const [tier, setTier] = useState("");
      const [gender, setGender] = useState("");

      const handleTierChange = (event) => {
        setTier(event.target.value);
      }

      const handleGenderChange = (event) => {
        setGender(event.target.value);
      }

      // async function signUp() {
      //   let item = {username, tier, email, gender, passwordState}
      //   console.warn(item);

      //   let result = await fetch("https://goodnessgfc.com.ng/gymserver/customer/authenticate/register_user.php", {
      //     method: 'POST',
      //     body: JSON.stringify(item),
      //     headers: {
      //       "Content-Type" : "application/json; charset=utf-8"
        
      //     }
      //   })
      //   result = await result.json()
      //   console.warn("result", result)
      // }

       // handle submit button
    const onSubmit = async (data) => {
      let item = { ...data }
      console.warn(item);

      let result = await fetch("https://goodnessgfc.com.ng/gymserver/customer/authenticate/register_user.php", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      result = await result.json()
      console.warn("result", result)

      if (result.success) {
        navigate('/signup', { state: { name: data.username, email: data.email, number: '' } });
      }
    }
    
  return (
    <div id="subscription">
        <div className="left-w">
            <h2 className="subscription--heading u-margin-bottom-small">Create an account</h2>

            <form action="" className="form" onSubmit={handleSubmit(onSubmit)} >
                <div className="r-full-relay">
                    <label htmlFor="text">Username</label>
                    <input 
                        type="text"
                        placeholder='Enter Username'  
                        value={username}
                        {...register("username", {required: 'Username is required' })}
                        onChange={(e) => setUsername(e.target.value)}/>
                    {errors.username && <span className='error'>{errors.username.message}</span>} 
                </div>

                <div className="r-full-relay">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        placeholder='Enter Email Address'  
                        value={email}
                        {...register("email", {required: 'Email address is required' })}  
                        onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className='error'>{errors.email.message}</span>} 
                </div>

                <div className="r-full-relay">
                    <label htmlFor="text">Tier</label>
                    <select className="select" 
                    value={tier} onChange={handleTierChange}
                    >
                      {options.map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                </div>

                <div className="r-full-relay"> 
                    <label htmlFor='text'>Gender</label>
                    <div className='gender-input'>
                      <div className="gender-radio">
                        <input type="radio"  name="gender" 
                         value="Male" 
                         checked={gender === "Male"}
                         onChange={handleGenderChange}
                        id="male"/>
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="gender-radio">
                        <input type="radio"  name="gender" 
                          value="Female" 
                          checked={gender === "Female"}
                          onChange={handleGenderChange}
                         id="Female" />
                        <label htmlFor="Female">Female</label>
                      </div>
                    </div>
                </div>

                <div  className="r-full-relay input-passwordOne">
                  <label htmlFor="password"> Password</label>
                  <input 
                        type={(passwordEye === false ) ? 'password' : 'text'} 
                        placeholder='Enter your password'
                        {...register("password", {required: 'Password is required',
                          pattern: {
                            value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[\]|:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}[\]|:;"'<>,.?/_₹]{8,20}$/,
                            message:'Password should include at least one uppercase, one numeric value and one special character'
                          },
                          minLength: {
                            value: 8,
                            message: 'Minimum Required length is 8'
                          }, 
                          maxLenth: {
                            value: 20,
                            message: 'Maximum Required length is 20',
                          },
                         })}  />
                  <div className='password-eye'>
                    { (passwordEye === false ) ? <IoMdEye onClick={handlePasswordClick} /> : <IoMdEyeOff onClick={handlePasswordClick} /> }
                  </div>
                {errors.password && <span className='error'>{errors.password.message}</span>} 
              </div>

              <div  className="r-full-relay input-passwordTwo">
                  <label htmlFor="password">Confirm Password</label>
                  <input 
                        type={(confirmPasswordEye === false ) ? 'password' : 'text'} 
                        value={passwordState}
                        placeholder='Confirm your password' 
                        onPaste={(e) => {
                          e.preventDefault()
                          return false;
                        }}
                       {...register("confirmPassword", {required: 'Confirm Password is required',
                            validate: (value) => 
                              value === password || "The password do not match",
                        })}  
                          onChange={(e) => setPasswordState(e.target.value)}
                        /> 
                <div className='password-eye'>
                    { (confirmPasswordEye === false ) ? <IoMdEye onClick={handleConfirmPasswordClick} /> : <IoMdEyeOff onClick={handleConfirmPasswordClick} /> }
                </div>
                {errors.confirmPassword && <span className='error'>{errors.confirmPassword.message}</span>} 
              </div>

                <button className="form-btn">              
                        Sign up
                </button>

                <Modal open={open} onClose={() => setOpen(true)}>
                  <div className='text-center w-56'>
                   {/* <Mark size={56} className="mx-auto text-text-heading-500 p-5 rounded-full" /> */}
                   <div className='mx-auto my-4 m-48'>
                     <h3 className="text-lg font-text-heading text-gray-800">
                        sign up successful
                      </h3>
                   </div>
                  </div>
               </Modal>
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

export default Signup