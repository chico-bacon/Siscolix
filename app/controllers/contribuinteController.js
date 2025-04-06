const ContribuinteSQLStore = require('../models/contribuintesSQLStore');
const Contribuinte = require('../models/Contribuinte');
const jwt = require('jsonwebtoken');

class ContribuinteController {

    segredo = process.env.SEGREDO;

    constructor(ContribuinteSQLStore) {
        this.ContribuinteSQLStore = ContribuinteSQLStore;
    }

    async listar(request, response) {
        let contribuinte = await this.ContribuinteSQLStore.listar();
        response.json(contribuinte);
    }

    async inserir(request, response) {
        try {
            const { nome, phone, email, situacao, login, senha } = request.body;

            let contribuinte = new Contribuinte(nome, phone, email, situacao, login);
            contribuinte.senha = senha;
            console.log("Objeto:", contribuinte);
            await this.contribuinteSQLStore.inserir(contribuinte);
            response.status(201).json(contribuinte);
        } catch (e) {
            response.status(400).send('Erro: ' + e.message);
        }
    }

    async alterar(request, response) {
        let id = request.params.id
        let contribuinte = new Contribuinte(nome.request.body, phone.request.body, email.request.body, situacao.request.body);
        await this.ContribuinteSQLStore.alterar(id, contribuinte);
        response.send(contribuinte);
    }

    async apagar(request, response) {
        let id = request.params.id
        await this.contribuinteSQLStore.apagar(id);
        response.send();
    }

    async ver(request, response) {
        let id = request.params.id
        let contribuinte = await this.ContribuinteSQLStore.ver(id);
        response.json(contribuinte);
    }

    loginForm(request, response) {
        response.render('login');
    }

    async login(request, response) {
        let nome = request.body.nome;
        let senha = request.body.senha;
        let contribuinte = await this.ContribuinteSQLStore.procurarPorNome(nome);
        console.log({contribuinte});
        if (contribuinte) {
            if (contribuinte.compararSenha(senha)) {
                let token = jwt.sign({...contribuinte}, this.segredo);
                response.cookie('token', token, {httpOnly: true, maxAge: 86400000});
                response.json({ok: true});
                return
            }
        } else {
            new Contribuinte('', '', 'a').compararSenha('b');
        }
        response.json({ok: false});
    }
}

module.exports = ContribuinteController;