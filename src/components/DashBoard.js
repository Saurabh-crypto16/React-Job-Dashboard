import React from "react";
import "./DashBoard.css";
import Data from "./Data";
import JobRow from "./JobRow";

function DashBoard() {
  console.log(Data);
  return (
    <div className="dashboard">
      {Data && Data.map((data) => <JobRow data={data} />)}
    </div>
  );
}

export default DashBoard;
