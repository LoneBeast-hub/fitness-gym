// components
import DashboardHeader from "../../Components/dashboard_header/dashboard_header.component";
import CustomButton from "../../Components/custom_button/custom_button.component";
// profile img
import ProfileImg from '../../assets/profile.png';
// react icons
import { FiEdit } from "react-icons/fi";
import { BsPersonFill, BsFillBarChartFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
// css
import '../../lodstyles.css';

const MembersSettingsPage = () => {
    const membersDashboardRoute = '/members_dashboard';
    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='Settings' routeTo={`${membersDashboardRoute}/settings`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Settings</p>
                {/* body (info display) */}
                <div className="border border-gray-e5 p-[1.7rem] md:pl-[4.7rem] md:pr-[3.8rem] md:pb-[1.9rem] md:pt-[3.8rem]">
                    {/* heading */}
                    <div className="flex justify-between items-center">
                        {/* name and profile picture - will be dynamic */}
                        <div className="flex items-center gap-[0.7rem] md:gap-[2.1rem]">
                            {/* img */}
                            <img className="w-[60px] h-[60px] md:w-[102px] md:h-[102px] rounded full" src={ProfileImg} alt="profile" />
                            {/* name */}
                            <p className="text-[1.8rem] md:text-[3.2rem] text-primary-100 font-bold">John Doe</p>
                        </div>
                        {/* edit profile button */}
                        <CustomButton AddClassName='h-fit' primaryColored>
                            <Link className="flex gap-[0.54rem] md:gap-[1rem] py-[1rem] md:py-[2.5rem] md:px-[3.3rem] px-[1.7rem] items-center" to={`${membersDashboardRoute}/settings/edit_profile`}>
                                <FiEdit className="text-[1.2rem] md:text-[2.4rem]" /><span className="text-[1.2rem] md:text-[2.4rem]">Edit Profile</span>
                            </Link>
                        </CustomButton>
                    </div>
                    {/* details */}
                    <div className="flex flex-col mt-[1.3rem] md:mt-[3rem] gap-[1.5rem] md:gap-[2rem]">
                        {/* name */}
                        <div className="py-[1.5rem] overflow-hidden gap-[2rem] rounded-[0.5rem] px-[1.8rem] md:py-[3rem] md:px-[4rem] flex w-full items-center justify-between bg-gray-fa">
                            <div className="flex items-center gap-[1rem]">
                                {/* icon */}
                                <div className="min-w-[30px] flex items-center justify-center md:min-w-[50px] min-h-[30px] md:min-h-[50px] rounded-full bg-primary-100 text-white">
                                    <BsPersonFill className="text-[1.95rem] md:text-[3.5rem]" />
                                </div>
                                {/* text */}
                                <span className="text-[1.2rem] md:text-[2.4rem] font-medium text-black-100">Name</span>
                            </div>
                            {/* value */}
                            <p className="font-medium overflow-ellipsis overflow-hidden text-black-100 text-[1.2rem] md:text-[2.4rem]">John Doe</p>
                        </div>
                        {/* email */}
                        <div className="py-[1.5rem] overflow-hidden gap-[2rem] rounded-[0.5rem] px-[1.8rem] md:py-[3rem] md:px-[4rem] flex w-full items-center justify-between bg-gray-fa">
                            <div className="flex items-center gap-[1rem]">
                                {/* icon */}
                                <div className="min-w-[30px] flex items-center justify-center md:min-w-[50px] min-h-[30px] md:min-h-[50px] rounded-full bg-primary-100 text-white">
                                    <IoMdMail className="text-[1.95rem] md:text-[3.5rem]" />
                                </div>
                                {/* text */}
                                <span className="text-[1.2rem] md:text-[2.4rem] font-medium text-black-100">Email</span>
                            </div>
                            {/* value */}
                            <p className="font-medium overflow-ellipsis overflow-hidden text-black-100 text-[1.2rem] md:text-[2.4rem]">example@gmail.com</p>
                        </div>
                        {/* Username */}
                        <div className="py-[1.5rem] overflow-hidden gap-[2rem] rounded-[0.5rem] px-[1.8rem] md:py-[3rem] md:px-[4rem] flex w-full items-center justify-between bg-gray-fa">
                            <div className="flex items-center gap-[1rem]">
                                {/* icon */}
                                <div className="min-w-[30px] flex items-center justify-center md:min-w-[50px] min-h-[30px] md:min-h-[50px] rounded-full bg-primary-100 text-white">
                                    <BsPersonFill className="text-[1.95rem] md:text-[3.5rem]" />
                                </div>
                                {/* text */}
                                <span className="text-[1.2rem] md:text-[2.4rem] font-medium text-black-100">Username</span>
                            </div>
                            {/* value */}
                            <p className="font-medium overflow-ellipsis overflow-hidden text-black-100 text-[1.2rem] md:text-[2.4rem]">john_doe</p>
                        </div>
                        {/* Phone Number */}
                        <div className="py-[1.5rem] overflow-hidden gap-[2rem] rounded-[0.5rem] px-[1.8rem] md:py-[3rem] md:px-[4rem] flex w-full items-center justify-between bg-gray-fa">
                            <div className="flex items-center gap-[1rem]">
                                {/* icon */}
                                <div className="min-w-[30px] flex items-center justify-center md:min-w-[50px] min-h-[30px] md:min-h-[50px] rounded-full bg-primary-100 text-white">
                                    <FaPhoneAlt className="text-[1.6rem] md:text-[2.5rem]" />
                                </div>
                                {/* text */}
                                <span className="text-[1.2rem] md:text-[2.4rem] font-medium text-black-100">Phone Number</span>
                            </div>
                            {/* value */}
                            <p className="font-medium overflow-ellipsis overflow-hidden text-black-100 text-[1.2rem] md:text-[2.4rem]">1234567890</p>
                        </div>
                        {/* Gym plan */}
                        <div className="py-[1.5rem] overflow-hidden gap-[2rem] rounded-[0.5rem] px-[1.8rem] md:py-[3rem] md:px-[4rem] flex w-full items-center justify-between bg-gray-fa">
                            <div className="flex items-center gap-[1rem]">
                                {/* icon */}
                                <div className="min-w-[30px] flex items-center justify-center md:min-w-[50px] min-h-[30px] md:min-h-[50px] rounded-full bg-primary-100 text-white">
                                    <FaCalendarCheck className="text-[1.6rem] md:text-[2.5rem]" />
                                </div>
                                {/* text */}
                                <span className="text-[1.2rem] md:text-[2.4rem] font-medium text-black-100">Gym Plan</span>
                            </div>
                            {/* value */}
                            <p className="font-medium overflow-ellipsis overflow-hidden text-black-100 text-[1.2rem] md:text-[2.4rem]">Classical (N22000.00 - 1 month)</p>
                        </div>
                        {/* Tier */}
                        <div className="py-[1.5rem] overflow-hidden gap-[2rem] rounded-[0.5rem] px-[1.8rem] md:py-[3rem] md:px-[4rem] flex w-full items-center justify-between bg-gray-fa">
                            <div className="flex items-center gap-[1rem]">
                                {/* icon */}
                                <div className="min-w-[30px] flex items-center justify-center md:min-w-[50px] min-h-[30px] md:min-h-[50px] rounded-full bg-primary-100 text-white">
                                    <BsFillBarChartFill className="text-[1.6rem] md:text-[2.5rem]" />
                                </div>
                                {/* text */}
                                <span className="text-[1.2rem] md:text-[2.4rem] font-medium text-black-100">Tier</span>
                            </div>
                            {/* value */}
                            <p className="font-medium overflow-ellipsis overflow-hidden text-black-100 text-[1.2rem] md:text-[2.4rem]">Intermediate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersSettingsPage;