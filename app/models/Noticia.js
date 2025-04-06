class Noticia {
    constructor(tipo, situacao, manchete, data_publicacao, conteudo, imagem) {
        this.tipo = tipo;
        this.situacao = situacao;
        this.manchete = manchete;
        this.data_publicacao = data_publicacao;
        this.conteudo = conteudo;
        this.imagem = imagem;
    }
}

module.exports = Noticia; 