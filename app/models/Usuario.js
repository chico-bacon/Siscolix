class Usuario {
    constructor(nome, phone, email, nivel, situacao, login, senha) {
        this.nome = nome;
        this.phone = phone;
        this.email = email;
        this.nivel = nivel;
        this.situacao = situacao;
        this.login = login;
        this.senha = senha;
    }
}

module.exports = Usuario; 