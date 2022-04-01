import { InputBase } from "@material-ui/core";
import styled from "styled-components";
import { lightColor, mainColor, secondColor } from "../../constants/colors";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid ${mainColor};
    border-radius: .3em;
    width: 50vw;
    margin: 10px;
    padding: 10px;
    word-break: break-word;
    background-color: white;
    :hover{
        background: ${lightColor};
    }

@media (max-width: 480px) {
    width: 90vw;
    }
`

export const CardContainer = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

@media (max-width: 480px) {
    flex-direction: column;
}
`

export const CardButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: start;
`

export const SearchContainer = styled.button`
    width: 20vw;
    display: flex;
    align-items: center;
    border: 1px solid ${mainColor};
    border-radius: .3em;
    background-color: white;

@media (max-width: 480px) {
    width: 60vw;
}
`