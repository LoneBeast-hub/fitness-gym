// react router
import { NavLink, useLocation } from "react-router-dom";
// react icons
import { BsGrid1X2 } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { BsMegaphone } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";

const AdminDashboardRoutes = () => {
    const adminDashboardRoute = '/admin_dashboard';
    const location = useLocation();
    const isActiveLink = (path) => {
        return location.pathname.startsWith(path);
    };
    return(
        <div id="lodComponent" className="flex flex-col gap-[0.5rem]">
            <NavLink
                to={adminDashboardRoute}
                className={({ isActive }) => isActive && location.pathname === adminDashboardRoute ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <BsGrid1X2 className="text-[2rem]" />
                <span className="text-[1.8rem]">Dashboard</span>
            </NavLink>
            <NavLink
                to={`${adminDashboardRoute}/manage_members`}
                className={({ isActive }) => isActive && location.pathname === `${adminDashboardRoute}/manage_members` ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <LuUsers2 className="text-[2.2rem]" />
                <span className="text-[1.8rem]">Manage Members</span>
            </NavLink>
            <NavLink
                to={`${adminDashboardRoute}/announcement`}
                className={({ isActive }) => isActive && location.pathname === `${adminDashboardRoute}/announcement` ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <BsMegaphone className="text-[2.2rem]" />
                <span className="text-[1.8rem]">Announcement</span>
            </NavLink>
            <NavLink
                to={`${adminDashboardRoute}/settings`}
                className={({ isActive }) => isActiveLink(`${adminDashboardRoute}/settings`) ? 'active flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]' : 'flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]'}
            >
                <IoSettingsOutline className="text-[2.2rem]" />
                <span className="text-[1.8rem]">Settings</span>
            </NavLink>
        </div>
    )
}

export default AdminDashboardRoutes;