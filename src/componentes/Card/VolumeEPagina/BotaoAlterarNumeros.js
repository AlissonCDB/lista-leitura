import { styled } from "styled-components";

const BotaoAlterarContainer = styled.button`
    margin: 15px 5px 0 5px;
    background-color: cyan;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 1px solid;
`

export const BotaoAlterarNumeros = ({ alterarLivro, onClick, children }) => {
    const chamarFuncoes = () => {
        onClick()
        alterarLivro()
    }
    return (
        <BotaoAlterarContainer onClick={chamarFuncoes} >{children}</BotaoAlterarContainer>
    )
}