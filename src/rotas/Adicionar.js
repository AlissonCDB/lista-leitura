
import { styled } from "styled-components"
import { Formulario } from "../componentes/Formulario"

const AdicionarContainer = styled.div``

export const Adicionar = (props) => {

    const generos = [
        {
          nome: 'Livros',
          corPrimaria: '#57C278',
          corSecundaria: '#D9F7E9'
        },
        {
          nome: 'Mangas e Manhwas',
          corPrimaria: '#82CFFA',
          corSecundaria: '#E8F8FF'
        },
        {
          nome: 'Novels',
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