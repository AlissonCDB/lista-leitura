import { styled } from 'styled-components'

const BotaoContainer = styled.button`
    background-color: cyan;

    padding: 25px;
    margin-top: 50px;
    width: 80%;
    font-size: 18px;
    font-weight: bold;

    border: none;
    border-radius: 50px;
    cursor: pointer;

    &:hover{
        background-color: #000080;
        color: white;
    }

    @media screen and (min-width: 720px){
        width: 50%;
    }
`

export const Botao = (props) => {
    return (
        <BotaoContainer>
            {props.children}
        </BotaoContainer>
    )
}
