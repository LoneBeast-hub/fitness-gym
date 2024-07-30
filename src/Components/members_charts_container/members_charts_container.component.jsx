import MembersActivitiesAreaChart from "../members_activities_area_chart/members_activities_area_chart.component"
import MembersCaloriesDoughnutChart from "../members_calories_doughnut_chart/members_calories_doughnut_chart.component";
// css
import '../../lodstyles.css';

const MembersChartsContainer = () => {
    return(
        <div id="lodComponent" className="flex md:gap-[2%] gap-[2.5rem] flex-col md:flex-row mt-[2.3rem]">
            <MembersActivitiesAreaChart />
            <MembersCaloriesDoughnutChart />
        </div>
    )
}

export default MembersChartsContainer;