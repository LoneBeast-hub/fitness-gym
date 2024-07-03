import React from 'react';
import image from '../assets/login-gym.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useForm } from 'react-hook-form';


const Login = () => {

   //handle form events 
   const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

    // handle password eye
    const [passwordEye, setPasswordEye] = useState(false);

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }

  return (
    <div id="subscription">
        <div className="left-w">
          <h2 className="subscription--heading u-margin-bottom-small">Sign in</h2>

          <form action="" className="form" onSubmit={handleSubmit()}>
            <div className="r-full-relay">
              <label htmlFor="text">Username</label>
              <input 
                type="text" 
                placeholder='Enter Username'  
                style={{backgroundColor: '#fafafa'}}
                {...register("username", {required: 'Username is required' })}  />
                {errors.username && <span className='error'>{errors.username.message}</span>} 
            </div>

            <div  className="r-full-relay input-passwordOne">
                  <label htmlFor="password"> Password</label>
                  <input 
                        type={(passwordEye === false ) ? 'password' : 'text'} 
                        placeholder='Enter your password'
                        {...register("password", {required: 'Password is required'})}  />
                  <div className='password-eye'>
                    { (passwordEye === false ) ? <IoMdEye onClick={handlePasswordClick} /> : <IoMdEyeOff onClick={handlePasswordClick} /> }
                  </div>
                  {errors.password && <span className='error'>{errors.password.message}</span>} 
              </div>

                  <p className="forgot">
                    <Link to="">
                      Forgot Password?
                    </Link>
                  </p>

              <button type="submit" className="form-btn">
                  <Link to="">
                      Sign in
                  </Link>
              </button>
          </form>

          <p className="signup-link">
              Don't have an account?
              <Link to="/signup" className="signup-link link"> Sign up</Link>
          </p>
        </div>
        <div className="right-w">
          <img src={image} alt="woman in gym"/>
        </div>
    </div>
  )
}

export default Login