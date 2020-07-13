const  knex = require("knex");

module.exports = class BaseDB {
   constructor(){
       this.connection = knex({
        client: "pg",
        connection: {
            host: "webropay.czeruqgah1kf.us-east-1.rds.amazonaws.com",
            port: 5432,
            user: "candidate01",
            password: "webropay",
            database: "webropay"
         }
       })
   }
}

