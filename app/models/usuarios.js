class Usuario {
    constructor(conexao) {
        this.conexao = conexao;
    }

    async lista() {
        try {
            const [resposta] = await this.conexao.query(
                'SELECT * FROM usuarios'
            );
            return resposta;
    
        } catch (erro) {
            console.log(erro + ', Servidor não responde!')
        }
    }

    async inserir(nome, phone, email, senha, nivel, situacao) {
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

            const [resposta] = await conexao.execute(sql, [nome, phone, email, senha, nivel, situacao]);

            console.log(resposta);

        } catch(erro) {
            console.log(erro);
        }   
    }

    async atualizar() {

    }

    async deletar() {

    }


}