const sql = require("./db.js");

const Aeroporto = function aeroporto(aeroporto) {
    this.iata = aeroporto.iata;
    this.name = aeroporto.name;
    this.city = aeroporto.city;
    this.state = aeroporto.state;
    this.country = aeroporto.country;
};

Aeroporto.findById = (id, result) => {
    sql.query(`SELECT * FROM aeroportos WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found aeroporto: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Aeroporto with the id
        result({ kind: "not_found" }, null);
    });
};

Aeroporto.getAll = (city, result) => {
    let query = "SELECT * FROM aeroportos";

    if (city) {
        query += ` WHERE city LIKE '%${city}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("aeroportos: ", res);
        result(null, res);
    });
};

// Aeroporto.getAllPublished = result => {
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

module.exports = Aeroporto;
