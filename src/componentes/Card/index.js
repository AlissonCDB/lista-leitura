import "./Card.css"

const Card = ({ obra, imagem, capitulo, corDeFundo }) => {

    return (

        <div className="card__container">
            <div className="card__cabecalho" style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={obra}/>
                
            </div>

            <div className="card__rodape">

                <h4> {obra} </h4>
                <h5> {capitulo} </h5>

            </div>
    
        
        </div>

    )
}

export default Card