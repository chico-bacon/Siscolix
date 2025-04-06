const UsuarioSQLStore = require('../models/usuariosSQLStore');
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

class UsuarioController {

    segredo = process.env.SEGREDO;

    constructor(UsuarioSQLStore) {
        this.UsuarioSQLStore = UsuarioSQLStore;
    }

    async listar(request, response) {
        let usuarios = await this.UsuarioSQLStore.listar();
        response.json(usuarios);
    }

    async inserir(request, response) {
        try {
            const { nome, phone, email, nivel, situacao, login, senha } = request.body;

            let usuario = new Usuario(nome, phone, email, nivel, situacao, login);
            usuario.senha = senha;
            console.log("Objeto:", usuario);
            await this.UsuarioSQLStore.inserir(usuario);
            response.status(201).json(usuario);
        } catch (e) {
            response.status(400).send('Erro: ' + e.message);
        }
    }

    async alterar(request, response) {
        let id = request.params.id
        let usuario = new Usuario(nome.request.body, phone.request.body, email.request.body, nivel.request.body, situacao.request.body);
        await this.UsuarioSQLStore.alterar(id, usuario);
        response.send(usuario);
    }

    async apagar(request, response) {
        let id = request.params.id
        await this.UsuarioSQLStore.apagar(id);
        response.send();
    }

    async ver(request, response) {
        let id = request.params.id
        let usuario = await this.UsuarioSQLStore.ver(id);
        response.json(usuario);
    }

    loginForm(request, response) {
        response.render('login');
    }

    async login(request, response) {
        let nome = request.body.nome;
        let senha = request.body.senha;
        let usuario = await this.UsuarioSQLStore.procurarPorNome(nome);
        console.log({usuario});
        if (usuario) {
            if (usuario.compararSenha(senha)) {
                let token = jwt.sign({...usuario}, this.segredo);
                response.cookie('token', token, {httpOnly: true, maxAge: 86400000});
                response.json({ok: true});
                return
            }
        } else {
            new Usuario('', '', 'a').compararSenha('b');
        }
        response.json({ok: false});
    }
}

module.exports = UsuarioController;