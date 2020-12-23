var express = require("express")
var app = express()

var server = require('http').createServer(app)
var router = express.Router();
var mysql  = require("mysql");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  
  next();
});

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "react"
})

connection.connect(function (error) {
  if(!!error){
    console.log(error);
  }else{
    console.log('connect');
  }

})




app.get("/data", function (req, res) {
  // res.send({1: 2});


  connection.query("SELECT * FROM `posts`", function(error, rows){
        if(!!error){
          console.log("query error")
        }else{
          console.log("connect DB");
          // console.log(JSON.stringify(rows));
          res.send(JSON.stringify(rows));
          res.end();
        }
    
      });
  
      

})

var bodyParser = require('body-parser')
app.use(bodyParser())

// app.post("/data", function (req, res) {

//   if(req.body){
    
    

//     console.log('Получены данные',req.body);
//     req = req.body;
//     console.log(req.body.id);
//     let id = '"' + req.body.id + '"';
//     let Content = '"' + req.body.Content + '"';
//     let Status = '"' + req.body.Status + '"';
//     let DateEnd = '"' + req.body.DateEnd + '"';
//     if(req.body.type == 'add'){
//       connection.query("INSERT INTO `data` (`id`, `Content`, `Status`, `DateEnd`) VALUES (" + id + ", " + Content + ", " + Status + ", " + DateEnd + ");", function(error, rows){
//         if(!!error){
//           console.log("query error")
//         }else{
//           console.log("connect DB post");
//           console.log(rows);
//         }
    
//       });
//     }

//     if(req.body.type == 'del'){
//       connection.query("DELETE FROM `data` WHERE `id`=" + id + ";", function(error, rows){
//         if(!!error){
//           console.log("query error")
//         }else{
//           console.log("connect DB post");
//           console.log(rows);
//         }
    
//       });
//     }


//     if(req.body.type == 'edit'){
//       connection.query("UPDATE `data` SET `id`=" + id + ",`Content`=" + Content + ", `Status`=" + Status +", `DateEnd`="+ DateEnd + " WHERE `id`="+ id +";", function(error, rows){
//         if(!!error){
//           console.log("query error")
//         }else{
//           console.log("connect DB post");
//           console.log(rows);
//         }
    
//       });
//     }
    
//   }
// })

app.listen(3000);