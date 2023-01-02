const express = require('express')
const app = express();
const connectToDb = require("./database/db");
const Noticia = require("./models/Noticia");
connectToDb();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded());

// GLOBAL VARIABLES
require('dotenv').config()

const PORT = process.env.PORT;

app.get('/', async (req, res) => {
    const noticias = await Noticia.find();
    res.render('home', { noticias })
})

app.get('/cadastrar', (req, res) => {
    res.render('cadastrar')
})

app.post('/cadastrar', async (req, res) => {
    const noticia = req.body;

    Noticia.create(noticia);
    res.redirect('/')
})

app.get('/pesquisar', async (req, res) => {
    const pesquisa = req.query['query'];
    const noticiasFiltered = await Noticia.find({titulo: {$regex: new RegExp(pesquisa, "i")} });
    res.render('pesquisa', { noticiasFiltered })
})

app.get('/noticia/:id', async (req, res) => {
    const id = req.params.id;
    const noticia = await Noticia.findOne({_id: id});
    res.render('noticia', { noticia })
})

app.listen(PORT, () => {
    console.log('Running server at: ' + PORT)
})

