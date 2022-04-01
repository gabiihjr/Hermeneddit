import styled, { createGlobalStyle } from 'styled-components';
import { lightBackground } from './constants/colors';

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        background-color: ${lightBackground};
    }
`

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`