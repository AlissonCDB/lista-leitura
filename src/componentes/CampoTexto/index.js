import { styled } from 'styled-components'

const CampoTextoContainer = styled.div`
    margin-top: 35px;
    width: 100%;

    input {
        width: 80%;
        background-color: cyan;
        box-shadow: 10px 10px 30px rgba(61, 58, 235, 0.959);
        box-sizing: border-box;
        padding: 25px;
        font-size: 18px;
        border: none;
        border-radius: 50px;
    }

    @media screen and (min-width: 720px){
        width: 50%;

        input{
            font-size: 24px;
        }
    }
`
const OpcoesFormulario = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 24px;
`

export const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <CampoTextoContainer>
            <OpcoesFormulario>
                {props.label}
            </OpcoesFormulario>
            <input
                value={props.valor}
                onChange={props.aoAlterado}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </CampoTextoContainer>
    )
}