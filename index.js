// Carregando conexão com banco de dados
const database = require("./database");

/*
// Definindo dados do insert
var dados = [
    {
        nome: "Red Dead Redemption",
        preco: 100.00
    },
    {
        nome: "The Witcher 3",
        preco: 60.00
    },
    {
        nome: "GTA V",
        preco: 70.30
    }
]

// Insrindo dados na tabela "games"
database.insert(dados).into("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
// Select com knex
database.select("nome", "preco").table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
// Executando query dentro de outra query
database.insert({ nome: "Dark Souls 3", preco: 60.00 }).into("games").then(data => {
    database.select("nome", "preco").table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
*/

// Select com where
// database.select("nome")
//     .where({ nome: "Red Dead Redemption 2" })
//     .where({ id: 2 })
//     // Usando or
//     .orWhere({ id: 3 })
//     // where crû
//     .whereRaw("id > 2")
//     .table("games").then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

// Consulta crua
// database.raw("select * from games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });