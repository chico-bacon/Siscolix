use siscolix;

select * from usuarios;
select * from contribuintes;
select * from chamados;
select * from noticias;

/*CRUD USUARIOS*/

/*BUSCANDO POR ID*/
select * from usuarios where id=1;
select * from contribuintes where id=1;
select * from chamados where id=1;
select * from noticias where id=1;
/*LOGIN VALIDO*/
select id from usuarios where login = 'alex@paracuru.gov.br' and senha = 'password';
/*BUSCANDO USUARIOS INATIVOS E INATIVOS*/
select * from usuarios where situacao = 'I';
select * from usuarios where situacao = 'A';
/*BUSCANDO USUARIOS POR NIVEL*/
select * from usuarios where nivel = 'A';


update usuarios set nome=usuarios.nome where id=1;
/*ATUALIZANDO REGISTROS DAS TABELAS*/
update usuarios set nome=usuarios.nome, phone='85992345678', login=usuarios.login, senha=usuarios.senha, situacao=usuarios.situacao, nivel=usuarios.nivel where id=1;
update contribuintes set nome=contribuintes.nome, phone=contribuintes.phone, email=contribuintes.email, senha='micomacaco' where id=1;
update chamados set id_contribuinte=chamados.id_contribuinte, tipo=chamados.tipo, observacao='', localizacao=chamados.localizacao, imagem=chamados.imagem where id=1;
update noticias set tipo=noticias.tipo, situacao=noticias.situacao, manchete=noticias.manchete, data_publicacao=noticias.data_publicacao, conteudo=noticias.conteudo, imagem=noticias.imagem where id=1;

/*DELETANDO REGISTROS DA TABELA*/
delete from usuarios where id=3;
delete from noticias where id=3;
delete from contribuintes where id=3;
delete from chamados where id=3;

/**/