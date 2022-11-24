import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import GeneroLiterario from './componentes/GeneroLiterario';


function App() {

  const generos = [
    {
      nome: 'Livros',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Mangas e Manhwas',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Novels',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [livros, setLivros] = useState([])

  const aoNovoLivroAdicionado = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario generos={generos.map(genero => genero.nome)} aoLivroCadastrado={aoNovoLivroAdicionado} />

      {generos.map(genero => <GeneroLiterario 
      key={genero.nome} 
      nome={genero.nome} 
      corPrimaria={genero.corPrimaria} 
      corSecundaria={genero.corSecundaria} 
      livros={livros.filter(livro => livro.genero == genero.nome)}
      />)}

    </div>
  );
}

export default App;
