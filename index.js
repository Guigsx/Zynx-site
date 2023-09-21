const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const porta = 2000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")))

app.use(
    session({
        secret: 'root',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/comandos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comandos.html'))
});

app.listen(porta, () => {
    console.log(`Servidor online na porta ${porta}!`);
});