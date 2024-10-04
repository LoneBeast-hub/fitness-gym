// components
import DashboardHeader from "../../Components/dashboard_header/dashboard_header.component";
// react icons
import { IoIosPeople } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { LiaDumbbellSolid } from "react-icons/lia";
import AdminChartsContainer from "../../Components/admin_charts_container/admin_charts_container.component";
import AdminActivitiesAreaChart from "../../Components/admin_activities_area_chart/admin_activities_area_chart.component";

const AdminDashboardPage = () => {
    const adminDashboardRoute = '/admin_dashboard';
    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='Dasboard' routeTo={adminDashboardRoute} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Dashboard</p>
                {/* Metrics row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2.5rem] md:gap-[2rem] w-full">
                    {/* Total Members */}
                    <div className="flex flex-col bg-primary-100 gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-[#fba267] w-[3.2rem] md:w-[4.5rem] rounded-full h-[3.2rem] md:h-[4.5rem] flex items-center justify-center">
                            <IoIosPeople className="text-[2rem] md:text-[3rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] md:text-[2rem] text-white font-bold">Total Members</p>
                        {/* value */}
                        <p className="text-white font-bold"><span className="text-[1.9rem] md:text-[3rem]">500</span></p>
                    </div>
                    {/* Trainer */}
                    <div className="flex flex-col bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-green-100 w-[3.2rem] md:w-[4.5rem] rounded-full h-[3.2rem] md:h-[4.5rem] flex items-center justify-center">
                            <IoIosPeople className="text-[2rem] md:text-[3rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] md:text-[2rem] text-black-100">Trainer</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[1.9rem] md:text-[3rem]">10</span></p>
                    </div>
                    {/* Total Revenue */}
                    <div className="flex flex-col bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-red-100 w-[3.2rem] md:w-[4.5rem] rounded-full h-[3.2rem] md:h-[4.5rem] flex items-center justify-center">
                            <GoChecklist className="text-[1.8rem] md:text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] md:text-[2rem] text-black-100">Total Revenue</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[1.9rem] md:text-[3rem]">N10M</span></p>
                    </div>
                    {/* Available Equipment */}
                    <div className="flex flex-col bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-pending w-[3.2rem] md:w-[4.5rem] rounded-full h-[3.2rem] md:h-[4.5rem] flex items-center justify-center">
                            <LiaDumbbellSolid className="text-[1.8rem] md:text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] md:text-[2rem] text-black-100">Available Equipment</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[1.9rem] md:text-[3rem]">50</span></p>
                    </div>
                </div>
                {/* Registered members charts */}
                <AdminChartsContainer />
                {/* Activities Chart */}
                <AdminActivitiesAreaChart />
            </div>
        </div>
    )
}

export default AdminDashboardPage;