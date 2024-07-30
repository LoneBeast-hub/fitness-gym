// react router
import { NavLink, useLocation } from "react-router-dom";
// react icons
import { BsGrid1X2 } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { BsMegaphone } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const MembersDashboardRoutes = () => {
    const membersDashboardRoute = '/members_dashboard';
    const location = useLocation();
    const isActiveLink = (path) => {
        return location.pathname.startsWith(path);
    };
    return(
        <div id="lodComponent" className="flex flex-col gap-[0.5rem]">
            <NavLink
                to={membersDashboardRoute}
                className={({ isActive }) => isActive && location.pathname === membersDashboardRoute ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <BsGrid1X2 className="text-[2rem]" />
                <span className="text-[1.8rem]">Dashboard</span>
            </NavLink>
            <NavLink
                to={`${membersDashboardRoute}/to_do`}
                className={({ isActive }) => isActive && location.pathname === `${membersDashboardRoute}/to_do` ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <RiFileList3Line className="text-[2.2rem]" />
                <span className="text-[1.8rem]">To-do</span>
            </NavLink>
            <NavLink
                to={`${membersDashboardRoute}/class_schedule`}
                className={({ isActive }) => isActive && location.pathname === `${membersDashboardRoute}/class_schedule` ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <FaRegClock className="text-[2.2rem]" />
                <span className="text-[1.8rem]">Class Schedule</span>
            </NavLink>
            <NavLink
                to={`${membersDashboardRoute}/announcement`}
                className={({ isActive }) => isActive && location.pathname === `${membersDashboardRoute}/announcement` ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <BsMegaphone className="text-[2.2rem]" />
                <span className="text-[1.8rem]">Announcement</span>
            </NavLink>
            <NavLink
                to={`${membersDashboardRoute}/settings`}
                className={({ isActive }) => isActiveLink(`${membersDashboardRoute}/settings`) ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <IoSettingsOutline className="text-[2.2rem]" />
                <span className="text-[1.8rem]">Settings</span>
            </NavLink>
        </div>
    )
}

export default MembersDashboardRoutes;