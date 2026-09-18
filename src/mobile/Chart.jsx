import { useEffect, useState } from "react";
import LineChart from "../common components/LineChart";
import "./chart.css";
import BottomNavigationBar from "./components/BottomNavigationBar";
import check_login_user from "../functions/check_login";
import {  useNavigate } from "react-router-dom";
import load_chart_data from "../functions/load_chart_data";
import MarksTable from "../common components/MarksTable";

const Chart = () => {

  const navigate = useNavigate()

  const [marks, set_marks] = useState([])
    const [paper_no, set_paper_no] = useState([])

  const on_load = async()=>{
    const result = await check_login_user(sessionStorage.getItem("uid"))
    if(result){
      load_chart()
    }else{
      navigate("/login")
    }
  }

  const load_chart = async () => {
      const result = await load_chart_data(sessionStorage.getItem("uid"))
      // console.log(result)
      set_marks(result.marks_array)
      set_paper_no(result.paper_no_array)
    };

  useEffect(()=>{
    on_load()
  }, [])

  return (
    <div className="mobile-chart" >
      <div className="container" style={{paddingBottom: 88}} >
        <LineChart
          number_of_paper={paper_no}
          marks={marks}
        />
        <MarksTable uid={sessionStorage.getItem("uid")} />
      </div>
      <BottomNavigationBar active={4} />
    </div>
  );
};

export default Chart;
