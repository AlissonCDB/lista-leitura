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

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to top, #8A2BE2, #87CEEB);
        padding: 0;
        width: 90%;
        border-radius: 20px; 
        box-shadow: 8px 8px 16px rgba(127, 6, 226, 0.801);
        margin-bottom: 20px;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 720px){

        form{
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding: 35px 65px;
            width: 80%;
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
    const [pagina, setPagina] = useState('')
    const [link, setLink] = useState('')

    const aoSalvar = async (event) => {
        event.preventDefault();
        try {
          const data = await postLivro(obra, volume, imagem, link, pagina, genero);
          alert(data.message || "Adição bem-sucedida!");
          console.log(data);
          
          setGenero('');
          setObra('');
          setVolume('');
          setImagem('');
          setPagina('');
          setLink('');
        } catch (error) {
          if (error.response && error.response.data) {
            alert(error.response.data.message || "Ocorreu um erro ao adicionar a obra.");
          } else {
            console.log('Ocorreu um erro ao adicionar a obra.');
            console.log(error);
          }
        }
      };

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
                    valor={pagina}
                    aoAlterado={e => setPagina(e.target.value)}

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