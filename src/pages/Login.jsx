import React, { useState, useContext } from 'react';
import image from '../assets/login-gym.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { MyContext } from '../App';

const Login = () => {
  const { updateSessionStorage, contextState, setContextState } = useContext(MyContext);
  const [passwordEye, setPasswordEye] = useState(false);
  const navigate = useNavigate();
  const membersDashboardRoute = '/members_dashboard';

  //handle form events 
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  }

  const onSubmit = async (data) => {
    try {
      console.log("Submitting login form with data:", data);
  
      const result = await fetch("https://goodnessgfc.com.ng/gymserver/customer/authenticate/login_user.php", {
        method: 'POST',
        body: JSON.stringify({
          'username': data.username,
          'password': data.password
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
  
      const response = await result.json();
      console.log("Login response:", response);
  
      if (response.response === true) {
        // save session
        updateSessionStorage('userId', response.userid);
        updateSessionStorage('accessToken', response.accessToken);
  
        // Update context state with the current user information
        setContextState(prevState => ({
          ...prevState,
          currentUser: {
            userId: response.userid,
            accessToken: response.accessToken
          }
        }));
  
        // get user profile
        const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/getuserprofile.php", {
          method: 'POST',
          body: JSON.stringify({
            'userid': response.userid
          }),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accesstoken": response.accessToken
          }
        });
  
        const userProfileResponse = await userProfileResult.json();
  
        // check if userId in app matches user id in DB
        if (response.userid === userProfileResponse.userprofile.userid) {
          console.log("User ID matches. Redirecting to members dashboard.");
          // give user access to members dashboard
          navigate(membersDashboardRoute);
        } else {
          console.warn("Invalid User!");
        }
  
      } else {
        console.warn("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return (
    <div id="subscription">
      <div className="left-w">
        <h2 className="subscription--heading u-margin-bottom-small">Sign in</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="r-full-relay">
            <label htmlFor="text">Username</label>
            <input
              type="text"
              placeholder='Enter Username'
              style={{ backgroundColor: '#fafafa' }}
              {...register("username", { required: 'Username is required' })}
            />
            {errors.username && <span className='error'>{errors.username.message}</span>}
          </div>

          <div className="r-full-relay input-passwordOne">
            <label htmlFor="password">Password</label>
            <input
              type={(passwordEye === false) ? 'password' : 'text'}
              placeholder='Enter your password'
              {...register("password", { required: 'Password is required' })}
            />
            <div className='password-eye'>
              {(passwordEye === false) ? <IoMdEye onClick={handlePasswordClick} /> : <IoMdEyeOff onClick={handlePasswordClick} />}
            </div>
            {errors.password && <span className='error'>{errors.password.message}</span>}
          </div>

          <p className="forgot">
            <Link to="">
              Forgot Password?
            </Link>
          </p>

          <button type="submit" className="form-btn">
            Sign in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?
          <Link to="/signup" className="signup-link link"> Sign up</Link>
        </p>
      </div>
      <div className="right-w">
        <img src={image} alt="woman in gym" />
      </div>
    </div>
  )
}

export default Login;
