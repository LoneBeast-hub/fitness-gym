import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Filler
} from 'chart.js';
import { areaChartData } from './members_activities_area_chart_data';
// css
import '../../lodstyles.css';

// register the chart
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Filler
);

const MembersActivitiesAreaChart = () => {
    const options = {
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#8B8B8B',
                },
                grid: {
                    display: false
                },
                border: {
                    color: 'transparent'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#8B8B8B',
                    stepSize: 50
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return(
        <div id="lodComponent" className='pt-[1.7rem] w-full border-[0.5px] border-gray-e5 md:max-w-[68%] pr-[0.9rem] pl-[1.2rem] pb-[1.3rem]'>
            <p className='text-[1.6rem] lg:text-[1.8rem] font-medium mb-[1.1rem] text-black-100'>Activities</p>
            <div className='w-full'>
                <Line className='w-full h-full max-h-[198px]' options={options} data={areaChartData} />
            </div>
        </div>
    )
}

export default MembersActivitiesAreaChart;