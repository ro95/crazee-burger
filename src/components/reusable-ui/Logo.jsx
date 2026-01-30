import React from 'react'
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>
          CRAZEE{" "}
          <img
            className="logo-burger"
            src="/images/f03-logo-orange.png"
            alt="logo orange burger"
          />{" "}
          BURGER
      </h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  .logo-burger {
    width: 140px;
    height: 130px;
    margin: 0 10px;
  }
`
