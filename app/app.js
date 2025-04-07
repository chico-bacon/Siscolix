import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const mysql =  require('mysql2/promise');
require('dotenv').config();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const UsuariosSQLStore = require('./models/usuariosSQLStore');
const UsuarioController = require('./controllers/usuarioController');
const ContribuinteSQLStore = require('./models/contribuintesSQLStore');
const ContribuinteController = require('./controllers/contribuinteController');
const ChamadoSQLStore = require('./models/chamadosSQLStore');
const ChamadoController = require('./controllers/chamadoController');
const NoticiaSQLStore = require('./models/noticiasSQLStore');
const NoticiaController = require('./controllers/noticiaController');

const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
});

//console.log('ConnectionConfig: ', connection);

const usuarioSQLStore = new UsuariosSQLStore(connection);
const contribuinteSQLStore = new ContribuinteSQLStore(connection);
const chamadoSQLStore = new ChamadoSQLStore(connection);
const noticiaSQLStore = new NoticiaSQLStore(connection);
const usuarioController = new UsuarioController(usuarioSQLStore);
const contribuinteController = new ContribuinteController(contribuinteSQLStore);
const chamadoController = new ChamadoController(chamadoSQLStore);
const noticiaController = new NoticiaController(noticiaSQLStore);

//ROTAS DE GERENCIAMENTO DE USUARIOS

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/logincontribuinte', (req, res) => {
    res.render('logincontribuinte');
})

app.get('/admin', (req, res) => {
    res.render('areaRestrita');
})

app.get('/aberturachamados', (req, res) => {
    res.render('aberturachamados');
})

app.post('/aberturachamados', (req, res) => {
    res.render('aberturachamados');
})

app.get('/usuarios', (req, res) => {
    usuarioController.listar(req, res);
})

app.get('/usuarios/:id', (req, res) => {
    usuarioController.ver(req, res);
})

app.post('/usuarios', (req, res) => {
    usuarioController.inserir(req, res);
})

app.put('/usuarios/:id', (req, res) => {
    usuarioController.alterar(req, res);
})

app.delete('/usuarios/:id', (req, res) => {
    usuarioController.apagar(req, res);
})

//ROTAS DE GERENCIAMENTO DE CONTRIBUINTES

app.get('/contribuintes', (req, res) => {
    contribuinteController.listar(req, res);
})

app.get('/contribuintes/:id', (req, res) => {
    contribuinteController.ver(req, res);
})

app.post('/contribuintes', (req, res) => {
    contribuinteController.inserir(req, res);
})

app.post('/contribuintes/login', (req, res) => {
    contribuinteController.login(req, res);
})

app.put('/contribuintes/:id', (req, res) => {
    contribuinteController.alterar(req, res);
})

app.delete('/contribuintes/:id', (req, res) => {
    contribuinteController.apagar(req, res);
})

//ROTAS DE GERENCIAMENTO DE NOTICIAS
app.get('/noticias', (req, res) => {
    noticiaController.listar(req, res);
})

app.get('/noticias/:id', (req, res) => {
    noticiaController.ver(req, res);
})

app.post('/noticias', (req, res) => {
    noticiaController.inserir(req, res);
})

app.put('/noticias/:id', (req, res) => {
    noticiaController.alterar(req, res);
})

app.delete('/noticias/:id', (req, res) => {
    noticiaController.apagar(req, res);
})

//ROTA DE GERENCIAMENTO DE CHAMADOS

app.get('/chamados', (req, res) => {
    chamadoController.listar(req, res);
})

app.get('/chamados/:id', (req, res) => {
    chamadoController.ver(req, res);
})

app.post('/chamados', (req, res) => {
    chamadoController.inserir(req, res);
})

app.put('/chamados/:id', (req, res) => {
    chamadoController.alterar(req, res);
})

app.delete('/chamados/:id', (req, res) => {
    chamadoController.apagar(req, res);
})


app.listen(port, () => {
    console.log(`Siscolix listening on port ${port}`)
})


