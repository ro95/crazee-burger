import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";
import { theme } from "../../../index"; 
import Logo from "../../reusable-ui/Logo";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
  // states
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit= (event) => {
   event.preventDefault()
   setInputValue("")
   navigate(`order/${inputValue}`)
   
  };

  const handleChange= (event) => {
    setInputValue(event.target.value)
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="flex-container">
        <Logo />

        <div className="welcome">
          <h2>Bienvenue chez nous!</h2>
          <hr />
        </div>

        <h2 className="subtitle">Connectez-vous</h2>

        <TextInput
          type="text"
          placeholder="Entrez votre Prénom..."
          value={inputValue}
          onChange={handleChange}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <button type="submit">
          Accéder à mon espace
          <MdNavigateNext className="arrow" />
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  h1 {
    font-size: 110px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.heading};
    margin: 0;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    line-height: 1;
  }

 
  .welcome {
    text-align: center;
    margin-bottom: 20px;
  }

  .welcome h2 {
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
    margin: 0 0 10px 0;
  }

  .welcome hr {
    border: none;
    height: 2px;
    background-color: ${theme.colors.primary};
    width: 400px;
    margin: 0 auto;
  }

  .subtitle {
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
    margin: 0 0 40px 0;
  }

  .input-wrapper {
    position: relative;
    width: 400px;
    margin-bottom: 20px;
  }

  .icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: ${theme.colors.greyDark};
    z-index: 10;
    pointer-events: none;
    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 18px 24px 18px 50px;
    border: 2px solid transparent;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.P0};
    font-family: ${theme.fonts.family.body};
    background-color: ${theme.colors.white};
    position: relative;
    z-index: 1;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }

  button {
    width: 400px;
    padding: 18px 24px;
    border: none;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
    font-family: ${theme.fonts.family.body};
    font-weight: ${theme.weights.bold};
    cursor: pointer;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .arrow {
      font-size: 30px;
    }

    &:hover {
      background-color: ${theme.colors.primary_burger};
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;