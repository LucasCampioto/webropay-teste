
'use strict';

const  ContractDB  = require("../data/contractDB");


/**
 * Altera status
 * Altera o status de um contrato
 *
 * body Body_1  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.editStatus = async function(newStatus, id) {
  const db = new ContractDB()
  return await db.updateStatusContract(newStatus, id)
}


/**
 * Consulta contratos
 * Lista todos os contratos cadastrados
 *
 * returns body
 **/
exports.listContracts = async function() {
  const db = new ContractDB()  
  return await db.getContracts()  
}


// "description" : "contrato de adesão do plano de pagamento",
  // "id" : 1,
  // "status" : "pendente"

/**
 * Cadastra Contrato
 * Possibilita cadastrar um novo contrato
 *
 * body Body  (optional)
 * returns body
 **/
exports.newContract = async function(id,description,status) {
 const db = new ContractDB()
 return await db.createNewContract(id,description,status)
}

