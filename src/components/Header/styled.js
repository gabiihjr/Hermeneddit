import styled from "styled-components";

export const Image = styled.img`
    display: flex;
    align-items: center;
    margin: 0 10px 7px 0;
`

export const HeaderContainer = styled.div`
    width: 100vw;
`

export const TitleAndIcon = styled.div`
    display: flex;
    align-items: center;

@media (max-width: 480px) {
    margin-right: 15px;
}
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    margin-right: 10px;

@media (max-width: 480px) {
    flex-direction: column-reverse;
    margin-right: 0;
}
`