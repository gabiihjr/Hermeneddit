import SignUp from "../../components/SignUp/SignUp";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { MainStyle } from "../../styled-app";


const SignUpPage = ({ setLoginButton }) => {
  useUnprotectedPage();
  return (
    <MainStyle>

      <SignUp setLoginButton={setLoginButton} />
      
    </MainStyle>
  );
}

export default SignUpPage;
