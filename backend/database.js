require('dotenv').config()
var mysql = require('mysql')
var  database = {
    host :process.env.DBHOST,
    user :process.env.DBUSER,
    password:process.env.DBPASSWD,
    database:process.env.DBNAME
}
console.log(database);
const { promisify } = require('util')
const pool = mysql.createPool(database)
pool.getConnection(function(err, connection){
    if (err) throw  err;
})
pool.query = promisify(pool.query)
module.exports = pool;
