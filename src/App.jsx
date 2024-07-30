import React from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
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

// lod contribution
export const MyContext = createContext()

function App() {
    // lod contribution
    const [contextState, setContextState] = useState({
        showTodoDeleteModal: false,
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
        filters: {
          search: '',
          fromDate: '',
          toDate: '',
          status: 'All',
        },
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
        membersData: [
          {
            id: 1,
            name: 'John Doe',
            username: 'john_doe',
            phone: '0123456789',
            email: 'john_doe@gmail.com',
            status: true,
            date_of_registration: '2023-10-06',
            plan: 'Classical - N22k per month'
          },
          {
            id: 2,
            name: 'Steve Doe',
            username: 'steve_doe',
            phone: '0987654321',
            email: 'steve_doe@gmail.com',
            status: false,
            date_of_registration: '2024-03-06',
            plan: 'Classical - N22k per month'
          },
          {
            id: 3,
            name: 'Albert',
            username: 'king_albert',
            phone: '0987654321',
            email: 'king.albert@gmail.com',
            status: false,
            date_of_registration: '2023-05-09',
            plan: 'Classical - N22k per month'
          },
          {
            id: 4,
            name: 'Luffytaro',
            username: 'luffy_kun',
            phone: '0987654321',
            email: 'luffy@gmail.com',
            status: true,
            date_of_registration: '2023-12-09',
            plan: 'Classical - N22k per month'
          },
          {
            id: 5,
            name: 'Roronoa Zoro',
            username: 'zorojuro',
            phone: '0987654321',
            email: 'santoryou@gmail.com',
            status: true,
            date_of_registration: '2024-6-09',
            plan: 'Classical - N22k per month'
          }
        ]
    })

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
        <MyContext.Provider value={{contextState, setContextState}}>
            {
                location.pathname.startsWith(`${membersDashboardRoute}`) || location.pathname.startsWith(`${adminDashboardRoute}`)?
                    <>
                        <Layout />
                        {/* todo delete modal */}
                        {contextState.showTodoDeleteModal? <TodoDeleteModal /> : ''}
                        {/* todo add modal */}
                        {contextState.showTodoAddModal? <TodoAddModal /> : ''}
                        {/* todo edit modal */}
                        {contextState.showTodoEditModal? <TodoEditModal /> : ''}
                        {/* Send post confirmation modal will enable when working on admin dashboard */}
                        {/* {contextState.showConfirmPostNotificationModal? <ConfirmPostNotificationModal /> : ''} */}
                        {/* Success Modal */}
                        {contextState.showSuccessModal? <SuccessModal successMsg={contextState.successMessage} /> : ''}
                    </>
                :
                    <div className = "App" > 
                    {
                        loading ? ( 
                            <div style = { { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} >
                                <HashLoader 
                                    color = { "#ff6600" }
                                    loading = { loading }
                                    size = { 100 }
                                    aria-label = "Loading Spinner"
                                    data-testid = "loader" />
                            </div>) : (

                        
                                <Routes>
                                    <Route path="/" exact element={<Home />} />
                                    <Route path="/home" exact element={<Home />} />
                                    <Route path="/subscription" exact element={<Subscription />} />
                                    <Route path="/subscription/:id" exact element={<Subscription />} />
                                    <Route path="/login" exact element={<Login />} />
                                    <Route path="/signup" exact element={<Signup />} />
                                </Routes> 
                        )
                    } 
                    </div>
            }
        </MyContext.Provider>
    );
}

export default App;