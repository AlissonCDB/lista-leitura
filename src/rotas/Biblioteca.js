import { styled } from 'styled-components';
import { GeneroLiterario } from '../componentes/GeneroLiterario'
import { getLivros } from '../servicos/estante'
import { useEffect, useState } from 'react';

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

  const generos = [
    {
      nome: 'Livros',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Mangas',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Novels',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Manhwa',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }

  ]
  return (
    <BibliotecaContainer>
      {generos.map(genero => <GeneroLiterario 
        key={genero.nome}
        corPrimaria={genero.corPrimaria}
        corSecundaria={genero.corSecundaria}
        nome={genero.nome}
        livros={livros.filter(livro => livro.Genero === genero.nome)}
      />)}
    </BibliotecaContainer>
  )
}
