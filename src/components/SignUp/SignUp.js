import { Button, CircularProgress, Typography } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { SignUpContainer, TextFieldStyled } from "./styled";


const SignUp = ({ setLoginButton }) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
    const navigate = useNavigate();
    const [isLoadingPost, setIsLoadingPost] = useState();

    const onSubmitSignUp = (event) => {
        event.preventDefault();
        signUp(form, clear, navigate, setLoginButton, setIsLoadingPost)
    }

    return (
        <SignUpContainer>
            <Typography variant="h4" color="primary">Cadastro</Typography>
            <form onSubmit={onSubmitSignUp}>

                <TextFieldStyled
                    variant="outlined"
                    label="Username"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    margin="normal"
                    required
                />

                <TextFieldStyled
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    margin="normal"
                    required
                />
                <TextFieldStyled
                    variant="outlined"
                    label="Senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    margin="normal"
                    required
                />
                {isLoadingPost && <CircularProgress />}
                {!isLoadingPost && <Button variant="contained" color="primary"
                    type="submit"
                >Enviar</Button>}
            </form>

        </SignUpContainer>
    );
};

export default SignUp;