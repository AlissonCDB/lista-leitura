
import { styled } from "styled-components"
import { Formulario } from "../componentes/Formulario"

const AdicionarContainer = styled.div``

export const Adicionar = (props) => {

    const generos = [
        {
          nome: 'Livro',
          corPrimaria: '#57C278',
          corSecundaria: '#D9F7E9'
        },
        {
          nome: 'Manga',
          corPrimaria: '#82CFFA',
          corSecundaria: '#E8F8FF'
        },
        {
          nome: 'Novel',
          corPrimaria: '#E06B69',
          corSecundaria: '#FDE7E8'
        }
      ]

    return (
        <AdicionarContainer>
            <Formulario
                generos={generos.map(genero => genero.nome)}
                aoLivroCadastrado={props.aoNovoLivroAdicionado}
            />
        </AdicionarContainer>
    )
}