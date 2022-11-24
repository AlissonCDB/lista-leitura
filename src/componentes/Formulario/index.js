import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {


    const [obra, setObra] = useState('')
    const [imagem, setImagem] = useState('')
    const [capitulo, setCapitulo] = useState('')
    const [genero, setGenero] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoLivroCadastrado({
            obra,
            imagem,
            capitulo,
            genero
        })

        setObra('')
        setImagem('')
        setCapitulo('')
        setGenero('')
        
    }

    return (
        <section className='formulario__container'>
            <form onSubmit={aoSalvar}>
                <h2>Adicione os dados para adicionar uma nova obra</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Obra"
                    placeholder="Digite o nome da obra"
                    valor={obra}
                    aoAlterado={valor => setObra(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Adicione o link de uma imagem da obra"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Página/Capitulo"
                    placeholder="Numero da pagina ou capitulo atual"
                    valor={capitulo}
                    aoAlterado={valor => setCapitulo(valor)}

                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gênero Literário"
                    itens={props.generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                    
                />
                <Botao>
                    Adicionar nova obra
                </Botao>
            </form>
        </section>

    )

}

export default Formulario