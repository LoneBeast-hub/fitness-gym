// components
import CustomButton from "../../Components/custom_button/custom_button.component";
import DashboardHeader from "../../Components/dashboard_header/dashboard_header.component";
// react icons
import {FaPlus} from 'react-icons/fa'
import AdminManageMembersTable from "../../Components/admin_manage_members_table/admin_manage_members_table.component";
import ManageMembersFilters from "../../Components/manage_members_filters/manage_members_filters.component";
// context api
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";

const AdminManageMembersPage = () => {
    const { setContextState } = useContext(MyContext);
    const adminDashboardRoute = '/admin_dashboard';

    useEffect(() => {
        const getMembersListData = async () => {
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
                        // get members list
                        const membersResult = await fetch(`https://goodnessgfc.com.ng/gymserver/admin/managemembers/members.php?userid=${userId}`, {
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",
                                "Accesstoken": accessToken
                            }
                        });

                        if (!membersResult.ok) {
                            // handle non-2xx HTTP responses
                            throw new Error('Failed to fetch Members Data');
                        }

                        const membersResponse = await membersResult.json();
                        console.log(membersResponse)
                        // save members data to context state
                        setContextState((prevState) => ({
                            ...prevState,
                            membersData: membersResponse.membersinfo,
                        }));
                        // sessionStorage.setItem('membersData', JSON.stringify(membersResponse.membersinfo));
                    } else {
                        console.log('Error: Cannot load Members data, Reason: User cannot be validated!');
                    }
                } else {
                    console.log('Error: Cannot load Members data, Reason: User cannot be validated!');
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        getMembersListData();
    }, []);

    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='Manage Members' routeTo={`${adminDashboardRoute}/manage_members`} />
            {/* body */}
            <div className="">
                {/* header */}
                <div className="w-[90%] mx-auto flex mt-[1rem] gap-[1.7rem] xl:gap-0 xl:items-center justify-between mb-[1.8rem] md:mb-[2.1rem] flex-col xl:flex-row">
                    {/* heading */}
                    <p className="text-primary-100 font-bold text-[2rem] md:text-[3.2rem]">Manage Members</p>
                    {/* Manage members filter and add */}
                    <div className="flex gap-[7px] max-h-fit items-center">
                        {/* filters */}
                        <ManageMembersFilters />
                        {/* add to list */}
                        <CustomButton clickFunction={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showMemberAddModal: true
                            }))
                        }} AddClassName='h-fit flex gap-[0.54rem] md:gap-[1rem] py-[0.8rem] md:py-[1.5rem] md:px-[2.2rem] px-[1rem] items-center' primaryColored>
                            <FaPlus className="text-[0.8rem] md:text-[1.5rem]" /><span className="text-[1.2rem] md:text-[1.8rem] md:font-medium">Add Member</span>
                        </CustomButton>
                    </div>
                </div>
                {/* Manage members table */}
                <AdminManageMembersTable />
            </div>
        </div>
    )
}

export default AdminManageMembersPage;