var express = require("express")
var app = express()

// var server = require('http').createServer(app)
// var router = express.Router();
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

app.get("/users", function (req, res) {
  // res.send({1: 2});


  connection.query("SELECT * FROM `profile`", function(error, rows){
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

app.post("/login", function (req, res) {

  if(req.body){
    
    

    console.log('Получены данные',req.body);
    connection.query('SELECT * FROM `profile` WHERE `login`="'+ req.body[0] +'" && `password`="'+ req.body[1] +'"; ' , function(err, rows){
      
                  console.log("connect DB post");
                  
                  // rows = JSON.stringify(rows);
                  console.log(rows[0]);
                  if(rows.length > 0){
                    res.send({
                      status: true,
                      src: rows[0]['src'],
                      name: rows[0]['name'],
                      alt: rows[0]['inf'],
                      id: rows[0]['id'],
                      inf: rows[0]['inf']
                    });
                  }else{
                    res.send({
                      status: false,
                      src: null,
                      name: null,
                      alt: null,
                      id: null
                    });
                  }
                
    });
    
    
    
    
    
      
    }})






    app.post("/reg", function (req, res) {

      if(req.body){
        
        
    
        console.log('Получены данные',req.body);
        connection.query('INSERT INTO `profile` (`name`, `inf`, `src`, `login`, `password`) VALUES ("'+ req.body[0] +'", "'+ req.body[1] +'", "'+ req.body[2] +'", "'+ req.body[3] +'", "'+ req.body[4] +'");' , function(err, rows){
          
                      console.log("connect DB post");
                      res.send({
                                      status: true
                                    })
                      // if(!!error){
                      //             console.log("query error")
                      //             res.send({
                      //               status: false
                      //             })
                      //           }else{
                      //             console.log("connect DB post");
                      //             res.send({
                      //               status: true
                      //             })
                      //           }
                    
        });
        
        
        
        
        
          
        }})













        app.post("/add", function (req, res) {

          if(req.body){
            
            
        
            console.log('Получены данные',req.body);
            connection.query('INSERT INTO `posts` (`autorID`, `src`, `descr`, `autorName`, `autorSrc`) VALUES ("'+ req.body[0] +'", "'+ req.body[1] +'", "'+ req.body[2] +'", "'+ req.body[3] +'", "'+ req.body[4] +'");' , function(err, rows){
              
                          console.log("connect DB post");
                          res.send({
                                          status: true
                                        })
                          // if(!!error){
                          //             console.log("query error")
                          //             res.send({
                          //               status: false
                          //             })
                          //           }else{
                          //             console.log("connect DB post");
                          //             res.send({
                          //               status: true
                          //             })
                          //           }
                        
            });
            
            
            
            
            
              
            }})
  
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