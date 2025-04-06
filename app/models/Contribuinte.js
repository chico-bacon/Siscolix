class Contribuinte {
    constructor (nome, phone, email, senha, situacao) {
        this.nome = nome;
        this.phone = phone;
        this.email = email;
        this.senha = senha;
        this.situacao = situacao;
    }

}

module.exports = Contribuinte;