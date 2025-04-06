class UsuarioSQLStore {
    constructor(conexao) {
        this.conexao = conexao;
    }

    async listar() {
        try {
            const [resposta] = await this.conexao.query(
                'SELECT * FROM usuarios'
            );
            return resposta;
    
        } catch (erro) {
            console.log(erro + ', Servidor não responde!')
        }
    }

    async inserir(usuario) {
        try {
            const sql = `INSERT INTO usuarios(
                nome, 
                phone, 
                email, 
                login, 
                senha, 
                nivel, 
                situacao) 
                values(?, ?, ?, ?, ?, ?, ?);`;

            const [resposta] = await this.conexao.execute(sql, [usuario.nome, usuario.phone, usuario.email, usuario.login, usuario.senha, usuario.nivel, usuario.situacao]);

            console.log(resposta);

        } catch(erro) {
            console.log(erro);
        }   
    }

    async alterar(id, usuario) {
        try {
            let sql = `UPDATE usuarios SET nome=?, phone=?, email=?, senha=?, nivel=?, situacao=? WHERE id=?`;
            console.log(sql);
            const [results, fields] = await this.conexao.query(sql, [
                usuario.nome,
                usuario.phone,
                usuario.email,
                usuario.senha,
                usuario.nivel,
                usuario.situacao,
                id
            ]);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async apagar(id) {
        try {
            let sql = `DELETE FROM usuarios where id=?`;
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
                'SELECT * FROM `usuarios` WHERE id=?',
                [id]
            );

            return results[0];
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async procurarPorNome(nomePesquisa) {
        try {
            const [results, fields] = await this.conexao.query(
                'SELECT * FROM `usuarios` WHERE nome=?',
                [nomePesquisa]
            );

            if (results[0]) {
                let {id, nome, ano, senha} = results[0];
                return new servico(nome, ano, senha, id);
            }
            else {
                return null;
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}

module.exports = UsuarioSQLStore;