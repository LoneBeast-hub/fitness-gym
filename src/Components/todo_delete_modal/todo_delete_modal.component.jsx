// components
import CustomButton from "../custom_button/custom_button.component";
// use context
import { useContext } from "react";
import { MyContext } from "../../App";
// react icons
import { LiaTimesSolid } from "react-icons/lia";

const TodoDeleteModal = () => {
    const {contextState, setContextState} = useContext(MyContext);

    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0">
            <div className="w-[90%] items-center relative flex flex-col md:w-[55%] md:max-w-[787px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[7%] rounded-[5px] bg-white">
                {/* title */}
                <p className="text-[2.4rem] md:text-[3.6rem] text-red-100 font-bold mb-[1.8rem]">Delete List</p>
                {/* text */}
                <p className="text-[1.6rem] md:text-[2.8rem] text-black-100 font-medium mb-[2.2rem]">Are you sure you want to delete this particular list?</p>
                {/* buttons */}
                <div className="flex w-full md:w-[80%] gap-[1.7rem] md:self-end">
                    <CustomButton clickFunction={() => {
                        setContextState((prevValues) => ({
                            ...prevValues,
                            showTodoDeleteModal: false
                        }))
                    }} AddClassName='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' grayColored><span className="text-[1.6rem] md:text-[2rem]">No</span></CustomButton>
                    <CustomButton clickFunction={() => {
                        setContextState((prevValues) => {
                            const updatedToDoList = prevValues.toDoListData.filter((todo) => todo.id !== contextState.todoIdToDelete);
                            return {
                                ...prevValues,
                                toDoListData: updatedToDoList,
                                successMessage: 'Item Successfully Deleted!',
                                showSuccessModal: true,
                                showTodoDeleteModal: false,
                            };
                        });
                    }} AddClassName='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' redColored><span className="text-[1.6rem] md:text-[2rem]">Delete</span></CustomButton>
                </div>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showTodoDeleteModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default TodoDeleteModal;