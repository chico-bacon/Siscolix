const NoticiaSQLStore = require('../models/noticiasSQLStore');
const Noticia = require('../models/Noticia')

class NoticiaController {

    segredo = process.env.SEGREDO;

    constructor(NoticiaSQLStore) {
        this.NoticiaSQLStore =NoticiaSQLStore;
    }

    async listar(request, response) {
        let noticias = await this.NoticiaSQLStore.listar();
        response.json(noticias);
    }

    async inserir(request, response) {
        try {
            const { tipo, situacao, manchete, data_publicacao, conteudo, imagem  } = request.body;

            let noticia = new Noticia(tipo, situacao, manchete, data_publicacao, conteudo, imagem);
            console.log("Objeto:", noticia);
            await this.NoticiaSQLStore.inserir(noticia);
            response.status(201).json(noticia);
        } catch (e) {
            response.status(400).send('Erro: ' + e.message);
        }
    }

    async alterar(request, response) {
        const { tipo, situacao, manchete, data_publicacao, conteudo, imagem  } = request.body;

        let noticia = new Noticia(tipo, situacao, manchete, data_publicacao, conteudo, imagem);
        let id = request.params.id
        await this.NoticiaSQLStore.alterar(id, noticia);
        response.send(noticia);
    }

    async apagar(request, response) {
        let id = request.params.id
        await this.NoticiaSQLStore.apagar(id);
        response.send();
    }

    async ver(request, response) {
        let id = request.params.id
        let noticia = await this.NoticiaSQLStore.ver(id);
        response.json(noticia);
    }
}

module.exports = NoticiaController;