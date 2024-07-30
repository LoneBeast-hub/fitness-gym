// react icons
import { LiaTimesSolid } from "react-icons/lia";
// context api
import { useContext, useState } from "react";
import { MyContext } from "../../App";
// components
import CustomButton from "../custom_button/custom_button.component";

const TodoEditModal = () => {
    const {contextState, setContextState} = useContext(MyContext);
    const [taskDescription, setTaskDescription] = useState(contextState.currentTodoData.description);
    const [dueDate, setDueDate] = useState(contextState.currentTodoData.due_date);
    const [reminder, setReminder] = useState(contextState.currentTodoData.reminder);
    const [progress, setProgress] = useState(contextState.currentTodoData.progress);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const updatedTodo = {
            id: contextState.currentTodoData.id,
            description: taskDescription,
            due_date: dueDate,
            reminder: reminder,
            progress: progress,
        };

        // Update the to-do list with the edited to-do item
        setContextState((prevValues) => {
            const updatedToDoList = prevValues.toDoListData.map((todo) =>
                todo.id === contextState.currentTodoData.id ? updatedTodo : todo
            );
            return {
                ...prevValues,
                toDoListData: updatedToDoList,
                showTodoEditModal: false,
            };
        });
        
        // after submission, clear form
        setTaskDescription('');
        setDueDate('');
        setReminder('');
        setProgress(0);

        // then, set success message
        setContextState((prevValues) => ({
            ...prevValues,
            successMessage: 'Item Successfully Updated!'
        }))

        // then, show success message
        setContextState((prevValues) => ({
            ...prevValues,
            showSuccessModal: true,
            showTodoEditModal: false
        }))
    };

    return(
        <div className="w-[100%] min-h-[100vh] py-[5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] absolute z-10 top-0 left-0 overflow-y-auto">
            <div className="w-[90%] relative md:w-[85%] md:max-w-[993px] box-border pt-[2.5rem] md:pt-[5rem] pb-[3rem] md:pb-[4rem] px-[7%] md:px-[4%] rounded-[5px] bg-white">
                {/* Title */}
                <p className="text-primary-100 text-[2.4rem] text-center md:text-left md:text-[3.2rem] font-bold">Edit To-do List</p>
                {/* Edit Form */}
                <form onSubmit={handleUpdateSubmit} className="mt-[2.4rem] flex flex-col md:mt-[2.2rem]" action="#">
                    {/* Task Description input */}
                    <div className="flex w-full flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="task_description" className="text-[1.4rem] md:text-[2rem] text-black-100">Task</label>
                        <input value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} required className="border border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="task_description" id="task_description" />
                    </div>
                    {/* Due Date input */}
                    <div className="flex w-full mt-[2rem] md:mt-[3rem] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="due_date" className="text-[1.4rem] md:text-[2rem] text-black-100">Due Date</label>
                        <input value={dueDate} onChange={(e) => {
                            setDueDate(e.target.value)
                        }} required className="border leading-normal border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="date" name="due_date" id="due_date" />
                    </div>
                    {/* Progress input */}
                    <div className="flex w-full mt-[2rem] md:mt-[3rem] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="progress" className="text-[1.4rem] md:text-[2rem] text-black-100">Progress</label>
                        <input value={progress} onChange={(e) => {
                            setProgress(e.target.value)
                        }} max={100} min={10} required className="border leading-normal border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="number" name="progress" id="progress" />
                    </div>
                    {/* Reminder input */}
                    <div className="flex w-full mt-[2rem] md:mt-[3rem] flex-col items-start md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="reminder" className="text-[1.4rem] md:text-[2rem] text-black-100">Reminder</label>
                        <select value={reminder} onChange={(e) => {
                            setReminder(e.target.value)
                        }} required className="border border-gray-e5 w-full text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="date" name="reminder" id="reminder">
                            <option value="a_day_before">A day before</option>
                            <option value="two_days_before">Two days before</option>
                        </select>
                    </div>
                    {/* buttons */}
                    <div className="flex w-full mt-[1.6rem] md:mt-[3rem] md:w-[50%] gap-[1.7rem] md:gap-[2.1rem] md:self-end">
                        <CustomButton setType='button' clickFunction={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showTodoEditModal: false
                            }))
                        }} AddClassName='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' grayColored><span className="text-[1.6rem] md:text-[2rem]">Cancel</span></CustomButton>
                        <CustomButton setType='submit' AddClassName='w-[50%] px-[1rem] rounded-[0.5rem] py-[1.5rem] md:py-[2.5rem]' primaryColored><span className="text-[1.6rem] md:text-[2rem]">Update</span></CustomButton>
                    </div>
                </form>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showTodoEditModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default TodoEditModal;