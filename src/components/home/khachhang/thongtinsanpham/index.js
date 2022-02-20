import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";
// import Card from "./container";
import axios from "axios";
import Thuoc from "../../../asset/pic/thuoc.jpg";

export default function SanPhamChoKhachHang() {
  const [state, _setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61fe8846a58a4e00173c98aa.mockapi.io/sanPham`)
      .then((res) => {
        _setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const list = [];
  for (let i = 0; i < Object.keys(state).length; i++) {
    list[i] = i;
  }
  console.log("hello", list);

  const Card = list.map((num) => {
    console.log("hello123", state[num].tenSanPham);
    return (
      <div className="card">
        <div className="content">
          <div className="content-left">
            <img src={Thuoc} alt="" />
          </div>
          <div className="content-right">
            <div className="title">{state[num].tenSanPham}</div>
            <ul>
              <li>Nguồn gốc : {state[num].nguonGoc}</li>
              <li>Tác dụng : {state[num].tacDung}</li>
              <li>Chống chỉ định : {state[num].chongChiDinh}</li>
              <li>Mã loại sản phẩm : {state[num].maLoaiSanPham}</li>
              <li>Số lượng sản phẩm : {state[num].soLuongSanPham}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <WrapperStyled>
      <h1>Các loại sản phẩm</h1>
      <div className="body">{Card}</div>
    </WrapperStyled>
  );
}
