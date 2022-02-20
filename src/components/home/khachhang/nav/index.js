import React from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";

export default function NavForCustomer() {
  const Path = window.location.href;
  const ArrayPath = Path.split("=");
  const onClick1 = () => {
    window.location.href = `http://localhost:3000/nav/customer/data-product-customer?id=${ArrayPath[1]}`;
  };
  const onClick2 = () => {
    window.location.href = `http://localhost:3000/nav/customer/data-customer?id=${ArrayPath[1]}`;
  };
  const onClick3 = () => {
    window.location.href = `http://localhost:3000/nav/customer/dang-ki-tiem-chung?id=${ArrayPath[1]}`;
  };
  return (
    <WrapperStyled>
      <nav>
        <Link to="/nav/admin/home" exact className="nav-logo">
          <h1>Quản lý tiêm chủng</h1>
        </Link>
        <div className="nav-contain">
          <div className="nav-content">
            <a onClick={onClick1} className="nav-links">
              Thông tin sản phẩm
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick2} className="nav-links">
              Thông tin khách hàng
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick3} className="nav-links">
              Đăng kí tiêm chủng
            </a>
          </div>
          <div className="nav-content">
            <Link to="/" className="nav-links">
              log out
            </Link>
          </div>
        </div>
      </nav>
    </WrapperStyled>
  );
}
