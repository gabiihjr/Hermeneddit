import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { mainColor, lightBackground } from '../../constants/colors';

export const PostContainer = styled.div`
    width: 50vw;
    border: 1px solid ${mainColor};
    border-radius: .3em;
    text-align: center;
    word-break: break-word;

@media (max-width: 480px) {
    width: 90vw;
}
`

export const PostDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const CommentContainer = styled.div`
    max-width: 50vw;
    margin: 10px;
    word-break: break-word;

@media (max-width: 480px) {
    max-width: 90vw;

}
`

export const TextFieldStyled = styled(TextField)`
    background-color: white;
`