import AdminMembersDoughnutChart from "../admin_members_doughnut_chart/admin_members_doughnut_chart.component";
import AdminMembersGenderChart from "../admin_members_gender_chart/admin_members_gender_chart.component";

const AdminChartsContainer = () => {
    return(
        <div className="flex md:gap-[2%] gap-[2.5rem] flex-col md:flex-row mt-[2.3rem]">
            <AdminMembersGenderChart />
            <AdminMembersDoughnutChart />
        </div>
    )
}

export default AdminChartsContainer;