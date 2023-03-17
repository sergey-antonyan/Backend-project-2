const express = require('express')
const app = express()
const port = 5000
const sqlite3 = require('sqlite3').verbose()
const users_schema = require('./models/users_schema.js')
const product_schema = require('./models/porducts_schema.js')
const user_routes = require('./routes/users_route.js')
const product_routes = require('./routes/products_route')
app.use(express.json())

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.log("something is wrong");
  }
  console.log('Connected to the database.');
});

users_schema.create_users(db)
product_schema.create_products(db)
user_routes.create_user_routes(app)
product_routes.create_products_routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})