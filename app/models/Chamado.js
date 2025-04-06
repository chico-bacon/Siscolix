class Chamado {
    constructor(id_contribuinte, data_hora, tipo, observacao, localizacao, imagem) {
        this.id_contribuinte = id_contribuinte;
        this.data_hora = data_hora;
        this.tipo = tipo;
        this.observacao = observacao;
        this.localizacao = localizacao;
        this.imagem = imagem;
    }
}

module.exports = Chamado; 