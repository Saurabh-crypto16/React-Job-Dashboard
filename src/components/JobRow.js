import React from "react";
import "./JobRow.css";
import Progressbar from "./Progress_bar";

function JobRow({ data }) {
  let date_selected;
  let count = 0;
  const handleClick = () => {
    if (date_selected && count === 0) {
      count += 1;
      alert("Interview scheduled");
    } else if (count > 0) {
      alert("Interview already scheduled");
    } else {
      alert("Select date");
    }
  };

  return (
    <div className="jobrow">
      <div className="img_sec">
        <img className="job_img" src={data.logo} alt={data.company_name} />
      </div>

      <div className="comp_name">
        <h3>{data.designation}</h3>
        <p>{data.company_name}</p>
      </div>

      <div className="loc">
        <h3>{data.location_state}</h3>
        <p>{data.location_country}</p>
      </div>

      <div className="stage">
        <h3>{data.stage}</h3>
        <Progressbar
          className="pgbar"
          bgcolor="blue"
          progress={data.stage_val}
          height={40}
        />
      </div>

      <div className="status">
        <div style={{ backgroundColor: data.status_color }}>
          <h3>{data.status}</h3>
        </div>
      </div>

      <div className="application">
        {data.status === "Ongoing" || data.status === "Offer" ? (
          <div className="schedule-interview">
            <h3>Schedule interview</h3>
            <div className="schedule-interview-time">
              <input
                type="date"
                onChange={(e) => {
                  date_selected = e.target.value;
                }}
              />
              <button className="btn" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Go to application</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobRow;
