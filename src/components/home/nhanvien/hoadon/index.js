import axios from "axios";
import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";

export default function DuLieuTiemChung() {
  const [state, _setState] = useState({
    khachHang: [],
    sanPham: [],
    hoaDon: [],
  });
  const setState = (obj = {}) => {
    _setState((prevState) => ({ ...prevState, ...obj }));
  };

  useEffect(() => {
    Promise.all([
      axios.get(`https://61fe8846a58a4e00173c98aa.mockapi.io/khachHang`),
      axios.get(`https://61fe8846a58a4e00173c98aa.mockapi.io/sanPham`),
      axios.get(`https://61fe8c59a58a4e00173c98cc.mockapi.io/hoaDon`),
    ]).then((res) => {
      setState({
        khachHang: res[0].data || [],
        sanPham: res[1].data || [],
        hoaDon: res[2].data || [],
      });
    });
  }, []);
  const { sanPham, hoaDon, khachHang } = state;

  return (
    <WrapperStyled>
      <h1 className="data-title">Hóa đơn tiêm chủng</h1>
      <div className="data-wrap">
        {hoaDon &&
          hoaDon.length > 0 &&
          hoaDon.map((item, index) => {
            let newKhachHang =
              khachHang.find((khach) => khach.maKhachHang == item.maKhachHang) ||
              {};
            let newSanPham =
              sanPham.find(
                (khach) => khach.maLoaiSanPham == item.maSanPham
              ) || {};
            return (
              <div className="card" key={index}>
                <ul className="data-list">
                  <li>Tên khách hàng : {newKhachHang.hoTen}</li>
                  <li>Mã sản phẩm : {newSanPham.tenSanPham}</li>
                  <li>Đơn giá : {item.donGia} VNĐ</li>
                  <li>Đơn vị tính tiền : {item.donViTinh}</li>
                  <li>Mã hóa đơn : {item.maHoaDon}</li>
                </ul>
              </div>
            );
          })}

      </div>
    </WrapperStyled>
  );
}
