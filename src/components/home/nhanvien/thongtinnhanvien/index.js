import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import axios from "axios";
// import {
//   Form,
//   Input,
//   Button,
//   DatePicker,
//   Select,
//   InputNumber,
//   Modal,
// } from "antd";

export default function ThongTinNhanVienChoNhanVien() {
  const [nhanVien, setNhanVien] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [form] = Form.useForm();
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


//   const { TextArea } = Input;

//   function disabledDate(current) {
//     // Can not select days after today and today
//     return current && current.valueOf() > Date.now();
//   }

//   const validateMessages = {
//     required: "Hãy điền ${label} của bạn",
//     types: {
//       email: "Đây không phải một email hợp lệ",
//     },
//   };

//   const showModal = () => {
//     setIsOpen(true);
//   };

  for (let i = 0; i < Object.keys(nhanVien).length; i++) {
    if (nhanVien[i].maTaiKhoan == ArrayPath[1]) {
      userID = i;
    }
  }
//   console.log("makhachhang", nguoiDung?.[userID]?.maKhachHang);
//   const ID = nguoiDung?.[userID]?.maKhachHang;
//   const hoTen = nguoiDung?.[userID]?.hoTen;
//   console.log("id", ID);

//   const onSubmit = useCallback((values) => {
    // do your staff with values
    // console.log("hello", values.hoTen);
    // console.log("id2", ID);
    // axios
    //   .post(`https://61fe8846a58a4e00173c98aa.mockapi.io/khachHang/${nguoiDung?.[userID]?.maKhachHang}`, {
    //     hoTen: values.hoTen,
    //     ngaySinh: values.ngaySinh,
    //     gioiTinh: values.gioiTinh,
    //     diaChi: values.diaChi,
    //     tuoi: values.tuoi,
    //     sdt: values.sdt,
    //     mail: values.mail,
    //     cmnd: values.cmnd,
    //     bhyt: values.bhyt,
    //     danToc: values.danToc,
    //     ngheNghiep: values.ngheNghiep,
    //     donViCongTac: values.donViCongTac,
    //     // maKhachHang: Object.keys(khachHang).length + 1,
    //     // maTaiKhoan: Object.keys(taiKhoan).length + 1,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
//   });

//   const closePopup = useCallback(() => {
//     form.resetFields();
//     setIsOpen(false);
//   }, [form]);

  return (
    <WrapperStyled>
      <h1>Thông tin Nhân Viên</h1>
      <ul>
        <li>ID tài khoản : {nhanVien?.[userID]?.maTaiKhoan}</li>
        <li>Họ và tên : {nhanVien?.[userID]?.tenNhanVien}</li>
        <li>Ngày sinh : {nhanVien?.[userID]?.ngaySinh}</li>
        <li>
          Giới tính : {nhanVien?.[userID]?.gioiTinh == true ? "Nam" : "Nữ"}
        </li>
        <li>Số điện thoại : {nhanVien?.[userID]?.sdt}</li>
        <li>Mã nhân viên : {nhanVien?.[userID]?.maNhanVien}</li>
      </ul>
      {/* <Button type="primary" onClick={showModal}>
        Chỉnh sửa
      </Button>
      <Modal
        title="Chỉnh sửa thông tin cá nhân"
        visible={isOpen}
        onOk={form.submit}
        onCancel={closePopup}
      >
        <Form
          form={form}
          onFinish={onSubmit}
          validateMessages={validateMessages}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            label="Họ và tên"
            name="hoTen"
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
          >
            <Input
              defaultValue={hoTen}
              value={hoTen}
            />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="ngaySinh"
            rules={[{ required: true }]}
          >
            <DatePicker disabledDate={disabledDate} />
          </Form.Item>

          <Form.Item
            label="Giới tính"
            name="gioiTinh"
            rules={[{ required: true }]}
          >
            <Select style={{ width: "30%" }}>
              <Select.Option value={true}>Nam</Select.Option>
              <Select.Option value={false}>Nữ</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Tuổi" name="tuoi">
            <InputNumber
              min={1}
              max={120}
              defaultValue={nguoiDung?.[userID]?.tuoi}
            />
          </Form.Item>

          <Form.Item label="Địa chỉ" name="diaChi">
            <TextArea rows={4} defaultValue={nguoiDung?.[userID]?.diaChi} />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="sdt"
            width="200px"
            // rules={[{ required: true }]}
          >
            <Input
              style={{ width: "100%" }}
              defaultValue={nguoiDung?.[userID]?.sdt}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="mail"
            // rules={[{ required: true, type: "email" }]}
          >
            <Input defaultValue={nguoiDung?.[userID]?.mail} />
          </Form.Item>

          <Form.Item
            label="số CMND"
            name="cmnd"
            width="200px"
            // rules={[{ required: true }]}
          >
            <Input
              style={{ width: "100%" }}
              defaultValue={nguoiDung?.[userID]?.cmnd}
            />
          </Form.Item>

          <Form.Item
            label="số BHYT"
            name="bhyt"
            width="200px"
            // rules={[{ required: true }]}
          >
            <Input
              style={{ width: "100%" }}
              defaultValue={nguoiDung?.[userID]?.bhyt}
            />
          </Form.Item>

          <Form.Item label="Dân tộc" name="danToc">
            <Input defaultValue={nguoiDung?.[userID]?.danToc} />
          </Form.Item>

          <Form.Item
            label="Nghề nghiệp"
            name="ngheNghiep"
            // rules={[{ required: true }]}
          >
            <Input defaultValue={nguoiDung?.[userID]?.ngheNghiep} />
          </Form.Item>

          <Form.Item
            label="Đơn vị công tác"
            name="donViCongTac"
            // rules={[{ required: true }]}
          >
            <Input defaultValue={nguoiDung?.[userID]?.donViCongTac} />
          </Form.Item>
        </Form>
      </Modal> */}
    </WrapperStyled>
  );
}
