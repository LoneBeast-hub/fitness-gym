import React, { useState } from 'react';
import image from '../assets/login-gym.png';
import Mark from '../assets/mark.png';
import Modal from '../Components/Modal';
import { Link } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useForm } from 'react-hook-form';

const Signup = () => {

     //handle form events 
     const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
      });
  
    //   // handle submit button
    //   const onSubmit = data => alert(JSON.stringify(data));
  
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
  return (
    <div id="subscription">
        <div className="left-w">
            <h2 className="subscription--heading u-margin-bottom-small">Create an account</h2>

            <form action="" className="form" onSubmit={handleSubmit()} >
                <div className="r-full-relay">
                    <label htmlFor="text">Username</label>
                    <input 
                        type="text" 
                        placeholder='Enter Username'  
                        style={{backgroundColor: '#fafafa'}}
                        {...register("username", {required: 'Username is required' })}  />
                    {errors.username && <span className='error'>{errors.username.message}</span>} 
                </div>

                <div className="r-full-relay">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        placeholder='Enter Email Address'  
                        {...register("email", {required: 'Email address is required' })}  />
                    {errors.email && <span className='error'>{errors.email.message}</span>} 
                </div>

                <div className="r-full-relay">
                    <label htmlFor="text">Tier</label>
                    <select className="select">
                      {options.map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                </div>

                <div className="r-full-relay"> 
                    <label htmlFor='text'>Gender</label>
                    <div className='gender-input'>
                      <div className="gender-radio">
                        <input type="radio"  name="gender" value="male" id="male"/>
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="gender-radio">
                        <input type="radio"  name="gender" value="female" id="Female" />
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
                        placeholder='Confirm your password' 
                        onPaste={(e) => {
                          e.preventDefault()
                          return false;
                        }}
                       {...register("confirmPassword", {required: 'Confirm Password is required',
                            validate: (value) => 
                              value === password || "The password do not match",
                        })}  /> 
                <div className='password-eye'>
                    { (confirmPasswordEye === false ) ? <IoMdEye onClick={handleConfirmPasswordClick} /> : <IoMdEyeOff onClick={handleConfirmPasswordClick} /> }
                </div>
                {errors.confirmPassword && <span className='error'>{errors.confirmPassword.message}</span>} 
              </div>

                <button type="submit" className="form-btn">
                    <Link to="">
                        Sign up
                    </Link>
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