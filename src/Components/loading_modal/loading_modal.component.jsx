// hashloader
import HashLoader from 'react-spinners/HashLoader';
// context
import { MyContext } from "../../App";
import { useContext } from "react";

const LoadingModal = () => {
    const { contextState } = useContext(MyContext);
    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0">
            <div className="w-[90%] items-center relative flex flex-col md:w-[55%] md:max-w-[440px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[7%] rounded-[5px] bg-white">
                <div>
                    <HashLoader
                        color={"#ff6600"}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader" />
                </div>
                <p className='text-[1.4rem] pt-[1rem] md:text-[1.8rem]'>{contextState.loadingModalMessage}</p>
            </div>
        </div>
    )
}

export default LoadingModal;