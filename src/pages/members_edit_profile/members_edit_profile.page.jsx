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

const MembersEditProfilePage = () => {
    const membersDashboardRoute = '/members_dashboard';
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
                    <form className="mt-[14px] md:mt[17px]" action="#">
                        {/* flex */}
                        <div className="flex flex-col gap-[2rem] md:flex-row">
                            {/* Full Name input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="full_name" className="text-[1.4rem] md:text-[2rem] text-black-100">Full Name</label>
                                <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="full_name" id="full_name" placeholder="John Doe" />
                            </div>
                            {/* Email input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="email" className="text-[1.4rem] md:text-[2rem] text-black-100">Email</label>
                                <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="email" name="email" id="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        {/* flex */}
                        <div className="flex flex-col mt-[2rem] gap-[2rem] md:flex-row">
                            {/* Username input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="username" className="text-[1.4rem] md:text-[2rem] text-black-100">Username</label>
                                <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="username" id="username" placeholder="Doe" />
                            </div>
                            {/* Phone Number input */}
                            <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                                <label htmlFor="phone_number" className="text-[1.4rem] md:text-[2rem] text-black-100">Phone Number</label>
                                <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="number" name="phone_number" id="phone_number" placeholder="0123456789" />
                            </div>
                        </div>
                        {/* Tier input */}
                        <div className="flex mt-[2rem] w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="tier" className="text-[1.4rem] md:text-[2rem] text-black-100">Tier</label>
                            <select className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" name="tier" id="tier">
                                <option value="intermediate">Intermediate</option>
                                <option value="beginner">Beginner</option>
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
                    <form className="mt-[14px] md:mt[17px]" action="#">
                        {/* flex */}
                        <div className="flex flex-col gap-[2rem] md:flex-row">
                            {/* Previous Password input */}
                            <CustomPasswordInput inputName='previous_password' inputLabel='Enter Previous Password' />
                            {/* New Password input */}
                            <CustomPasswordInput inputName='new_password' inputLabel='Enter New Password' />
                        </div>
                        {/* Confirm Password input */}
                        <div className="flex mt-[2rem] w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <CustomPasswordInput baseWidth='full' inputName='confirm_password' inputLabel='Confirm Password' />
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