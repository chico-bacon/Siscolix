USE siscolix;

/*CHECKANDO TABELAS*/
show tables;

/*CHECKANDO COLUNAS*/
show columns from usuarios;
show columns from contribuintes;
show columns from noticias;
show columns from chamados;

/*VERIFICANDO REGISTROS DAS TABELAS*/
select * from usuarios;
select * from contribuintes;
select * from chamados;
select * from noticias;

/*INSERINDO NA TABELA USUARIOS*/

INSERT INTO usuarios(
	nome,
	phone, 
	email,
    login,
	senha, 
	situacao,
    nivel
) 
value(
	'John', 
    '85929303132', 
    'johndoe@email.com',
    'john@paracuru.gov.br',
    'password', 
    'A',
    'A'
    );
    
INSERT INTO usuarios(
	nome,
	phone, 
	email,
    login,
	senha, 
	situacao,
    nivel
) 
value(
	'alex', 
    '85929303132', 
    'alex@email.com',
    'alex@paracuru.gov.br',
    'password', 
    'I',
    'V'
    );
    
/*INSERINDO NA TABELA DE CONTRIBUINTES*/
insert into contribuintes(
nome,
phone,
email,
senha,
situacao
) 
values(
'Ulisses',
'85923456789',
'ulisses@email.com',
'senha',
'A'
);

insert into contribuintes(
nome,
phone,
email,
senha,
situacao
) 
values(
'Ulisses',
'85923456789',
'ulisses@email.com',
'senha',
'A'
);

insert into contribuintes(
nome,
phone,
email,
senha,
situacao
) 
values(
'Beatriz',
'85923456789',
'beatriz@email.com',
'senha',
'I'
);

/*INSERINDO NA TABELA DE CHAMADOS*/
insert into chamados(
id_contribuinte,
data_hora,
tipo, 
observacao, 
localizacao,
imagem
) 
values(
2,
current_time(),
'P', 
'Informacao extra para orientar o motorista',
'Tabuleiro alegre, s/n, Quatro Bocas, Paracuru-CE, 62.680-000',
'Imagem tirada pela camera do cidadado para comprovar quadro'
);

insert into chamados(
id_contribuinte,
data_hora,
tipo, 
observacao, 
localizacao,
imagem
) 
values(
1,
current_time(),
'E', 
'Informacao extra para orientar o motorista',
'Rua escura, s/n, Conjunto Nova Esperanca, Paracuru-CE, 62.680-000',
'Imagem tirada pela camera do cidadado para comprovar quadro'
);

/*INSERINDO NA TABELA DE NOTICIAS*/

insert into noticias(
tipo,
situacao,
manchete,
data_publicacao,
conteudo,
imagem
) 
values(
'U',
'A',
'Você Pode Solicitar Coleta da Sua Poda e Residuos de Contrucao Para A Prefeitura',
CURDATE(),
'Conteudo da noticia que sera lido pelo usuario',
'Imagem de capa da noticia'
);

insert into noticias(
tipo,
situacao,
manchete,
data_publicacao,
conteudo,
imagem
) 
values(
'U',
'I',
'Prefeitura Abre Novas Licitacoes Para Prestadores De Servicos de Limpeza Publica',
CURDATE(),
'Conteudo da noticia que sera lido pelo usuario',
'Imagem de capa da noticia'
);