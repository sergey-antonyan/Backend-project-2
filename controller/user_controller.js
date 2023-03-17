const sqlite3 = require('sqlite3').verbose()
const  CryptoJS = require('crypto-js')
const db = new sqlite3.Database('database.db')
require('dotenv').config()
const jwt_gen = require('../jwt/jwt_generate')

function getAllUsers(req, res) {
  db.all('SELECT * FROM users', [], (err,data) => {
    res.send(data)
  })
  
}

function register(req, res){
  const name = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const password = req.body.password
  const role = req.body.role
  console.log(name)
  const hashed_password = CryptoJS.SHA256(password).toString();
  let sql = "INSERT INTO users (firstname, lastname, email, password, role) VALUES (?,?,?,?,?)"
  db.run(sql, [name, lastname,email,hashed_password, "user"], function(err){
        if(err){
          console.log(err)
            res.send(JSON.stringify({status: "Error Reigstering"}))
        }
        res.send(JSON.stringify({status: "User Created"}))
    })  
}

function  login(req,res){
    const email = req.body.email
    const password = req.body.password
    const hashed_password = CryptoJS.SHA256(password).toString();
    console.log(password, hashed_password)
    let sql = "SELECT * from users WHERE email = ?"
    db.get(sql,[email], function(err, row){    
      console.log(hashed_password, row.password)
      if(email == row.email && hashed_password == row.password) {
          const token = jwt_gen.generateAccessToken(email , row.role )
          res.send(JSON.stringify({status: "Logged in", jwt:token}));
      }else {
          res.send(JSON.stringify({status: "Wrong credentials"}));
      }  
    }) 
  }


module.exports = {getAllUsers, register ,login}