// react icons
import { LiaTimesSolid } from "react-icons/lia";
// context api
import { MyContext } from "../../App";
import { useContext } from "react";
import CustomButton from "../custom_button/custom_button.component";

const MemberDetailsModal = ({showMemberDetailsModal: {userid, fullname, username, phone, email, status, dor, plan}}) => {
    const {contextState, setContextState} = useContext(MyContext);
    return(
        <div className="w-[100%] min-h-[100vh] py-[5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0 left-0 overflow-y-auto">
            <div className="w-[90%] h-fit max-h-[80vh] overflow-y-scroll items-center relative flex flex-col md:w-[60%] md:max-w-[923px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[2.5%] rounded-[5px] bg-white">
                {/* title */}
                <p className="text-[1.8rem] md:text-[3.2rem] text-primary-100 font-bold mb-[1.8rem]">View Members</p>
                {/* body */}
                <div className="flex w-full flex-col">
                    {/* ID */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">ID</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{userid}</span>
                    </div>
                    {/* Name */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Name</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{fullname}</span>
                    </div>
                    {/* Username */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Username</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{username}</span>
                    </div>
                    {/* Phone */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Phone</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{phone}</span>
                    </div>
                    {/* Email */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Email</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{email}</span>
                    </div>
                    {/* Status */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Status</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">
                            {status ? (
                                <span className="flex items-center gap-[0.5rem]">
                                    <span className="min-w-[8px] min-h-[8px] rounded-full bg-[#009688]"></span>
                                    <span className="lg:text-[1.8rem] text-[1.2rem] truncate">Active</span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-[0.5rem]">
                                    <span className="min-w-[8px] min-h-[8px] rounded-full bg-red-100"></span>
                                    <span className="lg:text-[1.8rem] text-[1.2rem] truncate">Expired</span>
                                </span>
                            )}
                        </span>
                    </div>
                    {/* Date of Registration */}
                    <div className="w-full gap-[15px] py-[2rem] border-b border-b-gray-e5 items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Date of Registration</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{dor}</span>
                    </div>
                    {/* Plan */}
                    <div className="w-full gap-[15px] py-[2rem] items-center text-black-100 flex justify-between">
                        <span className="lg:text-[1.8rem] text-[1.2rem]">Plan</span>
                        <span className="lg:text-[1.8rem] text-[1.2rem]">{plan}</span>
                    </div>
                    {/* Remind Expired members */}
                    {
                        status? '' : <CustomButton AddClassName='w-full text-[1.2rem] lg:text-[1.8rem] py-[2rem] lg:py-[2.5rem]' primaryColored>Remind</CustomButton>
                    }
                </div>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showMemberDetailsModal: null
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default MemberDetailsModal;