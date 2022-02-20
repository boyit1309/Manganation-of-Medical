import React from "react";
import { WrapperStyled } from "./styled";

export default function Welcome() {
  const Login = () => {
     window.location.href = "http://localhost:3000/login";
  }
  const Registration = () => {
    window.location.href = "http://localhost:3000/registration";
 }
  return (
    <WrapperStyled>
      <h1>Chào mừng đến với hệ thông quản lý tiêm chủng</h1>
      <button onClick={Login}>đăng nhập</button>
      <button onClick={Registration}>đăng ký</button>
    </WrapperStyled>
  );
}
