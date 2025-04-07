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
            const { nome, phone, email, situacao, senha } = request.body;

            let contribuinte = new Contribuinte(nome, phone, email, situacao); 
            contribuinte.senha = senha;
            console.log("Objeto:", contribuinte);
            await this.ContribuinteSQLStore.inserir(contribuinte);
            response.status(201).json(contribuinte);
        } catch (e) {
            response.status(400).send('Erro: ' + e.message);
        }
    }

    async alterar(request, response) {
        const { nome, phone, email, situacao, senha } = request.body;

        let contribuinte = new Contribuinte(nome, phone, email, situacao); 
        let id = request.params.id
        await this.ContribuinteSQLStore.alterar(id, contribuinte);
        response.send(contribuinte);
    }

    async apagar(request, response) {
        let id = request.params.id
        await this.ContribuinteSQLStore.apagar(id);
        response.send();
    }

    async ver(request, response) {
        let id = request.params.id;
        let contribuinte = await this.ContribuinteSQLStore.ver(id);
        response.json(contribuinte);
    }

    async procurarPorEmail(request, response) {
        let email = request.body.email;
        let contribuinte = await this.ContribuinteSQLStore.procurarPorEmail(email);
        response.json(contribuinte);
    }

    loginForm(request, response) {
        response.render('login');
    }

    async login(request, response) {
        let email = request.body.email;
        let senha = request.body.senha;
        console.log(email);
        console.log(senha);
        let contribuinte = new Contribuinte(await this.ContribuinteSQLStore.procurarPorEmail(email));
        //let contribuinte = await this.ContribuinteSQLStore.procurarPorEmail(email);
        console.log({contribuinte});
        if (contribuinte.compararSenha(senha)) {
            if (confirma_senha) {
                /*let token = jwt.sign({...contribuinte}, this.segredo);
                response.cookie('token', token, {httpOnly: true, maxAge: 86400000});*/
                response.render('aberturachamados');
                //response.json({ok: true});
            }
        } else {
            new Contribuinte('', '', 'a').compararSenha('b');
        }
        response.json({ok: false});
    }
}

module.exports = ContribuinteController;