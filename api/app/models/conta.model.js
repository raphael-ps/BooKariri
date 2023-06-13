const sql = require("./db.js");

const Conta = function conta(conta) {
    this.nome = conta.nome;
    this.email = conta.email;
    this.senha = conta.senha;
};

Conta.create = (NovaConta, result) => {
    sql.query("INSERT INTO contas SET ?", NovaConta, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created conta: ", { id: res.insertId, ...NovaConta });
        result(null, { id: res.insertId, ...NovaConta });
    });

};

// Conta.findById = (id, result) => {
//     sql.query(`SELECT * FROM contas WHERE id = ${id}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("found conta: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//     });
// };

// Tutorial.findContaById = (id, result) => {
//     sql.query(`SELECT * FROM conta WHERE id = ${id}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("found tutorial: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//     });
// };

// Tutorial.getAll = (city, result) => {
//     let query = "SELECT * FROM aeroportos";

//     if (city) {
//         query += ` WHERE city LIKE '%${city}%'`;
//     }

//     sql.query(query, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log("aeroportos: ", res);
//         result(null, res);
//     });
// };

// Tutorial.getAllPublished = result => {
//     sql.query("SELECT * FROM aeroportos WHERE published=true", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log("aeroportos: ", res);
//         result(null, res);
//     });
// };

// Tutorial.updateById = (id, tutorial, result) => {
//     sql.query(
//         "UPDATE aeroportos SET title = ?, description = ?, published = ? WHERE id = ?",
//         [tutorial.title, tutorial.description, tutorial.published, id],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }

//             if (res.affectedRows == 0) {
//                 // not found Tutorial with the id
//                 result({ kind: "not_found" }, null);
//                 return;
//             }

//             console.log("updated tutorial: ", { id: id, ...tutorial });
//             result(null, { id: id, ...tutorial });
//         }
//     );
// };

// Tutorial.remove = (id, result) => {
//     sql.query("DELETE FROM aeroportos WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             // not found Tutorial with the id
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("deleted tutorial with id: ", id);
//         result(null, res);
//     });
// };

// Tutorial.removeAll = result => {
//     sql.query("DELETE FROM aeroportos", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log(`deleted ${res.affectedRows} aeroportos`);
//         result(null, res);
//     });
// };

module.exports = Conta;
