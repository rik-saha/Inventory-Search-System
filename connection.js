var mysql = require('mysql2');

var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Rik@1234",
    database:"maindb"
});

// con.connect(function(error){
//     if(error) throw error;
//     console.log("Connected");


//     con.query("select * from location",function(error,result){
//         if(error) throw error;
//         console.log(result); 
//     });
// });

module.exports = con;