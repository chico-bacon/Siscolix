class chamadoSQLStore {
    constructor(conexao) {
        this.conexao = conexao;
    }

    async listar() {
        try {
            const [resposta] = await this.conexao.query(
                'SELECT * FROM chamados'
            );
            return resposta;
    
        } catch (erro) {
            console.log(erro + ', Servidor não responde!')
        }
    }

    async inserir(chamado) {
        try {
            const sql = `INSERT INTO chamados(
            id_contribuinte,
            data_hora,
            tipo,
            observacao,
            localizacao,
            imagem
            ) 
            values(?, ?, ?, ?, ?, ?);`;

            const [resposta] = await this.conexao.execute(sql, [chamado.id_contribuinte, chamado.data_hora, chamado.tipo, chamado.observacao, chamado.localizacao, chamado.imagem]);

            console.log(resposta);

        } catch(erro) {
            console.log(erro);
        }   
    }

    async alterar(id, chamado) {
        try {
            let sql = `UPDATE chamados SET id_contribuinte=?, data_hora=?, tipo=?, observacao=?, localizacao=?, imagem=? WHERE id=?`;
            console.log(sql);
            const [results, fields] = await this.conexao.query(sql, [
                chamado.id_contribuinte,
                chamado.data_hora,
                chamado.tipo,
                chamado.observacao,
                chamado.localizacao,
                chamado.imagem,
                id
            ]);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async apagar(id) {
        try {
            let sql = `DELETE FROM chamados where id=?`;
            console.log(sql);
            const [results, fields] = await this.conexao.query(sql, [
                id
            ]);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async ver(id) {
        try {
            const [results, fields] = await this.conexao.query(
                'SELECT * FROM `chamados` WHERE id=?',
                [id]
            );

            return results[0];
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}

module.exports = chamadoSQLStore;