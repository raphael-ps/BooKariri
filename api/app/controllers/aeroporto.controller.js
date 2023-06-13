const Aeroporto = require("../models/aeroporto.model.js");

// Retrieve all aeroportos from the database (with condition).
exports.findAll = (req, res) => {
  const city = req.query.city;
  Aeroporto.getAll(city, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving aeroportos."
      });
    else res.send(data);
  });
};

// Find a single Aeroporto by Id
exports.findOne = (req, res) => {
  Aeroporto.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Aeroporto with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Aeroporto with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// // Find all published aeroportos
// exports.findAllPublished = (req, res) => {
//   Aeroporto.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving aeroportos."
//       });
//     else res.send(data);
//   });
// };