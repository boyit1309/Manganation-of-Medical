import React, { useEffect, useState, useCallback } from "react";
import { WrapperStyled } from "./styled";
// import Card from "./container";
import axios from "axios";
import Thuoc from "../../../asset/pic/thuoc.jpg";
import { Modal, Button, Form, Input } from "antd";

export default function SanPhamChoNhanVien() {
  const [state, _setState] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get(`https://61fe8846a58a4e00173c98aa.mockapi.io/sanPham`)
      .then((res) => {
        _setState(res.data);
      })
      .catch((error) => console.log(error));
  }, [state]);

  const showModal = () => {
    setIsOpen(true);
  };

  const onSubmit = useCallback((values) => {
    // do your staff with values
    console.log("hello",values.tenDangNhap);
  }, []);

  const closePopup = useCallback(() => {
    form.resetFields();
    setIsOpen(false);
  }, [form]);

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
            <ul className="list-product">
              <li>Nguồn gốc : {state[num].nguonGoc}</li>
              <li>Tác dụng : {state[num].tacDung}</li>
              <li>Chống chỉ định : {state[num].chongChiDinh}</li>
              <li>Mã loại sản phẩm : {state[num].maLoaiSanPham}</li>
              <li>Số lượng sản phẩm : {state[num].soLuongSanPham}</li>
              <Modal className="modal-background"
                title="Chỉnh sửa thông tin sản phẩm"
                visible={isOpen}
                onOk={form.submit}
                onCancel={closePopup}
              >
                <Form form={form} onFinish={onSubmit}>
                  <Form.Item
                    label="Tài khoản"
                    name="tenDangNhap"
                    style={{ width: "300px" }}
                    rules={[{ required: true, message: "Hãy nhập tài khoản" }]}
                  >
                    <Input defaultValue={state[num].tenSanPham}  />
                  </Form.Item>
                </Form>
              </Modal>
            </ul>
            <Button className="product-edit" type="primary" onClick={showModal}>
                Chỉnh sửa
            </Button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <WrapperStyled>
      <div className="product-contant">
        <h1 className="product-tittle">Các loại sản phẩm</h1>
        <div className="body">{Card}</div>

      </div>
    </WrapperStyled>
  );
}
