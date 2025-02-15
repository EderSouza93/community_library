import sqlite3 from 'sqlite3';


const db = new sqlite3.Database('Library_db.squiite', (err) => {
    if (err) {
        console.error('Error ao conectar ao banco de dados:', err.message);
        } else {
            console.log('Conectado com sucesso ao banco de Dados SQLite.')
        }
})

export default db
