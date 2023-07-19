
import { styled } from "styled-components"
import { Formulario } from "../componentes/Formulario"
import { generos } from "../componentes/Card/generos"

const AdicionarContainer = styled.div``

export const Adicionar = (props) => {

    return (
        <AdicionarContainer>
            <Formulario
                generos={generos.map(genero => genero.nome)}
                aoLivroCadastrado={props.aoNovoLivroAdicionado}
            />
        </AdicionarContainer>
    )
}