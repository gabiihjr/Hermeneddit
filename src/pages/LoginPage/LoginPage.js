import { Button } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../components/Login/Login';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { goToSignUp } from '../../routes/coordinator';

export const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const LoginPage = ({ setLoginButton }) => {
  const navigate = useNavigate();

  useUnprotectedPage();

  return (
    <MainStyle>

      <Login setLoginButton={setLoginButton} />
      <Button variant="contained" color="primary" onClick={() => { goToSignUp(navigate) }}>Cadastre-se</Button>

    </MainStyle>
  );
}

export default LoginPage;
