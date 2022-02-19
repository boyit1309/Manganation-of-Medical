import React from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";

export default function NavForStaff() {
  return (
    <WrapperStyled>
      <nav>
        <Link to="/nav/admin/home" exact className="nav-logo">
          <h1>Quản lý tiêm chủng</h1>
        </Link>
        <div className="nav-contain">
          <div className="nav-content">
            <Link to="/nav/admin/chart1" className="nav-links">
              Chart1
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/peopledata" className="nav-links">
              Dữ liệu tiêm chủng
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/dktiemchung" className="nav-links">
              Đăng kí tiêm chủng
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/test" className="nav-links">
              Phong bê đê
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/bangsp" className="nav-links">
              Bảng sản phẩm
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/chart2" className="nav-links">
              Chart2
            </Link>
          </div>
        </div>
      </nav>
    </WrapperStyled>
  );
}
