'use strict';

var utils = require('../utils/writer.js');
var Contratos = require('../service/ContratosService');

module.exports.editStatus = function editStatus (req, res, next, body, id) {
  Contratos.editStatus(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listContracts = function listContracts (req, res, next) {
  Contratos.listContracts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newContract = function newContract (req, res, next, body) {
  Contratos.newContract(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
