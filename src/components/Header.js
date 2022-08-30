import React from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/interview") {
      navigate("/");
    } else {
      navigate("/interview");
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header_left">
          <h1>THE DREAM JOB</h1>
          <img
            className="header_img"
            src="https://thumbs.dreamstime.com/b/online-job-logo-design-template-creative-concept-digital-find-job-vector-illustration-online-job-logo-design-template-creative-220648867.jpg"
            alt="logo"
          />
        </div>
        <div className="header_right" onClick={handleClick}>
          {location.pathname === "/interview" ? (
            <p>DASHBOARD</p>
          ) : (
            <p>INTERVIEW PREP</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
