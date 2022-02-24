import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";

export default function DuLieuTiemChung() {
  const [state, _setState] = useState({
    phieuDangKy: [],
    khachHang: [],
    sanPham: [],
  });
  const setState = (obj = {}) => {
    _setState((prevState) => ({ ...prevState, ...obj }));
  };

  useEffect(() => {
    Promise.all([
      axios.get(`https://61fe8846a58a4e00173c98aa.mockapi.io/phieuDangKyTiem`),
      axios.get(`https://61fe8846a58a4e00173c98aa.mockapi.io/khachHang`),
      axios.get(`https://61fe8846a58a4e00173c98aa.mockapi.io/sanPham`),
    ]).then((res) => {
      setState({
        phieuDangKy: res[0].data || [],
        khachHang: res[1].data || [],
        sanPham: res[2].data || [],
      });
    });
  }, []);

  const showModal = ({ newKhachHang, newSanPham }) => {
    setState({
      isShowModal: true,
      modalData: { ...newKhachHang, ...newSanPham },
    });
    console.log("modalData",modalData);
  };

  const handleOk = () => {
    setState({
      isShowModal: true,
      modalData: {},
    });
  };

  const handleCancel = () => {
    setState({ isShowModal: false });
  };
  const {
    sanPham,
    khachHang,
    phieuDangKy,
    isShowModal,
    modalData = {},
  } = state;

  return (
    <WrapperStyled>
      <h1 data-title>Dữ liệu tiêm chủng</h1>
      {phieuDangKy &&
        phieuDangKy.length > 0 &&
        phieuDangKy.map((item, index) => {
          let newKhachHang =
            khachHang.find((khach) => khach.maKhachHang == item.maKhachHang) ||
            {};
          let newSanPham =
            sanPham.find(
              (khach) => khach.maLoaiSanPham == item.maLoaiSanPham
            ) || {};
          return (
            <div key={index}>
              <ul>
                <li>Tên khách hàng : {newKhachHang.hoTen}</li>
                <li>Mã sản phẩm : {newSanPham.tenSanPham}</li>
                <li>Mã phiếu đăng ký : {item.maPhieuDangKy}</li>
              </ul>
              <Button type="primary"
                onClick={() => {
                  showModal({ newKhachHang, newSanPham });
                }}
              >
                Xác nhận tiêm chủng
              </Button>
            </div>
          );
        })}
      <Modal
        title="Thông tin hóa đơn"
        visible={isShowModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Quay lại
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Xác nhận
          </Button>,
        ]}
      >
        <div>Tên khách hàng : {modalData.hoTen}</div>
        <div>Tên sản phẩm : {modalData.tenSanPham}</div>
        <div>Giá tiền : {modalData.giaTien} VNĐ</div>
      </Modal>
    </WrapperStyled>
  );
}
