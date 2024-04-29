const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)
});

function test() {
    connection.connect((error) => {
        if (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
        } else {
            console.log('Conexão bem-sucedida com o banco de dados.');
        }
        connection.end();
    });
}

module.exports = { connection, test };
