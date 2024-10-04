// context api
import { MyContext } from "../../App";
import { useContext, useState } from "react";
// react icons
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "../custom_button/custom_button.component";

const AdminMemberAddModal = () => {
    const {setContextState} = useContext(MyContext);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [plan, setPlan] = useState('');

    function generateRandomId() {
        // Generates a random 8-character alphanumeric string
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    // Notification submission handler
    const handleAddMemberSubmit = async (e) => {
        e.preventDefault();

        // submit code
        try {
            // check if userId exists in sessionStorage
            const userId = sessionStorage.getItem('userId');
            const accessToken = sessionStorage.getItem('accessToken');

            if (userId === '8219-3420-34564-7483') {
                // get Admin User profile
                const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/admin/updateprofile/getuserprofile.php", {
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

                // check if userId in app matches user id in DB
                if (userId === userProfileResponse.userprofile.userid) {
                    // add member to list
                    const addMemberResult = await fetch(`https://goodnessgfc.com.ng/gymserver/admin/managemembers/addmember.php`, {
                        method: 'POST',
                        body: JSON.stringify({
                            'userid': userId,
                            'fullname': fullName,
                            'email': email,
                            'amount': plan,
                            'phone': phoneNumber,
                            'tier': '',
                            'gender': '',
                            'username': username
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Accesstoken": accessToken
                        }
                    });

                    if (!addMemberResult.ok) {
                        // handle non-2xx HTTP responses
                        throw new Error('Failed to fetch Members Data');
                    }

                    const addMemberResponse = await addMemberResult.json();
                    console.log(addMemberResponse)
                } else {
                    console.log('Error: Cannot Add Member data, Reason: User cannot be validated!');
                }
            } else {
                console.log('Error: Cannot Add Member data, Reason: User cannot be validated!');
            }
        } catch (error) {
            console.error("Error:", error);
        }

        // after submission, clear form
        setFullName('');
        setUsername('');
        setEmail('');
        setPhoneNumber('');
        setPassword('')
        setDateOfRegistration('')
        setPlan('');

        // then, set success message
        setContextState((prevValues) => ({
            ...prevValues,
            successMessage: 'The login details will be sent to the attached mail'
        }))
        // then, show success message
        setContextState((prevValues) => ({
            ...prevValues,
            showSuccessModal: true,
            showMemberAddModal: false
        }))
    }

    return(
        <div className="w-[100%] min-h-[100vh] py-[5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] absolute z-10 top-0 left-0 overflow-y-auto">
            <div className="w-[90%] relative flex flex-col items-center md:w-[55%] md:max-w-[1096px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[3.5%] rounded-[5px] bg-white">
                {/* title */}
                <p className="text-[1.8rem] self-start md:text-[3.2rem] text-primary-100 font-bold mb-[1.8rem]">Add Members</p>
                {/* form */}
                <form onSubmit={handleAddMemberSubmit} className="mt-[14px] flex flex-col w-full md:mt-[32px]" action="#">
                    {/* flex */}
                    <div className="flex flex-col gap-[2rem] md:flex-row">
                        {/* Full Name input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="full_name" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Full Name</label>
                            <input onChange={(e) => {
                                setFullName(e.target.value)
                            }} value={fullName} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="full_name" id="full_name" />
                        </div>
                        {/* Username input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="username" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Username <span className="text-[1.4rem] md:text-[2rem] text-primary-100">(Optional)</span></label>
                            <input onChange={(e) => {
                                setUsername(e.target.value)
                            }} value={username} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="username" id="username" />
                        </div>
                    </div>
                    {/* flex */}
                    <div className="flex flex-col gap-[2rem] mt-[2rem] md:flex-row">
                        {/* Email input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="email" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Email</label>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} value={email} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="email" name="email" id="email" />
                        </div>
                        {/* Phone number input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="phone_number" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Phone Number</label>
                            <input onChange={(e) => {
                                setPhoneNumber(e.target.value)
                            }} value={phoneNumber} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="number" name="phone_number" id="phone_number" />
                        </div>
                    </div>
                    {/* Password */}
                    <div className="flex w-full mt-[2rem] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="password" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Password</label>
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} value={password} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="password" name="password" id="password" />
                    </div>
                    {/* note */}
                    <p className="text-primary-100 font-medium text-[1.2rem] md:text-[1.8rem] mt-[2rem] text-left">Note: The given information will create an account for this particular member</p>
                    {/* Date of Registration */}
                    <div className="flex w-full mt-[2rem] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="date_of_registration" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Date of Registration</label>
                        <input onChange={(e) => {
                            setDateOfRegistration(e.target.value)
                        }} value={dateOfRegistration} required className="border leading-normal border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="date" name="date_of_registration" id="date_of_registration" />
                    </div>
                    {/* Plan input */}
                    <div className="flex mt-[2rem] w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="plan" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Plan</label>
                        <select onChange={(e) => {
                            setPlan(e.target.value)
                        }} value={plan} required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" name="plan" id="plan">
                            <option value="" disabled>Select a plan</option>
                            <option value="3000">#3,000 - (Regular Daily)</option>
                            <option value="10000">#10,000 - (Classical Daily)</option>
                            <option value="17000">#17,000 - (Regular Monthly)</option>
                            <option value="30000">#30,000 - (Classical Monthly)</option>
                            <option value="125000">#125,000 - (Regular Yearly)</option>
                            <option value="210000">#210,000 - (Classical Yearly)</option>
                        </select>
                    </div>
                    <CustomButton setType='submit' AddClassName='self-end mt-[2rem] w-full md:w-fit py-[1.5rem] md:py-[2.5rem] md:px-[7.2rem]' primaryColored><span className="text-[1.6rem] md:text-[2.4rem]">Submit</span></CustomButton>
                </form>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showMemberAddModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>

    )
}

export default AdminMemberAddModal;