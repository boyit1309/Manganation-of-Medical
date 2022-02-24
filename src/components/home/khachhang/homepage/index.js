import React from "react";
// import './homepage.css'
// import Slider from "./slider/slider"
// import Banner from "./banner/banner"
// import Benefit from "./benefit/benefit"
// import Feature from "./feature/feature"
// import Promotion from "./promotion/promotion"
// import Footer from "./footer/footer"
import { WrapperStyled } from "./styled";
import Slider from "../../homepage/slider/slider";
import Banner from "../../homepage/banner/banner";
import Benefit from "../../homepage/benefit/benefit";
import Feature from "../../homepage/feature/feature";
import Promotion from "../../homepage/promotion/promotion";
import Footer from "../../homepage/footer/footer";

export default function HomepageChoKhachHang() {
  return (
    <WrapperStyled>
      <Slider />
      <Banner />
      <Benefit />
      <Feature />
      <Promotion />
      <Footer />
    </WrapperStyled>
  );
}
