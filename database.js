// Configurandio conexão com base de dados com Knex
const knex = require('knex')({
    client: 'mssql',
    connection: {
      host : '127.0.0.1',
      user : 'sa',
      password : 'WksAdm#35',
      database : 'knexjs'
    }
  });

  module.exports = knex;