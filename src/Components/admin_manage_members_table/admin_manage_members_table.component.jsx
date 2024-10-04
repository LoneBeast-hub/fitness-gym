import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from "../../App";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoBanOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReactPaginate from 'react-paginate';
// styles
import './admin_manage_members_table.styles.css';
import EmptyManageMembersMessage from '../empty_manage_members_message/empty_manage_members_message.component';

const AdminManageMembersTable = ({ AddClassName }) => {
    const { contextState, setContextState } = useContext(MyContext);
    const [filteredMembers, setFilteredMembers] = useState(contextState.membersData);
    const [currentPage, setCurrentPage] = useState(0);
    const membersPerPage = 9;

    useEffect(() => {
        const applyFilters = () => {
            let members = contextState.membersData;

            // Apply search filter
            if (contextState.filters.search) {
                members = members.filter(member => 
                    member.fullname.toLowerCase().includes(contextState.filters.search.toLowerCase()) ||
                    member.username.toLowerCase().includes(contextState.filters.search.toLowerCase()) ||
                    member.email.toLowerCase().includes(contextState.filters.search.toLowerCase()) ||
                    member.phone.includes(contextState.filters.search)
                );
            }

            // Apply date filter
            if (contextState.filters.fromDate) {
                members = members.filter(member =>
                    new Date(member.dor) >= new Date(contextState.filters.fromDate)
                );
            }

            if (contextState.filters.toDate) {
                members = members.filter(member =>
                    new Date(member.dor) <= new Date(contextState.filters.toDate)
                );
            }

            // Apply status filter
            if (contextState.filters.status !== 'All') {
                const status = contextState.filters.status === 'Active';
                members = members.filter(member => member.status === status);
            }

            setFilteredMembers(members);
        };

        applyFilters();
    }, [contextState.filters, contextState.membersData]);

    // Calculate the offset for the current page
    const offset = currentPage * membersPerPage;

    // Get the current page of members
    const currentMembers = filteredMembers.slice(offset, offset + membersPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <>
            {currentMembers.length?
            <div className="">
                {/* desktop table */}
                <div className={`border-[0.5px] ${AddClassName} md:block w-[90%] mx-auto hidden border-b-0 overflow-x-scroll border-gray-e5 rounded-[0.5rem]`}>
                    <table className="w-full table-fixed min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-fa border-b-[0.5px] border-gray-e5">
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] pl-[2.5rem] xl:pl-[5rem]">ID</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Name</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Username</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Phone</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Email</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Status</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">D.O.R</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem]">Plan</td>
                                <td className="text-[1.6rem] text-black-100 py-[2.8rem] pr-[2.5rem] xl:pr-[5rem] text-right">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {currentMembers.map(({ userid, fullname, username, phone, email, status, dor, plan }, index) => (
                                <tr className="border-b-[0.5px] border-gray-e5" key={index}>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] pl-[2.5rem] xl:pl-[5rem] truncate">{userid}</td>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{fullname}</td>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{username}</td>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{phone}</td>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{email}</td>
                                    <td className="text-black-100 py-[2.8rem] truncate">
                                        {status ? (
                                            <span className="flex items-center gap-[0.5rem]">
                                                <span className="min-w-[8px] min-h-[8px] rounded-full bg-[#009688]"></span>
                                                <span className="text-[1.6rem] truncate">Active</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-[0.5rem]">
                                                <span className="min-w-[8px] min-h-[8px] rounded-full bg-red-100"></span>
                                                <span className="text-[1.6rem] truncate">Expired</span>
                                            </span>
                                        )}
                                    </td>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{dor}</td>
                                    <td className="text-[1.6rem] text-black-100 py-[2.8rem] truncate">{plan}</td>
                                    <td className="text-gray-c4 py-[2.8rem] pr-[2.5rem] xl:pr-[5rem]">
                                        <div className="flex items-center gap-[0.5px] justify-end">
                                            <IoMdEye onClick={() => {
                                                setContextState((prevValues) => ({
                                                    ...prevValues,
                                                    showMemberDetailsModal: {
                                                        userid, fullname, username, phone, email, status, dor, plan
                                                    }
                                                }))
                                            }} className="text-[1.9rem] cursor-pointer" />
                                            <IoBanOutline onClick={() => {
                                                setContextState((prevValues) => ({
                                                    ...prevValues,
                                                    showDisableMemberModal: true
                                                }))
                                            }} className="text-[1.9rem] cursor-pointer" />
                                            <HiOutlineTrash onClick={() => {
                                                setContextState((prevValues) => ({
                                                    ...prevValues,
                                                    showDeleteMemberModal: true,
                                                    memberIdToDelete: userid
                                                }))
                                            }} className="text-[1.9rem] text-red-100 cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Mobile Table */}
                <div className="block w-full table-auto md:hidden">
                    {currentMembers.map(({ userid, fullname, username, phone, email, status, dor, plan }, index) => {
                        return(
                            <div className="border-t-[0.5px] px-[5%] items-center justify-between flex py-[1.9rem] w-full border-gray-f2" key={index}>
                                {/* left side */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <span className="text-black-100 text-[1.4rem]">{fullname}</span>
                                    {/* email */}
                                    <span className="text-black-100 text-[1.4rem]">{email}</span>
                                </div>
                                {/* right side */}
                                <div className="flex gap-[1rem] items-center">
                                    {/* status and date */}
                                    <div className="flex flex-col gap-[0.3rem] items-end">
                                        {/* status */}
                                        <div className="text-black-100">
                                            {status ? (
                                                <span className="flex items-center gap-[0.5rem]">
                                                    <span className="min-w-[8px] min-h-[8px] rounded-full bg-[#009688]"></span>
                                                    <span className="text-[1.2rem] truncate">Active</span>
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-[0.5rem]">
                                                    <span className="min-w-[8px] min-h-[8px] rounded-full bg-red-100"></span>
                                                    <span className="text-[1.2rem] truncate">Expired</span>
                                                </span>
                                            )}
                                        </div>
                                        {/* date */}
                                        <span className="text-black-100 text-[1.2rem]">{dor}</span>
                                    </div>
                                    {/* action menu */}
                                    <div className='relative'>
                                        <BsThreeDotsVertical onClick={() => {
                                            setContextState((prevValues) => ({
                                                ...prevValues,
                                                showActionsModal: !contextState.showActionsModal? ({userid}) : null
                                            }))
                                        }} className='text-black-2 text-[1.6rem]' />
                                        {
                                            contextState.showActionsModal?
                                                contextState.showActionsModal.userid === userid?
                                                    <div className='flex gap-[0.3rem] right-0 top-[110%] z-10 shadow-md p-[1rem] bg-white flex-col absolute'>
                                                        <IoMdEye onClick={() => {
                                                            setContextState((prevValues) => ({
                                                                ...prevValues,
                                                                showMemberDetailsModal: {
                                                                    userid, fullname, username, phone, email, status, dor, plan
                                                                }
                                                            }))
                                                        }} className="text-black-100 text-[1.9rem] cursor-pointer" />
                                                        <IoBanOutline onClick={() => {
                                                            setContextState((prevValues) => ({
                                                                ...prevValues,
                                                                showDisableMemberModal: true,
                                                                memberIdToDisable: userid
                                                            }))
                                                        }} className="text-black-100 text-[1.9rem] cursor-pointer" />
                                                        <HiOutlineTrash onClick={() => {
                                                            setContextState((prevValues) => ({
                                                                ...prevValues,
                                                                showDeleteMemberModal: true,
                                                                memberIdToDelete: userid
                                                            }))
                                                        }} className="text-[1.9rem] text-red-100 cursor-pointer" />
                                                    </div>
                                                :
                                                    ''
                                            :
                                                ''
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* Pagination */}
                <ReactPaginate
                    previousLabel={<IoIosArrowBack />}
                    nextLabel={<IoIosArrowForward />}
                    breakLabel={'...'}
                    pageCount={Math.ceil(contextState.membersData.length / membersPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousClassName={'pagination__prev'}
                    nextClassName={'pagination__next'}
                    disabledClassName={'pagination__disabled'}
                />
            </div>
            : <EmptyManageMembersMessage />}
        </>
    );
}

export default AdminManageMembersTable;