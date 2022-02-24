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
    background-color: #329e4e;
  }
  .title__Sp{
    text-align:center;
    margin-bottom: 20px;
    font-size: 40px;
  }
  .content {
    /* background-color: blue; */
    width: 95%;
    height: 95%;
    margin: 8px;
    display: flex;
    justify-content: space-between;
    .content-left {
      width: 45%;
      img {
        border-radius: 20px;
        width: 100%;
        height: auto;
        box-shadow: 0 0 3px #ccc;
        margin: 15px 0;
        background-color: #ffff;
      }
      img:hover {
        transform: scale(105%);
        cursor: pointer;
      }
      .buy__product {
        margin: 38px 0px 0px 44px;
        width: 136px;
        height: 42px;
        border: 1px solid transparent;
        border-radius: 7px;
        background-color:#ffff;
        cursor: pointer;
        color : Black;
      }
      .buy__product:hover{
        opacity: 0.8;
      }
    }
    .content-right {
      width: 50%;
      height: 100%;
      border-radius: 20px;
      background-color: lightblue;
    }
    .list__products {
      list-style: none;
      padding: 10px;
      font-size: 1.5rem;
    }
  }
`;
