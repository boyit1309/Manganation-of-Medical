import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function Nav() {
  return (
    <nav>
      <Link to="/" exact className="nav-logo">
        <h1>Quản lý tiêm chủng</h1>
      </Link>
      <div className="nav-contain">
        <div className="nav-content">
          <Link to="/chart1" className="nav-links">
            Chart1
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/chart2" className="nav-links">
            Chart2
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/search" className="nav-links">
            Tìm kiếm
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/chart2" className="nav-links">
            Chart2
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/chart2" className="nav-links">
            Chart2
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/chart2" className="nav-links">
            Chart2
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/chart2" className="nav-links">
            Chart2
          </Link>
        </div>
        <div className="nav-content">
          <Link to="/chart2" className="nav-links">
            Chart2
          </Link>
        </div>
      </div>
    </nav>
  );
}
