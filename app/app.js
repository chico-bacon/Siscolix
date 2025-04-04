import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const mysql =  require('mysql2/promise');
require('dotenv').config();

const UsuariosSQLStore = require('./models/usuariosSQLStore');
const UsuarioController = require('./controllers/usuarioController');

const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
});

const usuarioSQLStore = new UsuariosSQLStore(connection);
const usuarioController = new UsuarioController(usuarioSQLStore);


//ROTAS DE GERENCIAMENTO DE USUARIOS

app.get('/users', (req, res) => {
    usuarioController.listar(req, res);
})

app.get('/users/:id', (req, res) => {
    res.send('Retornando Usuario Identificado por Id');
})

app.post('/users', (req, res) => {
    usuarioController.inserir(req, res);
})

app.put('/users/:id', (req, res) => {
    res.send('Atualizando Usuario Identificado por Id');
})

app.delete('/users/:id', (req, res) => {
    res.send('Deletando Usuarios Identificado por Id');
})

//ROTAS DE GERENCIAMENTO DE CONTRIBUINTES

app.get('/contribuintes', (req, res) => {
    res.send('Retornando contribuinte');
})

app.get('/contribuintes/:id', (req, res) => {
    res.send('Retornando contribuinte Identificado por Id');
})

app.post('/contribuintes', (req, res) => {
    res.send('Adicionando contribuinte na base de dados');
})

app.put('/contribuintes/:id', (req, res) => {
    res.send('Atualizando contribuintes Identificado por Id');
})

app.delete('/contribuintes/:id', (req, res) => {
    res.send('Deletando contribuintes Identificado por Id');
})

//ROTAS DE GERENCIAMENTO DE NOTICIAS
app.get('/noticias', (req, res) => {
    res.send('Retornando noticias');
})

app.get('/noticias/:id', (req, res) => {
    res.send('Retornando noticia Identificada por Id');
})

app.post('/noticias', (req, res) => {
    res.send('Adicionando noticias na base de dados');
})

app.put('/noticias/:id', (req, res) => {
    res.send('Atualizando noticia Identificada por Id');
})

app.delete('/noticias/:id', (req, res) => {
    res.send('Deletando noticia Identificada por Id');
})

//ROTA DE GERENCIAMENTO DE CHAMADOS
app.get('/chamados', (req, res) => {
    res.send('Retornando chamados');
})

app.get('/chamados/:id', (req, res) => {
    res.send('Retornando chamado Identificado por Id');
})

app.post('/chamados', (req, res) => {
    res.send('Adicionando chamados na base de dados');
})

app.put('/chamados/:id', (req, res) => {
    res.send('Atualizando chamado Identificado por Id');
})

app.delete('/chamados/:id', (req, res) => {
    res.send('Deletando chamado Identificado por Id');
})


app.listen(port, () => {
    console.log(`Siscolix listening on port ${port}`)
})


