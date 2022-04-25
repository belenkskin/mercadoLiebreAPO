const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;
/*
se inicia con npm star en la terminal
*/

//app.listen(3000)

app.listen(PORT, () => { console.log('Servidor corriendo en el puerto:' + PORT) })

app.get('/', function (req, res) {
    //res.send('Levantando un servidor con Express');
    res.sendFile(path.join(__dirname, '/views/index.html'));

});
app.get('/login', function (req, res) {
    //res.send('Levantando un servidor con Express');
    res.sendFile(path.join(__dirname, '/views/login.html'));

});
app.get('/index', function (req, res) {
    //res.send('Levantando un servidor con Express');
    res.sendFile(path.join(__dirname, '/views/index.html'));

});
app.get('/register', function (req, res) {
    //res.send('Levantando un servidor con Express');
    res.sendFile(path.join(__dirname, '/views/register.html'));

});
/*Para levantar el servicio llamamos de consola node app.js*/
/*Para matar la terminal hay que apretar ctrl +c*/
/*app.get('/lovelace', (req, res) => { res.sendFile(path.join(__dirname, '/views/lovelace.html')); })
app.get('/berners-lee', (req, res) => { res.sendFile(path.join(__dirname, '/views/berners-lee.html')); })
app.get('/babbage', (req, res) => { res.sendFile(path.join(__dirname, '/views/babbage.html')); })
app.get('/clarke', (req, res) => { res.sendFile(path.join(__dirname, '/views/clarke.html')); })
app.get('/hamilton', (req, res) => { res.sendFile(path.join(__dirname, '/views/hamilton.html')); })
app.get('/hopper', (req, res) => { res.sendFile(path.join(__dirname, '/views/hopper.html')); })
app.get('/turing', (req, res) => { res.sendFile(path.join(__dirname, '/views/turing.html')); })
app.get('/home', (req, res) => { res.sendFile(path.join(__dirname, '/views/index.html')); })
*/
/*Le decimos a express que habilite todo lo que esta en la carpeta public */
app.use(express.static(path.join(__dirname, 'public')))