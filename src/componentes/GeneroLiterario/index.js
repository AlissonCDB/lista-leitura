import Card from '../Card'
import './GeneroLiterario.css'

const GeneroLiterario = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const cssBorder = { borderColor: props.corPrimaria }


    return (

        props.livros.length > 0 && <section className='generoliterario__container' style={css}>
            <h3 style={cssBorder}>{props.nome}</h3>

            <div className='generoliterario__generos'>

                {props.livros.map(card => <Card
                    key={card.obra}
                    corDeFundo={props.corPrimaria}
                    obra={card.obra}
                    imagem={card.imagem}
                    capitulo={card.capitulo}
                />)}

            </div>

        </section>
    )

}

export default GeneroLiterario