import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";
import axios from "axios";

export default function ThongTinNhanVienChoNhanVien() {
  const [nhanVien, setNhanVien] = useState([]);

  const Path = window.location.href;
  const ArrayPath = Path.split("=");
  var userID = 1000000;

  useEffect(() => {
    axios
      .get(`https://60ffb549bca46600171cf462.mockapi.io/api/nhanVien`)
      .then((res) => {
        console.log("res", res.data);
        setNhanVien(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  for (let i = 0; i < Object.keys(nhanVien).length; i++) {
    if (nhanVien[i].maTaiKhoan == ArrayPath[1]) {
      userID = i;
    }
  }

  return (
    <WrapperStyled>
      <div className="list__profileK">
        <span className="profile__img">
          <img src="/image/user-1.jpg" alt="" />
          <span className="user-name">Trường Nguyễn</span>
        </span>
        <ul className="item__profile">
          <li>ID tài khoản : {nhanVien?.[userID]?.maTaiKhoan}</li>
          <li>Họ và tên : {nhanVien?.[userID]?.tenNhanVien}</li>
          <li>Ngày sinh : {nhanVien?.[userID]?.ngaySinh}</li>
          <li>
            Giới tính : {nhanVien?.[userID]?.gioiTinh == true ? "Nam" : "Nữ"}
          </li>
          <li>Số điện thoại : {nhanVien?.[userID]?.sdt}</li>
          <li>Mã nhân viên : {nhanVien?.[userID]?.maNhanVien}</li>
        </ul>
      </div>
    </WrapperStyled>
  );
}
