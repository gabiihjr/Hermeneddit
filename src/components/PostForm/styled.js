import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    form{
        display: flex;
        flex-direction: column;
        width: 40vw;
    }

@media (max-width: 480px) {
    form{
        width: 90vw;
    }
}
`

export const TextFieldStyled = styled(TextField)`
    background-color: white;
`
