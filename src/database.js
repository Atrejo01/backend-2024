//const mysql = require('mysql');
//const myConnection = require('express-myconnection');
const createPool = require('mysql2/promise');

const pool= createPool({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'prueba'
});
pool.getConnection().then(
    connection =>{
        pool.releaseConnection(connection);
        console.log('Conexión exitosa');
    }
);
export default pool;