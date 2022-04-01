import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { lightBackground, mainColor } from '../../constants/colors';

export const SignUpContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    background-color: white;
    form{
        display: flex;
        flex-direction: column;
        width: 35vw;
    }

@media (max-width: 480px) {
    width: 90vw;
    form{
        width: 80vw;
    }
}
`

export const TextFieldStyled = styled(TextField)`
    background-color: ${lightBackground};
`