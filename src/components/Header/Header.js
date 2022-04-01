import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RobotIcon from '../../assets/imgs/robot-icon.png';
import { Image, HeaderContainer, TitleAndIcon, ButtonContainer } from './styled';

const Header = ({ loginButton, setLoginButton }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const loginButtonAction = () => {
    if (token) {
      logout()
      setLoginButton("Login");
      goToLogin(navigate)
    } else {
      goToLogin(navigate);
    };
  };

  return (

    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          <TitleAndIcon>
          <Image src={RobotIcon} alt="Ícone de Robô" />
          <Typography variant="h5">
            HermenEddit
          </Typography>
          </TitleAndIcon>
          <ButtonContainer>
          <Button color="inherit" onClick={() => goToFeed(navigate)} > Home </Button>
          <Button color="inherit" onClick={loginButtonAction}>{loginButton}</Button>
          </ButtonContainer>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;