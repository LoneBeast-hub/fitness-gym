// react icons
import { FaCircleCheck } from "react-icons/fa6";
// context api
import { MyContext } from "../../App";
import { useContext } from "react";
import CustomButton from "../custom_button/custom_button.component";

const SuccessModal = ({successMsg}) => {
    const {setContextState} = useContext(MyContext);

    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0">
            <div className="w-[90%] items-center relative flex flex-col md:w-[55%] md:max-w-[740px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[7%] rounded-[5px] bg-white">
                {/* title */}
                <p className="text-[1.8rem] md:text-[3.2rem] text-primary-100 font-bold mb-[1.8rem]">Successful</p>
                {/* success icon */}
                <FaCircleCheck className="md:text-[23rem] text-[11rem] text-primary-100" />
                {/* success message */}
                <p className="text-[1.6rem] mt-[20px] md:text-[2.8rem] text-black-100 font-medium mb-[2.2rem]">{successMsg}</p>
                {/* button */}
                <CustomButton clickFunction={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showSuccessModal: false,
                    }))
                }} AddClassName='w-full px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' primaryColored><span className="text-[1.6rem] md:text-[2rem]">Proceed</span></CustomButton>
            </div>
        </div>
    )
}

export default SuccessModal;