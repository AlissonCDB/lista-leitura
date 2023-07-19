import { useState, useEffect} from "react"
import { styled } from "styled-components"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 32px;

    h4{
        color: #6278f7;
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
        margin: 15px 0;
    }

    h5{
        font-size: 18px;
        line-height: 18px;
        margin: 16px 0;
    }
`
const ImagemContainer = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px 10px 0 0;

    img{
        width: 100px;
        height: 142px;
        position: relative;
        bottom: -50px;
    }
`
const InformacoesContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    padding-top: 60px;
    padding-bottom: 20px;
    border-radius: 0 0 10px 10px;

`
const VolumePagina = styled.div`
    display: flex;
    align-items: center;

    h5{
        width: 50%;
    }

`


const Card = ({ obra, volume, capitulo, imagem, link, corDeFundo }) => {
    const impressoOuDigital = link ? "Ir para a obra" : "Obra física";
    const [digitalTrue, setDigitalTrue] = useState()

    useEffect(() => {
        setDigitalTrue(!!link);
    },
        [link]
    );
    return (

        <CardContainer>
            <ImagemContainer style={{ backgroundColor: corDeFundo }}>

                <img src={imagem} alt={obra} />

            </ImagemContainer>

            <InformacoesContainer>

                <h4> {obra} </h4>

                <VolumePagina>
                    <h5>Volume <br /><br /> {volume} </h5>
                    <h5>Pagina <br /><br /> {capitulo} </h5>
                </VolumePagina>

                {digitalTrue && <h5><a href={link}> {impressoOuDigital} </a></h5>}
                {!digitalTrue && <h5>{impressoOuDigital}</h5>}

            </InformacoesContainer>

        </CardContainer>

    )
}

export default Card