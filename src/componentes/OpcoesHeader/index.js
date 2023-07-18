import { styled } from "styled-components"
import { Link } from "react-router-dom"

const opcoes = [
    'Biblioteca', 'Favoritos', 'Adicionar'
]

const OpcoesHeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;

    p{
        text-transform: uppercase;
        font-weight: bold;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    @media screen and (max-width: 720px){
        width: 100%;
    }
`

export const OpcoesHeader = () => {
    return (
        <OpcoesHeaderContainer>

            {opcoes.map((opcao) => (
                <Link key={opcao} to={`/${opcao.toLowerCase()}`}>

                    <p>{opcao}</p>

                </Link>
            ))}

        </OpcoesHeaderContainer>
    )
}