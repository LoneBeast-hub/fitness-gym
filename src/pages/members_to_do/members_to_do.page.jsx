// components
import DashboardHeader from "../../Components/dashboard_header/dashboard_header.component";
// use context
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import MembersToDoList from "../../Components/members_to_do_list/members_to_do_list.component";
import CustomButton from "../../Components/custom_button/custom_button.component";
import { FaPlus } from "react-icons/fa";
// css
import '../../lodstyles.css';

const MembersToDoPage = () => {
    const { contextState, setContextState } = useContext(MyContext);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterClick = (filter) => {
        const newSelectedFilters = [...selectedFilters]; // Copy of selected filters
        const filterIndex = newSelectedFilters.indexOf(filter);
    
        if (filterIndex !== -1) {
          // Filter already selected, deselect it
          newSelectedFilters.splice(filterIndex, 1);
        } else {
          // Filter not selected, add it
          newSelectedFilters.push(filter);
        }
    
        setSelectedFilters(newSelectedFilters);
    }

    const filterByProgress = (toDo) => {
        // Check if any filters are selected
        if (selectedFilters.length === 0) {
            return true; // Render all entries if no filter is selected
        }
        switch (true) {
          case selectedFilters.includes('just started') && toDo.progress <= 10:
            return true;
          case selectedFilters.includes('pending') && toDo.progress >= 11 && toDo.progress <= 99:
            return true;
          case selectedFilters.includes('completed') && toDo.progress === 100:
            return true;
          default:
            return false;
        }
    }

    const filteredToDoList = contextState.toDoListData.filter(filterByProgress);
    const membersDashboardRoute = '/members_dashboard';

    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='To-do' routeTo={`${membersDashboardRoute}/to_do`} />
            {/* body */}
            <div className="">
                {/* header */}
                <div className="w-[90%] mx-auto flex mt-[1rem] gap-[1.7rem] lg:gap-0 lg:items-center justify-between mb-[1.8rem] md:mb-[2.1rem] flex-col lg:flex-row">
                    {/* heading */}
                    <p className="text-primary-100 font-bold text-[2rem] md:text-[3.2rem]">To-do</p>
                    {/* todo filter and add */}
                    <div className="flex gap-[7px] max-h-fit items-center">
                        {/* filters */}
                        <div className="max-h-fit flex gap-[7px] md:[13px]">
                            <button
                                className={`md:px-[2rem] max-h-fit border gap-[3px] md:gap-[5px] flex items-center px-[0.7rem] py-[0.8rem] md:py-[1.5rem] text-black-100 bg-gray-fa ${selectedFilters.includes('just started') ? 'border-red-100' : 'border-gray-fa'}`}
                                onClick={() => handleFilterClick('just started')}
                            >
                                <span className="w-[6px] h-[6px] md:w-[11px] md:h-[11px] rounded-full bg-red-100"></span>
                                <span className="text-[1.2rem] md:text-[2rem]">Just Started</span>
                            </button>
                            <button
                                className={`md:px-[2rem] max-h-fit border gap-[3px] md:gap-[5px] flex items-center px-[0.7rem] py-[0.8rem] md:py-[1.5rem] text-black-100 bg-gray-fa ${selectedFilters.includes('pending') ? 'border-pending' : 'border-gray-fa'}`}
                                onClick={() => handleFilterClick('pending')}
                            >
                                <span className="w-[6px] h-[6px] md:w-[11px] md:h-[11px] rounded-full bg-pending"></span>
                                <span className="text-[1.2rem] md:text-[2rem]">Pending</span>
                            </button>
                            <button
                                className={`md:px-[2rem] max-h-fit border gap-[3px] md:gap-[5px] flex items-center px-[0.7rem] py-[0.8rem] md:py-[1.5rem] text-black-100 bg-gray-fa ${selectedFilters.includes('completed') ? 'border-green-100' : 'border-gray-fa'}`}
                                onClick={() => handleFilterClick('completed')}
                            >
                                <span className="w-[6px] h-[6px] md:w-[11px] md:h-[11px] rounded-full bg-green-100"></span>
                                <span className="text-[1.2rem] md:text-[2rem]">Completed</span>
                            </button>
                        </div>
                        {/* add to list */}
                        <CustomButton clickFunction={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showTodoAddModal: true
                            }))
                        }} AddClassName='h-fit flex gap-[0.54rem] md:gap-[1rem] py-[0.8rem] md:py-[1.5rem] md:px-[2.2rem] px-[1rem] items-center' primaryColored>
                            <FaPlus className="text-[0.8rem] md:text-[1.5rem]" /><span className="text-[1.2rem] md:text-[2rem] md:font-medium">Add to list</span>
                        </CustomButton>
                    </div>
                </div>
                <MembersToDoList AddClassName='md:w-[90%] mx-auto' filteredList={filteredToDoList} />
            </div>
        </div>
    )
}

export default MembersToDoPage;