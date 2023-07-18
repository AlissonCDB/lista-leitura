import { styled } from 'styled-components'
import { useState } from 'react'
import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { postLivro } from "../../servicos/estante"


const FormularioContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin-bottom: 80px;

    form{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        background: linear-gradient(to top, #8A2BE2, #87CEEB);
        width: 80%;
        padding: 35px 65px;
        border-radius: 20px; 
        box-shadow: 8px 8px 16px rgba(127, 6, 226, 0.801); 
    }

    @media screen and (max-width: 720px){

        form{
            flex-direction: column;
            width: 90%;
            padding: 0;
        }
    }
`
const Subtitulo = styled.h2`
    width: 100%;
`

export const Formulario = (props) => {

    const [genero, setGenero] = useState('')
    const [obra, setObra] = useState('')
    const [volume, setVolume] = useState('')
    const [imagem, setImagem] = useState('')
    const [capitulo, setCapitulo] = useState('')
    const [link, setLink] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        postLivro(obra, volume, imagem, link, capitulo, genero)
            .then(data => {
                alert("Adicão bem sucedida!")
                console.log(obra)
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    alert(error.response.data);
                  } else if (error.response && error.response.status === 422) {
                    alert(error.response.data);
                  } else if (error.response && error.response.status === 500) {
                    alert(error.response.data);
                  } else {
                    console.log('Ocorreu um erro ao adicionar a obra.');
                    console.log(error);
                  }
            });
    }

    return (
        <FormularioContainer>
            <form onSubmit={aoSalvar} >
                <Subtitulo>Adicione uma nova obra</Subtitulo>
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gênero Literário"
                    itens={props.generos}
                    valor={genero}
                    aoAlterado={e => setGenero(e.target.value)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Obra"
                    placeholder="Nome da obra"
                    valor={obra}
                    aoAlterado={e => setObra(e.target.value)}
                />
                <CampoTexto
                    label="Volume"
                    placeholder="Volume da obra"
                    valor={volume}
                    aoAlterado={e => setVolume(e.target.value)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Página"
                    placeholder="Numero da pagina ou capitulo atual"
                    valor={capitulo}
                    aoAlterado={e => setCapitulo(e.target.value)}

                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Adicione o link de uma imagem da obra"
                    valor={imagem}
                    aoAlterado={e => setImagem(e.target.value)}
                />
                <CampoTexto
                    label="Link"
                    placeholder="Link para obras digitais"
                    valor={link}
                    aoAlterado={e => setLink(e.target.value)}
                />
                <Botao type="submit" >
                    Adicionar nova obra
                </Botao>
            </form>
        </FormularioContainer>
    )
}