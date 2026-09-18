import { useEffect, useState } from "react";
import "./marksTable.css";
import load_chart_data from "../functions/load_chart_data";

const MarksTable = () => {
  const [table_data, set_table_data] = useState([]);

  const uid = sessionStorage.getItem("uid")

  const on_load = async () => {
    const marks = await load_chart_data(uid);
    const marks_array = marks.marks_array;
    const paper_no_array = marks.paper_no_array;
    const avg_array= marks.avg_array
    const rank_array= marks.rank_array
    const paper_type_array = marks.paper_type

    const table_data_array = marks_array.map((mark, index) => ({
      paper_no: paper_no_array[index],
      mark,
      avg: avg_array[index],
      rank: rank_array[index],
      paper_type: paper_type_array[index]
    }));

    set_table_data(table_data_array)

  };

  useEffect(() => {
    on_load();
  }, []);

  return (
    <div className="marks-table">
      <table>
        <tr>
          <th>Paper name</th>
          <th>Marks</th>
          <th>Avarege</th>
          <th>Rank</th>
        </tr>
        {table_data.map(data=>(
            <tr>
                <td>{String(data.paper_type) + " " + String(data.paper_no)}</td>
                <td>{data.mark}</td>
                <td>{data.avg}</td>
                <td>{data.rank}</td>
            </tr>
        ))

        }
      </table>
    </div>
  );
};

export default MarksTable;
