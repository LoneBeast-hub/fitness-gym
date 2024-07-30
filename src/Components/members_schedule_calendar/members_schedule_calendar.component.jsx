import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// css
// import '../../lodstyles.css';

const MembersScheduleCalendar = () => {
  const events = [
    { title: '9:00AM\nYoga', date: '2024-06-02', className: 'event-day'},
    { title: '2:00PM\nDance', date: '2024-06-02', className: 'event-day'},
    { title: '4:00PM\nBody Building', date: '2024-06-06', className: 'event-day'},
    { title: '2:00PM\nDance', date: '2024-06-04', className: 'event-day'},
    { title: '2:00PM\nCycling', date: '2024-06-10', className: 'event-day'},
    { title: '2:00PM\nCycling', date: '2024-06-12', className: 'event-day'},
    { title: '2:00PM\nDance', date: '2024-06-14', className: 'event-day'},
    { title: '4:00PM\nBody Building', date: '2024-06-16', className: 'event-day'},
    { title: '9:00AM\nYoga', date: '2024-06-18', className: 'event-day'},
    { title: '2:00PM\nCycling', date: '2024-06-20', className: 'event-day'},
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={renderEventContent}
      height='auto'
    />
  );
};

const renderEventContent = (info) => {
    const [time, title] = info.event.title.split('\n'); // Split title at newline character
  
    return (
      <div className="text-wrap overflow-hidden p-[0.7rem] md:p-[1.2rem] bg-primary-light text-primary-100">
        {/* Event time (optional) */}
        <p className="text-[0.8rem] break-words md:text-[1.4rem] mb-[0.5rem] font-bold">{time}</p>
        {/* Event title */}
        <p className="text-[1rem] md:text-[1.8rem] break-words font-bold">{title}</p>
      </div>
    );
};

export default MembersScheduleCalendar;
