import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import axios from "axios";

export default function ThongTinKhachHangChoNhanVien() {
  const [nguoiDung, setNguoiDung] = useState([]);
//   const Path = window.location.href;
//   const ArrayPath = Path.split("=");
//   var userID = 1000000;

  useEffect(() => {
    axios
      .get(`https://61fe8846a58a4e00173c98aa.mockapi.io/khachHang`)
      .then((res) => {
        console.log("res", res.data);
        setNguoiDung(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const list = [];
  for (let i = 0; i < Object.keys(nguoiDung).length; i++) {
    list[i] = i;
  }
  console.log("hello", list);
  const list__user = [
    {
     img: '/image/user-1.jpg',
     name: "Trường Nguyễn",
    },
    {
      img: '/image/user-2.jpg',
      name: "Lê Quang Phong",
    },
    {
      img: '/image/user-3.jpg',
      name: "Duc Tran",
     },
     {
      img: '/image/user-4.png',
      name: "Nam Thành",
     },
    {
      img: '/image/user-5.jpg',
      name: "Thành Hiếu",
    }
  ]
  const Card = list.map((num) => {
    return (
    <div className="list__profileK">
      <span className="profile__img">
        <img src={list__user[num].img} alt="" />
        <span className="user-name">{list__user[num].name}</span>
      </span>
        <ul className="item__profile">
        <li>ID tài khoản : {nguoiDung?.[num]?.maTaiKhoan}</li>
        <li>Họ và tên : {nguoiDung?.[num]?.hoTen}</li>
        <li>Ngày sinh : {nguoiDung?.[num]?.ngaySinh}</li>
        <li>
          Giới tính : {nguoiDung?.[num]?.gioiTinh == true ? "Nam" : "Nữ"}
        </li>
        <li>Địa chỉ : {nguoiDung?.[num]?.diaChi}</li>
        <li>Tuổi : {nguoiDung?.[num]?.tuoi}</li>
        <li>Số điện thoại : {nguoiDung?.[num]?.sdt}</li>
        <li>Mail : {nguoiDung?.[num]?.mail}</li>
        <li>Số CMND : {nguoiDung?.[num]?.cmnd}</li>
        <li>Số BHYT : {nguoiDung?.[num]?.bhyt}</li>
        <li>Dân Tộc : {nguoiDung?.[num]?.danToc}</li>
        <li>Nghề Nghiệp : {nguoiDung?.[num]?.ngheNghiep}</li>
        <li>Đơn vị công tác : {nguoiDung?.[num]?.donViCongTac}</li>
        </ul>
      </div>
    );
  });

  return (
    <WrapperStyled>
      <div className="list__profile">
      {Card}
      </div>
    </WrapperStyled>
  );
}
