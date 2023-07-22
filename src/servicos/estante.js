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
async function patchLivro(_id, obra, volume, imagem, link, pagina, genero) {
    try {
        const response = await estanteAPI.patch(`/livros/${_id}`, { obra, volume, imagem, link, pagina, genero });
        console.log("Livro atualizado com sucesso!");
        return response.data;
    } catch (error) {
        console.log("Ocorreu um erro ao atualizar o livro:", error);
        throw error;
    }
}
async function deleteLivro(_id) {
    const response = await estanteAPI.delete(`/livros/${_id}`)
    return response.data
}


export {
    getLivros,
    postLivro,
    patchLivro,
    deleteLivro
}