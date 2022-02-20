import React, { useState, useEffect } from "react";
import {
  Form,
  //   Input,
  Button,
  //   DatePicker,
  Select,
  //   InputNumber,
  Modal,
} from "antd";
import axios from "axios";
import { WrapperStyled } from "./styled";

export default function DangKiTiemChung() {
  const Path = window.location.href;
  const ArrayPath = Path.split("=");
  const [visible, setVisible] = useState(false);
  const [sanPham, setSanPham] = useState([]);
  const [dangKi, setDangKi] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61fe8846a58a4e00173c98aa.mockapi.io/sanPham`)
      .then((res) => {
        setSanPham(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://60ffb549bca46600171cf462.mockapi.io/api/dangKy`)
      .then((res) => {
        setDangKi(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const list = [];
  for (let i = 0; i < Object.keys(sanPham).length; i++) {
    list[i] = i;
  }
  console.log("hello", sanPham);

  const onFinish = (values) => {
    setVisible(true);
    axios
      .post(`https://60ffb549bca46600171cf462.mockapi.io/api/dangKy`, {
        maSanPham: values.product,
        maPhieuDangKy: Object.keys(dangKi).length + 1
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    Modal.error({
      title: "Đăng kí thất bại",
    });
  };

  const validateMessages = {
    required: "Hãy chọn loại sản phẩm bạn muốn đăng kí",
  };

  return (
    <WrapperStyled>
      <h1 className="title">Đăng kí tiêm chủng</h1>
      <Form
        validateMessages={validateMessages}
        style={{ paddingTop: "20px" }}
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Chọn loại sản phẩm"
          name="product"
          rules={[{ required: true }]}
        >
          <Select style={{ width: "100%" }}>
            {list.map((num) => {
              // console.log("hello123", state[num].tenSanPham);
              return (
                <>
                  <Select.Option value={sanPham?.[num]?.maLoaiSanPham}>
                    {sanPham?.[num]?.tenSanPham}
                  </Select.Option>
                </>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng kí
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Thông báo"
        style={{ top: 100 }}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={400}
        footer={[
          <Button
            key="ok"
            href="http://localhost:3000/"
            type="primary"
            onClick={() => setVisible(false)}
          >
            OK
          </Button>,
        ]}
      >
        <p>Đăng kí thành công</p>
      </Modal>
    </WrapperStyled>
  );
}
