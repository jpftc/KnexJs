const { innerJoin } = require("./database");
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

// Delete
// database.where({id: 4}).delete().table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// Update
// database.where({id: 5}).update({preco: 40}).table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// Order by
// database.select().table("games").orderBy("preco","desc").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// Insert associado
// database.insert({
//     nome: "Bandai Namco",
//     game_id: 6
// }).table("estudios").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// Join 1 p 1
// database.select().table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 6).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// jois 1 p m
// database.select().table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 6).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// joins m p m
// database.select().table("games_estudios")
//     .innerJoin("games", "games.id", "games_estudios.game_id")
//     .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
//     .where("games.id", 6)
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

// Transactions, desfaz alterações caso haja falha no meio do processo de varias operações no banco de dados
// async function testeTransacao() {
//     try {
//         await database.transaction(async trans => {
//             await database.insert({nome: "CD Projekt"}).table("estudios");
//             await database.insert({nome: "Pyxeralia"}).table("estudios");
//             await database.insert({nome: "EA"}).table("estudios");
//             await database.insert({nome: "Bethesda"}).table("estudios");
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// testeTransacao();