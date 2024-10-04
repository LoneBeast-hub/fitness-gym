import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// register the chart
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const AdminMembersDoughnutChart = () => {
    const data = {
        labels: [
            'Registered',
            'Active',
            'Deleted'
        ],
        datasets: [{
            label: 'Members',
            data: [50, 30, 20],
            backgroundColor: ['#FFC325', '#00923F', '#CC4424'],
            borderWidth: 0
        }]
    };
    const options = {
        cutout: 58,
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return(
        <div className="pt-[1.7rem] w-full md:max-w-[32%] border-[0.5px] border-gray-e5 pr-[0.9rem] pl-[1.2rem] pb-[1.3rem]">
            <p className='text-[1.6rem] lg:text-[1.8rem] font-medium mb-[1.1rem] text-black-100'>Calories</p>
            {/* Doughnut chart */}
            <div className="flex w-full h-[160px] items-center justify-center relative">
                <p className='text-center'>
                    <span className='text-[2.5rem] text-black-100 font-bold'>100%</span>
                </p>
                <Doughnut
                 className='w-full h-full left-[50%] transform translate-x-[-50%] absolute top-0'
                 data={data} 
                 options={options}
                />
            </div>
            {/* Indicators */}
            <div className='flex items-center justify-center gap-[1rem] mt-[3rem]'>
                {/* Carbohydrate */}
                <div className='flex gap-[0.5rem]'>
                    {/* indicator */}
                    <div className='w-[11px] h-[11px] rounded-full bg-pending'></div>
                    {/* Percentage and name */}
                    <p className='text-black-100 text-[1.2rem]'><span className='text-[1.2rem]'>50</span>% Reg.</p>
                </div>
                {/* Protein */}
                <div className='flex gap-[0.5rem]'>
                    {/* indicator */}
                    <div className='w-[11px] h-[11px] rounded-full bg-green-100'></div>
                    {/* Percentage and name */}
                    <p className='text-black-100 text-[1.2rem]'><span className='text-[1.2rem]'>30</span>% Act.</p>
                </div>
                {/* Fat */}
                <div className='flex gap-[0.5rem]'>
                    {/* indicator */}
                    <div className='w-[11px] h-[11px] rounded-full bg-red-100'></div>
                    {/* Percentage and name */}
                    <p className='text-black-100 text-[1.2rem]'><span className='text-[1.2rem]'>20</span>% Del.</p>
                </div>
            </div>
        </div>
    )
}

export default AdminMembersDoughnutChart;