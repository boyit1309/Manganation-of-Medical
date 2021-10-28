import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import axios from "axios";

export default function DangNhap() {
  const [state, _setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://60ffade3bca46600171cf447.mockapi.io/api/taikhoan`)
      .then((res) => {
        _setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (
      state[0].username == values.username &&
      state[0].password == values.password &&
      state[0].admin == true
    ) {
      window.location.href = "http://localhost:3000/nav/home";
    } else {
      Modal.error({
        title: "Sai tài khoản hoặc mật khẩu",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    Modal.error({
      title: "Sai tài khoản hoặc mật khẩu",
    });
  };
  return (
    <>
        <h1 className="title">Hệ thống quản lý tiêm chủng</h1>
      <div className="login">
        <div className="login-title">Đăng nhập</div>
        <Form
          name="basic"
          style={{ padding: 30 }}
          // labelCol={{ span: 10 }}
          // wrapperCol={{ span: 5 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tài khoản"
            name="username"
            style={{width : "300px"}}
            rules={[{ required: true, message: "Hãy nhập tài khoản" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            style={{width : "300px"}}
            rules={[{ required: true, message: "Hãy nhập mật khẩu" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
