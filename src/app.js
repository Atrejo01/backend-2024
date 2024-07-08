const express = require ('express'); 
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');

const app = express();
const cors = require ('cors');

const mascotaRouter= require('./routes/mascotas.router');

app.set ('port', 3000);
app.use (cors());
app.use (morgan('dev'));

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'prueba'  
}, 'single'));

app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use(require('./routes/mascotas.router'));

module.exports= app;