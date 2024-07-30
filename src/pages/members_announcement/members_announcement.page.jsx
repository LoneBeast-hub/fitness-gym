// components
import DashboardHeader from "../../Components/dashboard_header/dashboard_header.component";
// react icons
import { FaCalendarAlt } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
// css
import '../../lodstyles.css';

const announcementData = [
    {
        type: 'subscription',
        title: 'Subscription Expiry Date',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'task',
        title: 'Task Reminder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'task',
        title: 'Task Reminder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'subscription',
        title: 'Subscription Expiry Date',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'task',
        title: 'Task Reminder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'task',
        title: 'Task Reminder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'subscription',
        title: 'Subscription Expiry Date',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    },
    {
        type: 'task',
        title: 'Task Reminder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateReceived: '10min'
    }
]

const MembersAnnouncementPage = () => {
    const membersDashboardRoute = '/members_dashboard';
    return(
        <div>
            {/* header */}
            <DashboardHeader pageName='Announcement' routeTo={`${membersDashboardRoute}/announcement`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 md:mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Announcement</p>
                {/* body */}
                <div className="md:border overflow-y-scroll max-h-[85vh] border-gray-e5 md:px-[3rem]">
                    {/* announcements */}
                    {
                        announcementData.map(({type, description, title, dateReceived}, index) => {
                            return(
                                <div key={index}>
                                    {/* info */}
                                    <div className="flex py-[2rem] md:py-[5rem] gap-[2rem] justify-between items-center">
                                        {/* flex */}
                                        <div className="flex gap-[0.5rem] max-w-[85%] sm:max-w-[90%] items-center md:gap-[2rem]">
                                            {/* icon */}
                                            <div className="min-w-[33px] h-fit w-fit flex items-center justify-center md:min-w-[67px] min-h-[33px] md:min-h-[67px] rounded-full bg-primary-100 text-white">
                                                {type === 'subscription'? <FaCalendarAlt className="text-[1.3rem] md:text-[2.7rem]" /> : <RxCountdownTimer className="text-[1.3rem] md:text-[2.7rem]" />}
                                            </div>
                                            {/* flex */}
                                            <div className="flex flex-col overflow-hidden gap-[0.2rem] md:gap-[0.5rem]">
                                                {/* title */}
                                                <p className="md:text-[2.4rem] text-[1.2rem] text-black-2 font-medium">{title}</p>
                                                {/* description */}
                                                <p className="md:text-[2rem] overflow-ellipsis overflow-hidden text-[1rem] md:font-medium text-black-2 line-clamp-2">{description}</p>
                                            </div>
                                        </div>
                                        {/* time recieved */}
                                        <div className="flex flex-col items-center gap-[1.5rem] md:gap-[2rem]">
                                            {/* time */}
                                            <p className="font-medium text-[0.9rem] md:text-[1.8rem] text-black-100">{dateReceived}</p>
                                            {/* icon */}
                                            <BsThreeDotsVertical className="cursor-pointer text-black-2 text-[1.7rem] md:text-[3.5rem]" />
                                        </div>
                                    </div>
                                    {/* line */}
                                    <div className="h-[0.5px] bg-gray-e5 w-full mx-auto md:w-[90%]"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MembersAnnouncementPage;