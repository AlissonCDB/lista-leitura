import axios from "axios";

const estanteAPI = axios.create({baseURL: "https://alissonb-api.vercel.app/"})

async function getLivros() {
    const response = await estanteAPI.get('/livros')
    return response.data
}

async function postLivro(obra, volume, imagem, link, pagina, genero) {
    const response = await estanteAPI.post('/livros', { obra, volume, imagem, link, pagina, genero })
    return response.data
}

export {
    getLivros,
    postLivro
}