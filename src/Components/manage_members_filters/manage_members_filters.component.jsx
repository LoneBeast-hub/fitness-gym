import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
// react icons
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// date range picker
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import CustomButton from '../custom_button/custom_button.component';

const ManageMembersFilters = () => {
    const { contextState, setContextState } = useContext(MyContext);
    const [search, setSearch] = useState('');
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [status, setStatus] = useState('All');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setContextState((prevState) => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                search: e.target.value,
            },
        }));
    };

    const handleDateChange = (ranges) => {
        const { selection } = ranges;
        setDateRange([selection]);
        setContextState((prevState) => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                fromDate: selection.startDate,
                toDate: selection.endDate,
            },
        }));
    };

    const handleToDateChange = (e) => {
        setContextState((prevState) => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                toDate: e.target.value,
            },
        }));
    };

    const handleStatusChange = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value);
        setContextState((prevState) => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                status: e.target.value,
            },
        }));
    };

    return (
        <div className="max-h-fit items-center flex gap-[7px] md:[13px]">
            <div className="bg-gray-fa max-w-[117px] lg:max-w-fit flex items-center gap-[0.5rem] md:gap-[1rem] w-fit py-[0.9rem] px-[1rem] md:py-[1.5rem] md:px-[2rem]">
                <FaSearch className='text-gray-c4 min-w-[1.4rem] text-[1.4rem] lg:text-[1.8rem]' />
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={search} 
                    onChange={handleSearchChange} 
                    className="text-[1.2rem] w-full font-medium lg:font-normal lg:text-[2rem] text-gray-c4 bg-transparent"
                />
            </div>

            <div className='relative'>
                <CustomButton clickFunction={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showDateRangePicker: !contextState.showDateRangePicker
                    }))
                }} AddClassName={`${contextState.showDateRangePicker? 'text-primary-100 border-primary-100' : ''} border border-gray-f2 flex items-center gap-[0.3rem] px-[1rem] md:px-[2rem] py-[1rem] md:py-[1.25rem]`} grayColored>
                    <span className='text-[1.4rem] lg:text-[1.8rem]'>Date</span>
                    {contextState.showDateRangePicker? <IoIosArrowUp className='text-[1.2rem] md:text-[1.8rem]' /> : <IoIosArrowDown className='text-[1.2rem] md:text-[1.8rem]' />}
                </CustomButton>
                {
                    contextState.showDateRangePicker?
                        <div className="custom-date-range-picker top-[120%] absolute trasform translate-x-[-23%]">
                            <DateRangePicker
                                ranges={dateRange}
                                onChange={handleDateChange}
                                className="date-range-picker"
                            />
                        </div>
                    :
                        ''
                }
            </div>

            <select value={status} onChange={handleStatusChange} className="text-[1.2rem] rounded-[5px] lg:text-[1.8rem] p-[1rem] bg-gray-f2 text-black-100">
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
            </select>
        </div>
    );
};

export default ManageMembersFilters;