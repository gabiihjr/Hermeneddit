import { GlobalStyle } from "./styled-app";
import Router from './routes/Router';
import Header from './components/Header/Header';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core";
import useRequestData from "./hooks/useRequestData";
import { baseURL } from "./constants/url";

const App = () => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout " : "Login");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, getPosts, isLoading, error] = useRequestData([], `${baseURL}/posts?page=${currentPage}&size=10`);

  const changeCurrentPage = (event, number) => {
    setCurrentPage(number);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton} />
        <Router setLoginButton={setLoginButton}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
          posts={posts}
          getPosts={getPosts}
          isLoading={isLoading}
          error={error}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
