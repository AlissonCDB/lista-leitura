import { styled } from 'styled-components'

const BotaoContainer = styled.button`
    background-color: cyan;

    padding: 25px;
    margin-top: 35px;
    width: 50%;
    font-size: 18px;
    font-weight: bold;

    border: none;
    border-radius: 50px;
    cursor: pointer;

    &:hover{
        background-color: #000080;
        color: white;
    }
`

export const Botao = (props) => {
    return (
        <BotaoContainer>
            {props.children}
        </BotaoContainer>
    )
}
