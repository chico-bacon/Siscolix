const bcrypt = require('bcrypt');

class Contribuinte {
    constructor (nome, phone, email, situacao, senha) {
        this.nome = nome;
        this.phone = phone;
        this.email = email;
        this.situacao = situacao;
        this.senha = senha;
    }

    set senha(senha) {
        console.log({senha});
        if (!senha) {
            throw new Error('Senha não pode ser vazia!');
        }
        this.senha = senha;
    }

    get senha() {
        return this._senha;
    }

    compararSenha(senha) {
        senha === this.senha;
    }

}

module.exports = Contribuinte;