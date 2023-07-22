import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { deleteLivro, patchLivro } from "../../servicos/estante"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 280px;
    padding: 16px 16px 32px 16px;

    h4{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 270px;
        margin: 15px 5px;
        color: #6278f7;
        height: 54px;
        font-size: 20px;
        font-weight: bold;
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
    display: flex;
    flex-direction: column;
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
        margin: 0;
    }

`
const BotaoDelete = styled.button`
    
    position: absolute;
    right: 15px;
    margin: 15px;
    background-color: #E06B69;
    color: white;
    border: none;
    border-radius: 45px;

    &:hover{
        background-color: white;
        color: black;
    }
`
const BotaoAlterarNumeros = styled.button`
    margin: 15px 5px 0 5px;
    background-color: cyan;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 1px solid;

`

const Card = ({ onDelete, opcoesOcultas, id, obra, volume, capitulo, imagem, link, corDeFundo, genero }) => {
    const impressoOuDigital = link ? "Ir para a obra" : "Obra física";
    const [digitalTrue, setDigitalTrue] = useState(!!link);
    const [valorVolume, setValorVolume] = useState(volume);
    const [valorPagina, setValorPagina] = useState(capitulo);
    const imagemPadrao = imagem || "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
    const mostrarVolume = () =>{
        if(valorVolume === 0){
            return "Unico" 
        } else {
            return valorVolume
        }
    }
    const mostrarPagina = () =>{
        if(valorPagina === 0){
            return "Completo" 
        } else {
            return valorPagina
        }
    }
    useEffect(() => {
        setDigitalTrue(!!link);
    }, [link]);
    useEffect(() => {
        alterarLivro();
    });

    const aumentarPagina = () => {
        setValorPagina(valorPagina + 1);
    };
    const diminuirPagina = () => {
        if (valorPagina === 0) {
        } else if (valorPagina >= 1) {
            setValorPagina(valorPagina - 1);
        }
    };
    const aumentarVolume = () => {
        setValorVolume(valorVolume + 1)
    }
    const diminuirVolume = () => {
        if (valorVolume === 0) {
        } else if (valorVolume >= 1) {
            setValorVolume(valorVolume - 1);
        }
    };
    const deletarLivro = async () => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir o livro?");
        if (confirmDelete) {
            try {
                await deleteLivro(id);
                alert("Livro deletado!");
                onDelete(id);
            } catch (error) {
                console.log("Ocorreu um erro ao deletar o livro:");
                console.log(error);
            }
        }
    };
    const alterarLivro = () => {
        try {
            patchLivro(id, obra, valorVolume, imagem, link, valorPagina, genero);
            console.log("Livro atualizado!");
        } catch (error) {
            console.log("Não foi possível alterar o livro:");
            console.log(error.response.data);
        }
    };
    return (
        <CardContainer>
            {opcoesOcultas && <BotaoDelete onClick={deletarLivro}>Excluir</BotaoDelete>}
            <ImagemContainer style={{ backgroundColor: corDeFundo }}>
                <img src={imagemPadrao} alt={obra} />
            </ImagemContainer>
            <InformacoesContainer>
                <h4>{obra}</h4>
                <VolumePagina>
                    <h5>
                        Volume
                        <br /><br />
                        {mostrarVolume()}
                        <br />
                        {opcoesOcultas && <BotaoAlterarNumeros onClick={diminuirVolume}>-</BotaoAlterarNumeros>}
                        {opcoesOcultas && <BotaoAlterarNumeros onClick={aumentarVolume}>+</BotaoAlterarNumeros>}
                    </h5>
                    <h5>
                        Pagina
                        <br /><br />
                        {mostrarPagina()}
                        <br />
                        {opcoesOcultas && <BotaoAlterarNumeros onClick={diminuirPagina}>-</BotaoAlterarNumeros>}
                        {opcoesOcultas && <BotaoAlterarNumeros onClick={aumentarPagina}>+</BotaoAlterarNumeros>}
                    </h5>
                </VolumePagina>
                {digitalTrue && <h5><a href={link}> {impressoOuDigital} </a></h5>}
                {!digitalTrue && <h5>{impressoOuDigital}</h5>}
            </InformacoesContainer>
        </CardContainer>
    );
};

export default Card;