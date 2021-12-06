import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import "./index.css";
export default function Nav() {
  return (
    <>
      <nav>
        <Link to="/nav/home" exact className="nav-logo">
          <h1>Quản lý tiêm chủng</h1>
        </Link>
        <div className="nav-contain">
          <div className="nav-content">
            <Link to="/nav/chart1" className="nav-links">
              Chart1
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/peopledata" className="nav-links">
              Dữ liệu tiêm chủng
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/dktiemchung" className="nav-links">
              Đăng kí tiêm chủng
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/bangsp" className="nav-links">
              Bảng sản phẩm
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
