import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { BotaoAlterarNumeros } from "./BotaoAlterarNumeros";

const VolumePaginaContainer = styled.div`
    display: flex;
    align-items: center
`
const BotoesContainer = styled.h5`
    width: 50%;
    margin: 0;
`
export const VolumeEPagina = ({
    alterarLivro,
    opcoesOcultas,
    valorPagina,
    valorVolume,
    setValorPagina,
    setValorVolume
}) => {

    const [onClick, setOnClick] = useState(false);

    useEffect(() => {
        if (onClick) {
            alterarLivro();
        }
    }, [onClick, alterarLivro]);

    const mostrarVolume = () => {
        if (valorVolume === 0) {
            return "Único";
        } else {
            return valorVolume;
        }
    };

    const mostrarPagina = () => {
        if (valorPagina === 0) {
            return "Completo";
        } else {
            return valorPagina;
        }
    };

    const aumentarPagina = () => {
        setValorPagina(valorPagina + 1);
        setOnClick(true);
    };

    const diminuirPagina = () => {
        if (valorPagina === 0) {
            // Evita que o valor seja negativo
        } else {
            setValorPagina(valorPagina - 1);
            setOnClick(true);
        }
    };

    const aumentarVolume = () => {
        setValorVolume(valorVolume + 1);
        setOnClick(true);
    };

    const diminuirVolume = () => {
        if (valorVolume === 0) {
            // Evita que o valor seja negativo
        } else {
            setValorVolume(valorVolume - 1);
            setOnClick(true);
        }
    };

    return (
        <VolumePaginaContainer>
            <BotoesContainer>
                Volume
                <br />
                <br />
                {mostrarVolume()}
                <br />
                {opcoesOcultas && (
                    <>
                        <BotaoAlterarNumeros
                            onClick={diminuirVolume}
                            children={"-"}
                            alterarLivro={() => setOnClick(true)}
                        />
                        <BotaoAlterarNumeros
                            onClick={aumentarVolume}
                            children={"+"}
                            alterarLivro={() => setOnClick(true)}
                        />
                    </>
                )}
            </BotoesContainer>
            <BotoesContainer>
                Página
                <br />
                <br />
                {mostrarPagina()}
                <br />
                {opcoesOcultas && (
                    <>
                        <BotaoAlterarNumeros
                            onClick={diminuirPagina}
                            children={"-"}
                            alterarLivro={() => setOnClick(true)}
                        />
                        <BotaoAlterarNumeros
                            onClick={aumentarPagina}
                            children={"+"}
                            alterarLivro={() => setOnClick(true)}
                        />
                    </>
                )}
            </BotoesContainer>
        </VolumePaginaContainer>
    );
};
