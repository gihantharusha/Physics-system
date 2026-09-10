import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({number_of_paper, marks}) {

  const data = {
    labels: number_of_paper ,

    datasets: [
      {
        label: "Marks of papers",
        data: marks,

        borderColor: "#2e93e4",
        backgroundColor: "rgba(0, 0, 255, 0.1)",        

        tension: 0.4,

        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true
      }
    },

    scales: {

      x:{
        title: {
          display: true,
          text: "Number of papers",
          color: "#eff8ff",
          font: {
            size: 18
          }
        }
      },

      y: {
        beginAtZero: true,
        title: {
          display: true, 
          text: "Marks of papers",
          color: "#eff8ff",
          font: {
            size: 18
          }

        }
      }
    }
  };

  return <Line data={data} options={options} style={{width: "100%"}} />;
}

export default LineChart;