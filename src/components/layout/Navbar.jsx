import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../index";
import { useParams, Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";


export default function Navbar() {

  const { prenom } = useParams();

  return (
    <NavbarStyled>
      <div className="navbar">
        <div className="flex-logo">
          <h3>
            CRAZEE{" "}
            <img
              className="logo-burger"
              src="/images/f03-logo-orange.png"
              alt="logo orange burger"
            />{" "}
            BURGER
          </h3>
        </div>
        <div className="flex-text-nav">
          <p>
            Hey, <span className="username">{prenom}</span>{" "}
          </p>
          <h4>
            <Link to="/">se déconnecter</Link>
            <MdAccountCircle className="icon" size="22px" />
          </h4>
        </div>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  .flex-logo {
    display: flex;
    justify-self: center;
    align-items: center;
  }
  .navbar h3 {
    font-family: Amatic SC;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 1.5px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    color: #ffa01b;
    display: flex;
    align-items: center;
  }
  .navbar h4 a {
    font-family: Open Sans;
    font-weight: 400;
    font-style: Regular;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: right;
    vertical-align: middle;
    text-decoration: none; /* Enlève le soulignement */
    color: inherit; /* Hérite la couleur du h4 */
  }

  .navbar h4 {
    font-family: Open Sans;
    font-weight: 400;
    font-style: Regular;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: right;
    vertical-align: middle;
    margin-top: -7px;
  }

  .navbar p {
    display: flex;
    font-family: Open Sans;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: right;
    vertical-align: middle;
  }

  .logo-burger {
    width: 80px;
    height: auto;
  }
  .navbar {
    display: flex;
    background-color: white;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
  }
  .flex-text-nav {
    display: flex;
    flex-direction: column;
  }
  .username {
    font-family: Open Sans;
    font-weight: 800;
    font-style: Regular;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0%;
    color: #ffa01b;
  }
`;