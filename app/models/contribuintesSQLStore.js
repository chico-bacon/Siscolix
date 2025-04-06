class ContribuinteSQLStore {
    constructor(conexao) {
        this.conexao = conexao;
    }

    async listar() {
        try {
            const [resposta] = await this.conexao.query(
                'SELECT * FROM contribuintes'
            );
            return resposta;
    
        } catch (erro) {
            console.log(erro + ', Servidor não responde!')
        }
    }

    async inserir(contribuinte) {
        try {
            const sql = `INSERT INTO contribuintes(
            nome,
            phone,
            email,
            senha,
            situacao
            ) 
            values(?, ?, ?, ?, ?);`;

            const [resposta] = await this.conexao.execute(sql, [contribuinte.nome, contribuinte.phone, contribuinte.email, contribuinte.login, contribuinte.senha, contribuinte.situacao]);

            console.log(resposta);

        } catch(erro) {
            console.log(erro);
        }   
    }

    async alterar(id, contribuinte) {
        try {
            let sql = `UPDATE contribuinte SET nome=?, phone=?, email=?, senha=?, situacao=? WHERE id=?`;
            console.log(sql);
            const [results, fields] = await this.conexao.query(sql, [
                contribuinte.nome,
                contribuinte.phone,
                contribuinte.email,
                contribuinte.senha,
                contribuinte.situacao,
                id
            ]);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async apagar(id) {
        try {
            let sql = `DELETE FROM contribuintes where id=?`;
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
                'SELECT * FROM `contribuintes` WHERE id=?',
                [id]
            );

            return results[0];
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}

module.exports = ContribuinteSQLStore;