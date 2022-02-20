import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import axios from "axios";

export default function ThongTinKhachHang() {
  const [nguoiDung, setNguoiDung] = useState([]);
    const Path = window.location.href;
    const ArrayPath = Path.split("=");
    var userID = 1000000;

  useEffect(() => {
    axios
      .get(`https://61fe8846a58a4e00173c98aa.mockapi.io/khachHang`)
      .then((res) => {
        console.log("res", res.data);
        setNguoiDung(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

    for (let i = 0; i < Object.keys(nguoiDung).length; i++) {
      if (nguoiDung[i].maTaiKhoan == ArrayPath[1]) {
        userID = i;
      }
    }

  return (
    <WrapperStyled>
      <h1>Thông tin khách hàng</h1>
      <ul>
        <li>ID tài khoản : {nguoiDung?.[userID]?.maTaiKhoan}</li>
        <li>Họ và tên : {nguoiDung?.[userID]?.hoTen}</li>
        <li>Ngày sinh : {nguoiDung?.[userID]?.ngaySinh}</li>
        <li>Giới tính : {nguoiDung?.[userID]?.gioiTinh == true ? "Nam" : "Nữ"}</li>
        <li>Địa chỉ : {nguoiDung?.[userID]?.diaChi}</li>
        <li>Tuổi : {nguoiDung?.[userID]?.tuoi}</li>
        <li>Số điện thoại : {nguoiDung?.[userID]?.sdt}</li>
        <li>Mail : {nguoiDung?.[userID]?.mail}</li>
        <li>Số CMND : {nguoiDung?.[userID]?.cmnd}</li>
        <li>Số BHYT : {nguoiDung?.[userID]?.bhyt}</li>
        <li>Dân Tộc : {nguoiDung?.[userID]?.danToc}</li>
        <li>Nghề Nghiệp : {nguoiDung?.[userID]?.ngheNghiep}</li>
        <li>Đơn vị công tác : {nguoiDung?.[userID]?.donViCongTac}</li>
      </ul>
    </WrapperStyled>
  );
}
