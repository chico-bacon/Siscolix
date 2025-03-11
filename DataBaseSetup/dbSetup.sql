USE siscolix;
CREATE TABLE usuarios (
	id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30),
    phone VARCHAR(11),
    email VARCHAR(256),
    senha VARCHAR(128),
    situacao CHAR(1)
);

CREATE TABLE contribuintes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    phone VARCHAR(11),
    email VARCHAR(256),
    senha VARCHAR(128),
    situacao CHAR(1)
);

CREATE TABLE chamados (
	id_contribuinte INT,
    FOREIGN KEY (id_contribuinte)
    REFERENCES contribuintes(id),
    tipo CHAR(1),
    observacao VARCHAR(255),
    localizacao VARCHAR(100),
    imagem LONGTEXT
);

CREATE TABLE noticias (
	id INT AUTO_INCREMENT PRIMARY KEY,
    tipo CHAR(1),
    situacao CHAR(1),
    machete VARCHAR(80),
    data_publicacao DATE,
    conteudo LONGTEXT,
	imagem LONGTEXT
);
