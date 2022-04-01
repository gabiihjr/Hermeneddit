import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/user';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { LoginContainer, TextFieldStyled } from './styled';

const Login = ({ setLoginButton }) => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoadingPost, setIsLoadingPost] = useState();


  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setLoginButton, setIsLoadingPost);

  };

  return (
    <LoginContainer>
      <AccountCircleIcon color="primary" style={{ fontSize: 80 }} />
      <Typography variant="h4" color="primary">Login</Typography>

      <form
        onSubmit={onSubmitLogin}
      >

        <TextFieldStyled
          label="Email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          margin="normal"
          required
        />
        <TextFieldStyled
          label="Senha"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          inputProps={{ pattern: '^.{8,30}', title: "Senha deve possuir no mínimo 8 e no máximo 30 caracteres" }}
          margin="normal"
          required
        />

        {isLoadingPost && <CircularProgress />}
        {!isLoadingPost && <Button
          variant="contained"
          color="primary"
          type="submit"
          margin="normal"
        >Enviar</Button>}
      </form>
    </LoginContainer>
  );
}

export default Login;
