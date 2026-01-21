import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../index"; 

export default function LoginForm() {
  // states
  const [username, setUsername] = useState("");
  const Navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      Navigate(`/order/${username}`)
    }
   
    setUsername("");
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre Prénom..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit">Accéder à votre espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  h1 {
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.size.P5};
  }
`;