import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chart2 from "./chart/Chart2";
import Nav from "./Nav";
import PeopleData from "./peopledata/PeopleData";
import Homepage from "./homepage/Homepage";
import DKTiemChung from "./dktiemchung/DKTiemChung";
import Chart1 from "./chart/Chart1";
import DangNhap from "./DangNhap";
import Test from "./chart/Test";
import BangSp from "./chart/bangsp";
import NavForStaff from "./nhanvien/nav";
import NavForCustomer from "./khachhang/nav";
import Welcome from "./Welcome";
import Registration from "./Registration";
import SanPhamChoKhachHang from "./khachhang/thongtinsanpham";
import ThongTinKhachHang from "./khachhang/thongtinkhachhang";
import DangKiTiemChung from "./khachhang/dangkitiemchung";

export default function Home() {
  return (
    <>
      <Router>

        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={DangNhap} />
        <Route path="/registration" exact component={Registration} />

        {/* cho admin */}
        <Route path="/nav/admin" component={Nav} />
        <Route path="/nav/admin/home" exact component={Homepage} />
        <Route path="/nav/admin/bangsp" exact component={BangSp} />
        <Route path="/nav/admin/dktiemchung" exact component={DKTiemChung} />
        <Route path="/nav/admin/chart1" exact component={Chart1} />
        <Route path="/nav/admin/test" exact component={Test} />
        <Route path="/nav/admin/chart2" exact component={Chart2} />
        <Route path="/nav/admin/peopledata" exact component={PeopleData} />

        {/* cho nhân viên */}
        <Route path="/nav/staff" component={NavForStaff} />

        {/* cho khách hàng */}
        <Route path="/nav/customer" component={NavForCustomer} />
        <Route
          path="/nav/customer/data-product-customer"
          exact
          component={SanPhamChoKhachHang}
        />
        <Route path="/nav/customer/data-customer" component={ThongTinKhachHang} />
        <Route path="/nav/customer/dang-ki-tiem-chung" component={DangKiTiemChung} />

      </Router>
    </>
  );
}
