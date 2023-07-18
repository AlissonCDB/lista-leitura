import axios from "axios";

const estanteAPI = axios.create({baseURL: "https://alissonbrittoapi.vercel.app/listaLeitura.json"})

async function getLivros() {
    const response = await estanteAPI.get('/')
    return response.data
}

async function postLivro(Obra, Volume, Imagem, Link, Capitulo, Genero) {
    const response = await estanteAPI.post('/', { Obra, Volume, Imagem, Link, Capitulo, Genero})
    return response.data
}

export {
    getLivros,
    postLivro
}