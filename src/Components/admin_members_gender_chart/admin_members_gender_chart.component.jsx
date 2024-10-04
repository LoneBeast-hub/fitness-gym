import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// register the chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const AdminMembersGenderChart = () => {
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Population',
            data: [600, 850],
            backgroundColor: ['black', '#FF6600'],
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1000,
            ticks: {
              stepSize: 250,
            },
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
    };

    return(
        <div className='pt-[1.7rem] w-full border-[0.5px] border-gray-e5 md:max-w-[68%] pr-[0.9rem] pl-[1.2rem] pb-[1.3rem]'>
            <p className='text-[1.6rem] lg:text-[1.8rem] font-medium mb-[1.1rem] text-black-100'>Registered Members by Gender</p>
            <div className='w-full'>
                <Bar className='w-full h-full max-h-[198px]' options={options} data={data} />
            </div>
        </div>
    )
}

export default AdminMembersGenderChart;