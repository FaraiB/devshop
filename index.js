const db = require('knex')({
    client: 'mysql2',
    connection: {
        host:'127.0.0.1',
        user: 'root',
        password: '',
        database: 'devshop'
    }
})

db.on('query', query => {
    console.log('SQL:', query.sql)
})
const app = require('./app')(db)

const port = process.env.PORT || 3000

app.listen(port, err => {
    if(err){
        console.log('Não foi possivel iniciar o Devshop')
    }else{
        console.log('Devshop server está rodando')
    }
})