import { useState } from "react";
import "./App.css";

import Table from "./component/table.component";
function App() {

  const [passData,setPassData] = useState({});

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await fetch("https://data.covid19india.org/data.json");
    const data = await res.json();
    let requiredData = data.cases_time_series.find(
      (ele) => ele.dateymd === document.getElementById("inp").value
    );
    setPassData(requiredData)
  };

  return (
    <div>
      <form method="POST">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="inp"
          name="date"
          placeholder="Enter date"
          required
        />
        <input type="submit" onClick={fetchData} value="Submit" />
      </form>
      <Table data={passData} />
    </div>
  );
}

export default App;
