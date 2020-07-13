const BaseDB  = require("../data/baseDB");

module.exports = class ContractDB extends BaseDB {
     async getContracts(){
         try{
            const contracts = await this.connection
            .select('*')
            .from('contracts')

            return contracts.map((contract) => {
                return({
                     id: contract.id,
                     description: contract.description,
                     status: contract.status
                })
                
            })
         }catch(err){
             console.log("erro ao mostrar contratos ",err)
         }    
    }

     async createNewContract(contract){
         try{
            await this.connection.insert({
                description: contract.description,
                id: contract.id,
                status: contract.status
            }).into('contracts')    
         }catch(err){
            console.log("erro ao criar novo contrato ",err)
         }
        
    }

    async updateStatusContract(contract, id){
        try{
            await this.connection.raw(`
            UPDATE contracts SET status ='${contract.newStatus}'
            WHERE id='${id}';
            `)
        }catch(err){
            console.log("teste update: ",err)
        }
      
    }

}