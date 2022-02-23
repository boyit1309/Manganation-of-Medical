import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card {
    margin: 15px;
    border-radius: 20px;
    width: 40%;
    height: 300px;
    background-color: red;
  }
  .content {
    /* background-color: blue; */
    width : 95%;
    height : 95%;
    margin : 8px;
    display: flex;
    justify-content: space-between;
    .content-left{
      width : 45%;
      img{
        border-radius: 20px;
        width: 100%;
        height: auto;
      }
    }
    .content-right{
      width : 50%;
      height : 100%;
      border-radius: 20px;
      background-color: lightblue;
    }
  }
`;
