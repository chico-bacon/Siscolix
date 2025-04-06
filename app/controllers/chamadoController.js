const chamadoSQLStore = require('../models/chamadosSQLStore');
const Chamado = require('../models/Chamado');

class ChamadoController {

    segredo = process.env.SEGREDO;

    constructor(ChamadoSQLStore) {
        this.ChamadoSQLStore =ChamadoSQLStore;
    }

    async listar(request, response) {
        let chamados = await this.ChamadosQLStore.listar();
        response.json(chamados);
    }

    async inserir(request, response) {
        try {
            const { id_contribuinte, data_hora, tipo, observacao, localizacao, imagem } = request.body;

            let chamado = new Chamado(id_contribuinte, data_hora, tipo, observacao, localizacao, imagem);
            console.log("Objeto:", chamado);
            await this.ChamadoSQLStore.inserir(chamado);
            response.status(201).json(chamado);
        } catch (e) {
            response.status(400).send('Erro: ' + e.message);
        }
    }

    async alterar(request, response) {
        let id = request.params.id
        let chamado = new Chamado(id_contribuinte.request.body, data_hora.request.body, tipo.request.body, observacao.request.body, localizacao.request.body, imagem.request.body);
        await this.ChamadoSQLStore.alterar(id, chamado);
        response.send(chamado);
    }

    async apagar(request, response) {
        let id = request.params.id
        await this.ChamadoSQLStore.apagar(id);
        response.send();
    }

    async ver(request, response) {
        let id = request.params.id
        let chamado = await this.ChamadoSQLStore.ver(id);
        response.json(chamado);
    }
}

module.exports = ChamadoController;