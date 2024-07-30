// react
import { useState } from "react";
// react icons
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const CustomPasswordInput = ({inputName, inputLabel, baseWidth}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className={`flex w-full ${baseWidth === 'full'? '' : 'md:w-[50%]'} flex-col md:gap-[1.5rem] gap-[0.5rem]`}>
            <label htmlFor={inputName} className="text-[1.4rem] md:text-[2rem] text-black-100">{inputLabel}</label>
            <div className="relative w-full">
                <input required className="border w-full border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type={showPassword ? 'text' : 'password'} name={inputName} id={inputName} />
                <button
                    type="button"
                    onClick={handleToggle}
                    className="absolute right-[15px] md:right-[40px] top-[50%] transform translate-y-[-50%] cursor-pointer"
                >
                    {showPassword ? <IoMdEye className="md:text-[2.8rem] text-[2.1rem] text-gray-c4" /> : <IoMdEyeOff className="md:text-[2.8rem] text-[2.1rem] text-gray-c4" />}
                </button>
            </div>
        </div>
    )
}

export default CustomPasswordInput;