class NoticiaSQLStore {
    constructor(conexao) {
        this.conexao = conexao;
    }

    async listar() {
        try {
            const [resposta] = await this.conexao.query(
                'SELECT * FROM noticias'
            );
            return resposta;
    
        } catch (erro) {
            console.log(erro + ', Servidor não responde!')
        }
    }

    async inserir(noticia) {
      try {
            const sql = `INSERT INTO noticias(
                tipo,
                situacao,
                manchete,
                data_publicacao,
                conteudo,
                imagem        
                ) 
            values(?, ?, ?, ?, ?, ?);`;

            const [resposta] = await conexao.execute(sql, [noticia.situacao, noticia.tipo, noticia.manchete, noticia.data_publicacao, noticia.conteudo, noticia.imagem]
            );

            console.log(resposta);

        } catch(erro) {
            console.log(erro);
        }   
    }

    async alterar(id, noticia) {
        try {
            let sql = `UPDATE noticias SET situacao=?, tipo=?, manchete=?, data_publicacao=?, conteudo=?, imagem=? WHERE id=?`;
            console.log(sql);
            const [results, fields] = await this.conexao.query(sql, [
                noticia.tipo,
                noticia.situacao,
                noticia.manchete,
                noticia.data_publicacao,
                noticia.conteudo,
                noticia.imagem,
                id
            ]);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async apagar(id) {
        try {
            let sql = `DELETE FROM noticias where id=?`;
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
                'SELECT * FROM `noticias` WHERE id=?',
                [id]
            );

            return results[0];
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}

module.exports = NoticiaSQLStore;