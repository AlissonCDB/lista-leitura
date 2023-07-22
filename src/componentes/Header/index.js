import { styled } from 'styled-components'
import { OpcoesHeader } from '../OpcoesHeader'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100px;
    margin-bottom: 25px;
    color: white;

    p{
        margin: 0;
    }

    @media screen and (max-width: 720px){
        margin-bottom: 15px;
    }
`

const Titulo = styled.h1`
    font-family: 'Belanosima', sans-serif;
`

export const Header = () => {
    return (
        <HeaderContainer>

            <Titulo>
                Biblioteca Digital
            </Titulo>
            <OpcoesHeader/>

        </HeaderContainer>
    )
}