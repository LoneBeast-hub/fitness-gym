import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from "./Components/layout/layout.component";
// modal components
import TodoDeleteModal from "./Components/todo_delete_modal/todo_delete_modal.component";
import TodoAddModal from "./Components/todo_add_modal/todo_add_modal.component";
import TodoEditModal from "./Components/todo_edit_modal/todo_edit_modal.component";
import ConfirmPostNotificationModal from "./Components/confirm_post_notification_modal/confirm_post_notification_modal.component";
import SuccessModal from "./Components/success_modal/succes_modal.component";
import LoadingModal from "./Components/loading_modal/loading_modal.component";
import AdminLogin from "./pages/admin_login/admin_login.page";
import MemberDetailsModal from "./Components/member_details_modal/member_details_modal.component";
import AdminMemberAddModal from "./Components/admin_member_add_modal/admin_member_add_modal.component";
import DeleteMemberModal from "./Components/delete_member_modal/delete_member_modal.component";
import DisableMemberModal from "./Components/disable_member_modal/disable_member_modal.component";

export const MyContext = createContext()

function App() {
    const [contextState, setContextState] = useState({
        showTodoDeleteModal: false,
        currentUser: null,
        showTodoAddModal: false,
        showTodoEditModal: false,
        showDisableMemberModal: false,
        showMemberDetailsModal: null,
        showDeleteMemberModal: false,
        showConfirmPostNotificationModal: false,
        successMessage: '',
        showNav: false,
        showDateRangePicker: false,
        showSuccessModal: false,
        handleAnnouncementSubmit: null,
        showActionsModal: null,
        showMemberAddModal: false,
        currentTodoData: null,
        todoIdToDelete: '',
        memberIdToDelete: '',
        showLoadingModal: false,
        loadingModalMessage: '',
        filters: {
          search: '',
          fromDate: '',
          toDate: '',
          status: 'All',
        },
        memberIdToDisable: '',
        toDoListData: [
          {
            id: 1,
            description: 'Yoga',
            progress: 50,
            due_date: '2022-12-24',
            reminder: 'A day before'
          },
          {
            id: 2,
            description: 'Yoga',
            progress: 10,
            due_date: '2022-12-24',
            reminder: 'A day before'
          },
          {
            id: 3,
            description: 'Yoga',
            progress: 100,
            due_date: '2022-12-24',
            reminder: 'A day before'
          },
          {
            id: 4,
            description: 'Yoga',
            progress: 10,
            due_date: '2022-12-24',
            reminder: 'A day before'
          },
          {
            id: 5,
            description: 'Yoga',
            progress: 50,
            due_date: '2022-12-24',
            reminder: 'A day before'
          },
          {
            id: 6,
            description: 'Yoga',
            progress: 100,
            due_date: '2022-12-24',
            reminder: 'A day before'
          }
        ],
        membersData: []
    });

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const location = useLocation();
    const membersDashboardRoute = '/members_dashboard';
    const adminDashboardRoute = '/admin_dashboard';
    return (
        <MyContext.Provider value={{ contextState, setContextState }}>
            {
                location.pathname.startsWith(`${membersDashboardRoute}`) || location.pathname.startsWith(`${adminDashboardRoute}`) ?
                    <>
                        <Layout />
                        {/* todo delete modal */}
                        {contextState.showTodoDeleteModal ? <TodoDeleteModal /> : ''}
                        {/* todo add modal */}
                        {contextState.showTodoAddModal ? <TodoAddModal /> : ''}
                        {/* todo edit modal */}
                        {contextState.showTodoEditModal ? <TodoEditModal /> : ''}
                        {/* Success Modal */}
                        {contextState.showSuccessModal ? <SuccessModal successMsg={contextState.successMessage} /> : ''}
                        {/* Loading Modal */}
                        {contextState.showLoadingModal ? <LoadingModal successMsg={contextState.loadingModalMessage} /> : ''}
                        {/* view member details Modal */}
                        {contextState.showMemberDetailsModal? <MemberDetailsModal showMemberDetailsModal={contextState.showMemberDetailsModal} /> : ''}
                        {/* Add member Modal */}
                        {contextState.showMemberAddModal? <AdminMemberAddModal /> : ''}
                        {/* Delete member Modal */}
                        {contextState.showDeleteMemberModal? <DeleteMemberModal /> : ''}
                        {/* Disable member Modal */}
                        {contextState.showDisableMemberModal? <DisableMemberModal /> : ''}
                    </>
                    :
                    <div className="App">
                        {
                            loading ? (
                                <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                    <HashLoader
                                        color={"#ff6600"}
                                        loading={loading}
                                        size={100}
                                        aria-label="Loading Spinner"
                                        data-testid="loader" />
                                </div>) : (
                                <Routes>
                                    <Route path="/" exact element={<Home />} />
                                    <Route path="/home" exact element={<Home />} />
                                    <Route path="/subscription" exact element={<Subscription />} />
                                    <Route path="/subscription/:id" exact element={<Subscription />} />
                                    <Route path="/login" exact element={<Login />} />
                                    <Route path="/signup" exact element={<Signup />} />
                                    <Route path="/admin_auth" exact element={<AdminLogin />} />
                                </Routes>
                            )
                        }
                    </div>
            }
        </MyContext.Provider>
    );
}

export default App;