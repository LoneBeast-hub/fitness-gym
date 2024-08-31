// react icons
import { LiaTimesSolid } from "react-icons/lia";
// context api
import { useContext, useState } from "react";
import { MyContext } from "../../App";
// components
import CustomButton from "../custom_button/custom_button.component";

const TodoAddModal = () => {
    const {contextState, setContextState} = useContext(MyContext);
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [reminder, setReminder] = useState('');
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // display updating indicator
        setContextState((prevValues) => ({
            ...prevValues,
            loadingModalMessage: 'Adding Todo...',
            showLoadingModal: true
        }))

        // code to handle submit will go here
        try {
            // check if userId exists in sessionStorage
            const userId = sessionStorage.getItem('userId');
            const accessToken = sessionStorage.getItem('accessToken');

            if (userId) {
                // get user profile
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

                // check if userId in app matches user id in DB
                if (userId === userProfileResponse.userprofile.userid) {
                    // add todo
                    const userTodoAddResult = await fetch("https://goodnessgfc.com.ng/gymserver/customer/todo/add_todo.php", {
                        method: 'POST',
                        body: JSON.stringify({ 
                            'userid': userId,
                            'task_desc': taskDescription,
                            'due_date': dueDate,
                            'due_time': reminder
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Accesstoken": accessToken
                        }
                    });

                    if (!userTodoAddResult.ok) {
                        // handle non-2xx HTTP responses
                        throw new Error('Failed to Add Todo');
                    }

                    const userTodoAddResponse = await userTodoAddResult.json();
                    console.log(userTodoAddResponse)
                } else {
                    // stop displaying updating indicator
                    setContextState((prevValues) => ({
                        ...prevValues,
                        loadingModalMessage: '',
                        showLoadingModal: false
                    }))
                    console.log('Error: Cannot Add Todo data, Reason: User cannot be validated!');
                }
            } else {
                // stop displaying updating indicator
                setContextState((prevValues) => ({
                    ...prevValues,
                    loadingModalMessage: '',
                    showLoadingModal: false
                }))
                console.log('Error: Cannot Add Todo data, Reason: User cannot be validated!');
            }

            // after submission, clear form
            setTaskDescription('');
            setDueDate('');
            setReminder('');

            // stop displaying updating indicator
            setContextState((prevValues) => ({
                ...prevValues,
                loadingModalMessage: '',
                showLoadingModal: false
            }))

            // then, set success message
            setContextState((prevValues) => ({
                ...prevValues,
                successMessage: 'Item Successfully Added!'
            }))

            // then, show success message
            setContextState((prevValues) => ({
                ...prevValues,
                showSuccessModal: true,
                showTodoAddModal: false
            }))
        } catch(error) {
            // stop displaying updating indicator
            setContextState((prevValues) => ({
                ...prevValues,
                loadingModalMessage: '',
                showLoadingModal: false
            }))
            console.error("Error:", error);
        }
    }

    return(
        <div className="w-[100%] min-h-[100vh] py-[5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] absolute z-10 top-0 left-0 overflow-y-auto">
            <div className="w-[90%] relative md:w-[85%] md:max-w-[993px] box-border pt-[2.5rem] md:pt-[5rem] pb-[3rem] md:pb-[4rem] px-[7%] md:px-[4%] rounded-[5px] bg-white">
                {/* Title */}
                <p className="text-primary-100 text-[2.4rem] text-center md:text-left md:text-[3.2rem] font-bold">Add To-do List</p>
                {/* Add Form */}
                <form onSubmit={handleFormSubmit} className="mt-[2.4rem] flex flex-col md:mt-[2.2rem]" action="#">
                    {/* Task Description input */}
                    <div className="flex w-full flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="task_description" className="text-[1.4rem] md:text-[2rem] text-black-100">Task</label>
                        <input onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} required value={taskDescription} className="border border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="task_description" id="task_description" placeholder="Enter description" />
                    </div>
                    {/* Due Date input */}
                    <div className="flex w-full mt-[2rem] md:mt-[3rem] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="due_date" className="text-[1.4rem] md:text-[2rem] text-black-100">Due Date</label>
                        <input onChange={(e) => {
                            setDueDate(e.target.value)
                        }} required value={dueDate} className="border leading-normal border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="date" name="due_date" id="due_date" />
                    </div>
                    {/* Reminder input */}
                    <div className="flex w-full mt-[2rem] md:mt-[3rem] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="reminder" className="text-[1.4rem] md:text-[2rem] text-black-100">Reminder</label>
                        <select onChange={(e) => {
                            setReminder(e.target.value)
                        }} required value={reminder} className="border border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="date" name="reminder" id="reminder">
                            <option value="A day before">A day before</option>
                            <option value="Two days before">Two days before</option>
                        </select>
                    </div>
                    {/* buttons */}
                    <div className="flex w-full mt-[1.6rem] md:mt-[3rem] md:w-[50%] gap-[1.7rem] md:gap-[2.1rem] md:self-end">
                        <CustomButton clickFunction={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showTodoAddModal: false
                            }))
                        }} AddClassName='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' grayColored><span className="text-[1.6rem] md:text-[2rem]">Cancel</span></CustomButton>
                        <CustomButton setType='submit' AddClassName='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' primaryColored><span className="text-[1.6rem] md:text-[2rem]">Add</span></CustomButton>
                    </div>
                </form>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showTodoAddModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default TodoAddModal;