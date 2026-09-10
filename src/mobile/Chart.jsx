import LineChart from "../common components/LineChart";
import "./chart.css";
import BottomNavigationBar from "./components/BottomNavigationBar";

const Chart = () => {
  return (
    <div className="mobile-chart">
      <div className="container">
        <LineChart
          number_of_paper={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          marks={[10, 20, 20, 40, 50, 90, 55, 74.5, 60]}
        />
      </div>
      <BottomNavigationBar active={4} />
    </div>
  );
};

export default Chart;
