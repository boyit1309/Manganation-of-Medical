import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  InputNumber,
  Modal,
} from "antd";
import "../index.css";
import axios from "axios";

export default function DKTiemChung() {
  const onFinish = (values) => {
    values.firstVaxDate = values.firstVaxDate.format("L");
    values.secondVaxDate = values.secondVaxDate.format("L");
    console.log("Success:", values);
    Modal.success({
      title: "Đăng kí thành công",
    });
    axios
      .post(`https://60ffade3bca46600171cf447.mockapi.io/api/products`, {
        name: values.name,
        sex: values.sex,
        age: values.age,
        address: values.address,
        firstVaxDate: values.firstVaxDate,
        secondVaxDate: values.secondVaxDate,
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

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

  return (
    <>
      <h1 className="title">Đăng kí tiêm chủng</h1>
      <Form
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
          label="Tên"
          name="name"
          rules={[{ required: true, message: "Hãy điền tên của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giới tính"
          name="sex"
          rules={[{ required: true, message: "Hãy điền giới tính của bạn" }]}
        >
          <Select>
            <Select.Option value="Nam">Nam</Select.Option>
            <Select.Option value="Nữ">Nữ</Select.Option>
            <Select.Option value="Khác">Khác</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Tuổi"
          name="age"
          rules={[{ required: true, message: "Hãy điền tuổi của bạn!" }]}
        >
          <InputNumber min={1} max={120} />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Hãy điền địa chỉ của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ngày tiêm mũi 1"
          name="firstVaxDate"
          rules={[{ required: true, message: "Hãy điền ngày tiêm mũi 1!" }]}
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>

        <Form.Item
          label="Ngày tiêm mũi 2"
          name="secondVaxDate"
          rules={[{ required: true, message: "Hãy điền ngày tiêm mũi 2!" }]}
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
