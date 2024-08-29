// components
import DashboardHeader from "../../Components/dashboard_header/dashboard_header.component";
// img
import ProfileImg from '../../assets/profile.png';
// react icons
import { FaCamera } from "react-icons/fa";
import CustomButton from "../../Components/custom_button/custom_button.component";
import CustomPasswordInput from "../../Components/custom_password_input/custom_password_input.component";
// css
import '../../lodstyles.css';
// hooks
import { useEffect, useState, useContext } from "react";
// context
import { MyContext } from "../../App";

const MembersEditProfilePage = () => {
    const {contextState, setContextState} = useContext(MyContext);
    const membersDashboardRoute = '/members_dashboard';
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [tier, setTier] = useState(sessionStorage.getItem('userTier').toLowerCase());
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const getUserProfileFromStorage = () => {
            const userProfileString = sessionStorage.getItem('userProfile');
            if(userProfileString) {
                const userProfileObject = JSON.parse(userProfileString);
                console.log(userProfileObject);
                setFullName(userProfileObject.fullname);
                setEmail(userProfileObject.email);
                setUsername(userProfileObject.username);
                setPhone(userProfileObject.phone);
                setTier(userProfileObject.tier.toLowerCase());
            }
        }
        
        getUserProfileFromStorage();
    }, [])

    const handleUserProfileUpdate = async (e) => {
        e.preventDefault();

        try {
            // get data from storage
            const userId = sessionStorage.getItem('userId');
            const accessToken = sessionStorage.getItem('accessToken');

            // get user profile
            const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/getuserprofile.php", {
                method: 'POST',
                body: JSON.stringify({
                'userid': userId
                }),
                headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accesstoken": accessToken
                }
            });

            const userProfileResponse = await userProfileResult.json();
            console.log(userProfileResponse);

            // check if userId in app matches user id in DB
            if (userId === userProfileResponse.userprofile.userid) {
                // update profile
                const requestProfileUpdate = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/updateuserdescription.php", {
                method: 'POST',
                body: JSON.stringify({
                    'userid': userId,
                    'fullname': fullName,
                    'email': email,
                    'username': username,
                    'tier': tier
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Accesstoken": accessToken
                }
                });
                
                // get a response from the profile update request
                const requestProfileUpdateResult = await requestProfileUpdate.json();
                console.log(requestProfileUpdateResult);
                
                // print success message after successful profile update
                if(requestProfileUpdateResult.response) {
                    // after successfull profile update, request for the new profile and update session storage

                    // get the new user profile
                    const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/getuserprofile.php", {
                        method: 'POST',
                        body: JSON.stringify({ 'userid': userId }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Accesstoken": accessToken
                        }
                    });
    
                    if (!userProfileResult.ok) {
                        // handle non-2xx HTTP responses
                        throw new Error('Failed to fetch user profile');
                    }
    
                    const userProfileResponse = await userProfileResult.json();

                    // update session storage
                    sessionStorage.setItem('userProfile', JSON.stringify(userProfileResponse.userprofile));
                    sessionStorage.setItem('userTier', userProfileResponse.userprofile.tier)

                    // reload page
                    window.location.reload();

                    setContextState((prevValues) => ({
                        ...prevValues,
                        successMessage: 'Profile Successfully Updated!',
                        showSuccessModal: true
                    }))
                } else {
                    alert('Error Updating Profile, try again!')
                }
            } else {
                alert('You do not have Permission!')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        try {
            // get data from storage
            const userId = sessionStorage.getItem('userId');
            const accessToken = sessionStorage.getItem('accessToken');

            // get user profile
            const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/getuserprofile.php", {
                method: 'POST',
                body: JSON.stringify({
                'userid': userId
                }),
                headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accesstoken": accessToken
                }
            });

            const userProfileResponse = await userProfileResult.json();
            console.log(userProfileResponse);

            // check if userId in app matches user id in DB
            if (userId === userProfileResponse.userprofile.userid) {
                // change password
                const requestPasswordChange = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/passwordchange.php", {
                method: 'POST',
                body: JSON.stringify({
                    'userid': userId,
                    'currentpassword': currentPassword,
                    'newpassword': newPassword,
                    'confirmpassword': confirmPassword
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Accesstoken": accessToken
                }
                });
                
                // get a response from the password change request
                const requestPasswordChangeResult = await requestPasswordChange.json();
                console.log(requestPasswordChangeResult);

                // print success message after successful Password Change
                if(requestPasswordChangeResult.response) {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        successMessage: 'Password Successfully Changed!',
                        showSuccessModal: true
                    }))
                } else {
                    alert('Error changing password, try again!')
                }
            } else {
                alert('You do not have Permission!')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return(
        <div>
            {/* header */}
            <DashboardHeader nestedPage={{pageName: 'Settings', routeTo: `${membersDashboardRoute}/settings`}} pageName='Edit Profile' routeTo={`${membersDashboardRoute}/settings/edit_profile`} />
            {/* body (personal information) */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Personal Information</p>
                <div className="border border-gray-e5 pt-[1.7rem] pb-[2.5rem] px-[5%] md:py-[2.4rem]">
                    {/* Profile picture */}
                    <div className="relative h-fit w-fit">
                        {/* img */}
                        <img className="w-[60px] h-[60px] md:w-[98px] md:h-[98px]" src={ProfileImg} alt="profile" />
                        {/* image changer */}
                        <div className="cursor-pointer bg-primary-100 w-[22px] flex items-center justify-center absolute bottom-0 right-0 rounded-full h-[22px] md:w-[40px] md:h-[40px]">
                            <FaCamera className="text-[0.9rem] text-white md:text-[1.7rem]" />
                        </div>
                    </div>
                    {/* form */}
                    <form className="mt-[14px] md:mt[17px]" onSubmit={handleUserProfileUpdate}>
                        {/* flex */}
                        <div className="flex flex-col gap-[2rem] md:flex-row">
                            {/* Full Name input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="full_name" className="text-[1.4rem] md:text-[2rem] text-black-100">Full Name</label>
                                <input onChange={(e) => {
                                    setFullName(e.target.value)
                                }} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="full_name" id="full_name" defaultValue={fullName? fullName : ''} />
                            </div>
                            {/* Email input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="email" className="text-[1.4rem] md:text-[2rem] text-black-100">Email</label>
                                <input onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="email" name="email" id="email" defaultValue={email? email : ''} />
                            </div>
                        </div>
                        {/* flex */}
                        <div className="flex flex-col mt-[2rem] gap-[2rem] md:flex-row">
                            {/* Username input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="username" className="text-[1.4rem] md:text-[2rem] text-black-100">Username</label>
                                <input onChange={(e) => {
                                    setUsername(e.target.value)
                                }} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="username" id="username" defaultValue={username? username : ''} />
                            </div>
                            {/* Phone Number input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="phone_number" className="text-[1.4rem] md:text-[2rem] text-black-100">Phone Number</label>
                                <input onChange={(e) => {
                                    setPhone(e.target.value)
                                }} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="number" name="phone_number" id="phone_number" defaultValue={phone? phone : ''} />
                            </div>
                        </div>
                        {/* Tier input */}
                        <div className="flex mt-[2rem] w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="tier" className="text-[1.4rem] md:text-[2rem] text-black-100">Tier</label>
                            <select onChange={(e) => {
                                setTier(e.target.value)
                            }} defaultValue={tier? tier : ''} className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" name="tier" id="tier">
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        {/* Update button */}
                        <div className="w-full flex mt-[2rem] md:justify-end">
                            <CustomButton setType='submit' AddClassName='w-full md:w-fit py-[1.5rem] md:py-[2.5rem] md:px-[7.2rem]' primaryColored><span className="text-[1.6rem] md:text-[2.4rem]">Update</span></CustomButton>
                        </div>
                    </form>
                </div>
            </div>
            {/* body (Change Password) */}
            <div className="w-[90%] mt-[1.5rem] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Change Password</p>
                <div className="border border-gray-e5 pt-[1.7rem] pb-[2.5rem] px-[5%] md:py-[2.4rem]">
                    {/* form */}
                    <form className="mt-[14px] md:mt[17px]" onSubmit={handlePasswordChange}>
                        {/* flex */}
                        <div className="flex flex-col gap-[2rem] md:flex-row">
                            {/* Previous Password input */}
                            <CustomPasswordInput onChange={(e) => {
                                setCurrentPassword(e.target.value)
                            }} defaultValue={currentPassword} inputName='previous_password' inputLabel='Enter Previous Password' />
                            {/* New Password input */}
                            <CustomPasswordInput onChange={(e) => {
                                setNewPassword(e.target.value)
                            }} defaultValue={newPassword} inputName='new_password' inputLabel='Enter New Password' />
                        </div>
                        {/* Confirm Password input */}
                        <div className="flex mt-[2rem] w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <CustomPasswordInput onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }} defaultValue={confirmPassword} baseWidth='full' inputName='confirm_password' inputLabel='Confirm Password' />
                        </div>
                        {/* Update button */}
                        <div className="w-full flex mt-[2rem] md:justify-end">
                            <CustomButton setType='submit' AddClassName='w-full md:w-fit py-[1.5rem] md:py-[2.5rem] md:px-[7.2rem]' primaryColored><span className="text-[1.6rem] md:text-[2.4rem]">Update</span></CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MembersEditProfilePage;