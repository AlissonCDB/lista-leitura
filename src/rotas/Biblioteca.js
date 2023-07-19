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
      nome: 'Livro',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Manga',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Novel',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Manhwa',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }

  ]

  console.log(livros)
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
