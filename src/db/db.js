require('dotenv').config();
 
var Sequelize = require("sequelize");

var dbfile = new Sequelize(
    process.env.Db_name,
    process.env.Db_user,
    process.env.Db_pass,
    {
        dialect: "mysql",
        host: process.env.Db_host,
    }
);
//console.log(process.env);
module.exports = dbfile;
