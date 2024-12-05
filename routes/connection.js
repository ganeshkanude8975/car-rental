var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
  host:"bf1pefqrseqor8yf13kh-mysql.services.clever-cloud.com",
  user :"uvqbl4urncbahyav",
  password:"W1PtXRU6RZeVyJalz5BW",
  database:"bf1pefqrseqor8yf13kh"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports=exe;
