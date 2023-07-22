import { styled } from 'styled-components'
import Card from '../Card'

const GeneroLiterarioContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 32px 0;
    @media screen and (min-width: 720px){
        padding: 32px;
    }
`
const TituloGenero = styled.div`
    display: flex;
    justify-content: center;
    h3{
        font-size: 32px;
        border-bottom: 4px solid;
        display: inline-block;
        width: auto;
        padding-bottom: 8px;
        margin: 0;
    }
`
const Generos = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    overflow-x: scroll;
    margin: 16px 0;

    @media screen and (min-width: 720px){
        
        &::-webkit-scrollbar {
            width: 12px;
          }
          
        &::-webkit-scrollbar-track {
            background: violet;
            border-radius: 20px;
          }
          
        &::-webkit-scrollbar-thumb {
            background-color: #870AE9;
            border-radius: 20px;
            border: 3px solid #E79A1A;
          }
        }
`

export const GeneroLiterario = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const cssBorder = { borderColor: props.corPrimaria }

    return (

        <GeneroLiterarioContainer style={css}>
            <TituloGenero>
            <h3 style={cssBorder}>{props.nome}</h3>
            </TituloGenero>
            <Generos>
                {props.livros.map((card, index) =>
                    <Card
                        key={index}
                        corDeFundo={props.corPrimaria}
                        obra={card.obra}
                        volume={card.volume}
                        capitulo={card.pagina}
                        imagem={card.imagem}
                        link={card.link}
                        id={card._id}
                        opcoesOcultas={props.opcoesOcultas}
                        onDelete={props.onDelete}
                    />)}
            </Generos>
        </GeneroLiterarioContainer>
    )
}