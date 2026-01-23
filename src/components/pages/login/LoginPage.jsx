import styled from "styled-components";
import LoginForm from "./LoginForm";

export default function LoginPage() {

  // affichage
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/f03-burger-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;