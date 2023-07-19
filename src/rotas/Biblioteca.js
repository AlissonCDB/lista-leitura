import { styled } from 'styled-components';
import { GeneroLiterario } from '../componentes/GeneroLiterario'
import { getLivros } from '../servicos/estante'
import { useEffect, useState } from 'react';
import { generos } from "../componentes/Card/generos"

const BibliotecaContainer = styled.div``

export const Biblioteca = () => {
  const [livros, setLivros] = useState([])


  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const estante = await getLivros();
        setLivros(estante);
      } catch (error) {
        console.log(error);
      }
     };

     fetchLivros();
  }, [])
  return (
    <BibliotecaContainer>
      {generos.map(genero => <GeneroLiterario 
        key={genero.nome}
        corPrimaria={genero.corPrimaria}
        corSecundaria={genero.corSecundaria}
        nome={genero.nome}
        livros={livros.filter(livro => livro.genero === genero.nome)}
      />)}
    </BibliotecaContainer>
  )
}
