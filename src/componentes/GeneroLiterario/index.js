import { styled } from 'styled-components'
import Card from '../Card'

const GeneroLiterarioContainer = styled.section`
    text-align: center;
    padding: 32px;
    h3{
        font-size: 32px;
        border-bottom: 4px solid;
        display: inline-block;
        padding-bottom: 8px;
        margin: 0;
    }
`
const Generos = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`

export const GeneroLiterario = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const cssBorder = { borderColor: props.corPrimaria }


    return (

        <GeneroLiterarioContainer style={css}>
            <h3 style={cssBorder}>{props.nome}</h3>

            <Generos>
                {props.livros.map((card, index) =>
                    <Card
                        key={index}
                        corDeFundo={props.corPrimaria}
                        obra={card.Obra}
                        volume={card.Volume}
                        capitulo={card.Capitulo}
                        imagem={card.Imagem}
                        link={card.Link}
                    />)}
            </Generos>
        </GeneroLiterarioContainer>
    )
}