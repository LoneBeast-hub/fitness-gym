// css
import '../../lodstyles.css';
import './layout.styles.css';
// react router dom
import { Link, Route, Routes, useLocation } from "react-router-dom";
// imgs
import Logo from '../../assets/ggfm_logo.png';
// react icons
import { AiOutlineLogout } from "react-icons/ai";
// use context
import { useContext } from "react";
import { MyContext } from "../../App";
// components
import MembersDashboardRoutes from "../members_dashboard_routes/members_dashboard_routes.component";
import AdminDashboardRoutes from "../admin_dashboard_routes/admin_dashboard_routes.component";
// pages
import MembersDashboardPage from "../../pages/members_dashboard/members_dashboard.page";
import MembersToDoPage from '../../pages/members_to_do/members_to_do.page';
import MembersClassSchedulePage from '../../pages/members_class_schedule/members_class_schedule.page';
import MembersAnnouncementPage from '../../pages/members_announcement/members_announcement.page';
import MembersSettingsPage from '../../pages/members_settings/members_settings.page';
import MembersEditProfilePage from '../../pages/members_edit_profile/members_edit_profile.page';

const Layout = () => {
    const membersDashboardRoute = '/members_dashboard';
    const adminDashboardRoute = '/admin_dashboard';
    const {contextState, setContextState} = useContext(MyContext);
    const location = useLocation();
    return(
        <div id="lodComponent" className="flex w-full">
            {/* desktop sidebar */}
            <div className={`min-w-[263px] z-10 bg-white box-border border-r-[1px] border-r-gray-e5 fixed transition-all ${contextState.showNav? 'left-[0]' : 'left-[-100%]'} lg:left-0 top-0 px-[2.45rem] pt-[3.6rem] gap-[3.6rem] flex-col min-h-[100vh] flex`}>
                {/* logo */}
                <img src={Logo} className="max-w-[160px] mx-auto max-h-[82px]" alt="Goodness Gym Fitness Center Logo" />
                {/* routes container */}
                <div className="h-full relative">
                    {/* pages routes */}
                    {
                        location.pathname.startsWith(`${membersDashboardRoute}`)?
                            <MembersDashboardRoutes />
                        :
                            ''
                    }

                    {
                        location.pathname.startsWith(`${adminDashboardRoute}`)?
                            <AdminDashboardRoutes />
                        :
                            ''
                    }
                </div>
                {/* logout */}
                <Link to='/' className="absolute bottom-[7.2rem] left-[3.6rem] font-medium gap-[1rem] flex text-black-2"><AiOutlineLogout className="text-[2rem] transform -rotate-90" /> <span className="text-[2rem]">Logout</span></Link>
            </div>
            {/* sidebar frame */}
            <div className="min-w-[263px] min-h-[100vh] hidden lg:flex"></div>
            {/* pages container */}
            <div onClick={() => {
                return contextState.showNav?
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showNav: false
                    }))
                :
                    ''
            }} className="w-full pb-[2.4rem]">
                {/* Routes */}
                <Routes>
                    <Route path={membersDashboardRoute} exact element={<MembersDashboardPage />} />
                    <Route path={`${membersDashboardRoute}/to_do`} element={<MembersToDoPage />} />
                    <Route path={`${membersDashboardRoute}/class_schedule`} element={<MembersClassSchedulePage />} />
                    <Route path={`${membersDashboardRoute}/announcement`} element={<MembersAnnouncementPage />} />
                    <Route path={`${membersDashboardRoute}/settings`} element={<MembersSettingsPage />} />
                    <Route path={`${membersDashboardRoute}/settings/edit_profile`} element={<MembersEditProfilePage />} />
                    {/* <Route path={adminDashboardRoute} element={<AdminDashboardPage />} />
                    <Route path={`${adminDashboardRoute}/manage_members`} element={<AdminManageMembersPage />} />
                    <Route path={`${adminDashboardRoute}/announcement`} element={<AdminAnnouncementPage />} />
                    <Route path={`${adminDashboardRoute}/settings`} element={<AdminSettingsPage />} />
                    <Route path={`${adminDashboardRoute}/settings/edit_profile`} element={<AdminEditProfilePage />} /> */}
                </Routes>
            </div>
        </div>
    )
}

export default Layout;