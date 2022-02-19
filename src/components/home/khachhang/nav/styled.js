import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  nav {
    display: flex;
    background: green;
    color: white;
  }

  .nav-logo {
    display: block;
    width: 20%;
    text-align: center;
    margin-top: 10px;
  }

  .nav-contain {
    width: 80%;
    display: flex;
  }

  .nav-content {
    text-align: center;
    margin: auto;
  }

  .nav-links {
    display: block;
    text-decoration-line: none;
    color : white;
  }
`;
