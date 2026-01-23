import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../index";
import { useParams } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";


export default function Navbar() {

  const { prenom } = useParams();

  return (
    <NavbarStyled>
      <div className="navbar">
        <img
          className="logo-burger"
          src="/images/f03-logo-orange.png"
          alt="logo orange burger"
        />{" "}
        BURGER
        <div className="flex-text-nav">
          <p>Hey {prenom}</p>
          <h4>
            se déconnecter <MdAccountCircle className="icon" />
          </h4>
        </div>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`


  .logo-burger {
    width: 140px;
    height: 130px;
    margin: 0 10px;
  }
  .navbar {
    display: flex;
    background-color: white ;

  }
  .flex-text-nav {
    display: flex;
    flex-direction: column;
  }
`;