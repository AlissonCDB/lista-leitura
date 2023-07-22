import { styled } from 'styled-components';
import { GeneroLiterario } from '../componentes/GeneroLiterario'
import { getLivros, deleteLivro } from '../servicos/estante'
import { useEffect, useState } from 'react';
import { generos } from "../componentes/Card/generos"

const BibliotecaContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const EditarContainer = styled.button``

export const Biblioteca = (props) => {
  const [livros, setLivros] = useState([])
  const [opcoesOcultas, setOpcoesOcultas] = useState(false)

  //Chama o Banco de Dados
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
  //Ativa ou oculta a edição
  const ativarAlteracao = () => {
    setOpcoesOcultas(!opcoesOcultas)
  }
  //Exclui o livro desejado
  const handleDeleteLivro = async (id) => {
    try {
      await deleteLivro(id);
      const estante = await getLivros()
      setLivros(estante);
    } catch (error) {
      console.log("Ocorreu um erro:");
      console.log(error);
    }
  };
  return (
    <BibliotecaContainer>
      <EditarContainer onClick={ativarAlteracao} >editar</EditarContainer>
      {generos.map(genero => <GeneroLiterario 
        key={genero.nome}
        corPrimaria={genero.corPrimaria}
        corSecundaria={genero.corSecundaria}
        nome={genero.nome}
        livros={livros.filter(livro => livro.genero === genero.nome)}
        opcoesOcultas={opcoesOcultas}
        onDelete={handleDeleteLivro}
      />)}
    </BibliotecaContainer>
  )
}