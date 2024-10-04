// css
import '../../lodstyles.css';
import './layout.styles.css';
// react router dom
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
// imgs
import Logo from '../../assets/ggfm_logo.png';
// react icons
import { AiOutlineLogout } from "react-icons/ai";
// use context
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
// components
import MembersDashboardRoutes from "../members_dashboard_routes/members_dashboard_routes.component";
import AdminDashboardRoutes from "../admin_dashboard_routes/admin_dashboard_routes.component";
// hashloader
import HashLoader from 'react-spinners/HashLoader';
// pages
import MembersDashboardPage from "../../pages/members_dashboard/members_dashboard.page";
import MembersToDoPage from '../../pages/members_to_do/members_to_do.page';
import MembersClassSchedulePage from '../../pages/members_class_schedule/members_class_schedule.page';
import MembersAnnouncementPage from '../../pages/members_announcement/members_announcement.page';
import MembersSettingsPage from '../../pages/members_settings/members_settings.page';
import MembersEditProfilePage from '../../pages/members_edit_profile/members_edit_profile.page';
import AdminDashboardPage from '../../pages/admin_dashboard/admin_dashboard.page';
import AdminManageMembersPage from '../../pages/admin_manage_members/admin_manage_members.page';

const Layout = () => {
    const membersDashboardRoute = '/members_dashboard';
    const adminDashboardRoute = '/admin_dashboard';
    const { contextState, setContextState } = useContext(MyContext);
    const location = useLocation();
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [userRole, setUserRole] = useState(null); // Store user role (member or admin)
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserValidity = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                const accessToken = sessionStorage.getItem('accessToken');
    
                if (userId) {
                    if (userId !== '8219-3420-34564-7483') {
                        // Member user login
                        const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/customer/updateprofile/getuserprofile.php", {
                            method: 'POST',
                            body: JSON.stringify({ 'userid': userId }),
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",
                                "Accesstoken": accessToken
                            }
                        });
        
                        if (!userProfileResult.ok) throw new Error('Failed to fetch user profile');
        
                        const userProfileResponse = await userProfileResult.json();
        
                        if (userId === userProfileResponse.userprofile.userid) {
                            setIsUserRegistered(true);
                            setUserRole('member'); // Set role as member
                        } else {
                            navigate('/login');
                        }
                    } else {
                        // Admin user login
                        const userProfileResult = await fetch("https://goodnessgfc.com.ng/gymserver/admin/updateprofile/getuserprofile.php", {
                            method: 'POST',
                            body: JSON.stringify({ 'userid': userId }),
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",
                                "Accesstoken": accessToken
                            }
                        });
        
                        if (!userProfileResult.ok) throw new Error('Failed to fetch Admin User profile');
        
                        const userProfileResponse = await userProfileResult.json();
        
                        if (userId === userProfileResponse.userprofile.userid) {
                            setIsUserRegistered(true);
                            setUserRole('admin'); // Set role as admin
                        } else {
                            navigate('/admin_auth');
                        }
                    }
                } else {
                    // Redirect to login if no userId is found
                    if (location.pathname.startsWith(membersDashboardRoute)) {
                        navigate('/login');
                    } else {
                        navigate('/admin_auth');
                    }
                }
            } catch (error) {
                console.error('Error checking user validity:', error);
                // Redirect to appropriate login page on error
                if (location.pathname.startsWith(membersDashboardRoute)) {
                    navigate('/login');
                } else {
                    navigate('/admin_auth');
                }
            }
        };
    
        checkUserValidity();
    }, [location, navigate]);

    useEffect(() => {
        // Protect routes based on user role
        if (userRole === 'member' && location.pathname.startsWith(adminDashboardRoute)) {
            navigate('/admin_auth'); // Redirect member trying to access admin routes
        } else if (userRole === 'admin' && location.pathname.startsWith(membersDashboardRoute)) {
            navigate('/login'); // Redirect admin trying to access member routes
        }
    }, [userRole, location, navigate]);

    return(
        !isUserRegistered ?
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <HashLoader
                    color={"#ff6600"}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader" />
            </div>
        :
            <div id="lodComponent" className="flex w-full">
                {/* desktop sidebar */}
                <div className={`min-w-[263px] z-10 bg-white box-border border-r-[1px] border-r-gray-e5 fixed transition-all ${contextState.showNav ? 'left-[0]' : 'left-[-100%]'} lg:left-0 top-0 px-[2.45rem] pt-[3.6rem] gap-[3.6rem] flex-col min-h-[100vh] flex`}>
                    {/* logo */}
                    <img src={Logo} className="max-w-[160px] mx-auto max-h-[82px]" alt="Goodness Gym Fitness Center Logo" />
                    {/* routes container */}
                    <div className="h-full relative">
                        {/* pages routes */}
                        {
                            location.pathname.startsWith(`${membersDashboardRoute}`) && userRole === 'member' ?
                                <MembersDashboardRoutes />
                            :
                                ''
                        }

                        {
                            location.pathname.startsWith(`${adminDashboardRoute}`) && userRole === 'admin' ?
                                <AdminDashboardRoutes />
                            :
                                ''
                        }
                    </div>
                    {/* logout */}
                    <Link to='/' onClick={() => {
                        sessionStorage.clear();
                        setContextState((prevValues) => ({
                            ...prevValues,
                            currentUser: null
                        }));
                    }} className="absolute bottom-[7.2rem] left-[3.6rem] font-medium gap-[1rem] flex text-black-2">
                        <AiOutlineLogout className="text-[2rem] transform -rotate-90" /> <span className="text-[2rem]">Logout</span>
                    </Link>
                </div>
                {/* sidebar frame */}
                <div className="min-w-[263px] min-h-[100vh] hidden lg:flex"></div>
                {/* pages container */}
                <div onClick={() => {
                    if (contextState.showNav) {
                        setContextState((prevValues) => ({
                            ...prevValues,
                            showNav: false
                        }));
                    }
                }} className="w-full pb-[2.4rem]">
                    {/* Routes */}
                    <Routes>
                        <Route path={membersDashboardRoute} exact element={<MembersDashboardPage />} />
                        <Route path={`${membersDashboardRoute}/to_do`} element={<MembersToDoPage />} />
                        <Route path={`${membersDashboardRoute}/class_schedule`} element={<MembersClassSchedulePage />} />
                        <Route path={`${membersDashboardRoute}/announcement`} element={<MembersAnnouncementPage />} />
                        <Route path={`${membersDashboardRoute}/settings`} element={<MembersSettingsPage />} />
                        <Route path={`${membersDashboardRoute}/settings/edit_profile`} element={<MembersEditProfilePage />} />
                        <Route path={adminDashboardRoute} element={<AdminDashboardPage />} />
                        <Route path={`${adminDashboardRoute}/manage_members`} element={<AdminManageMembersPage />} />
                    </Routes>
                </div>
            </div>
    );
};

export default Layout;