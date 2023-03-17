const sql = ("CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, price INTEGER, description VARCHAR(255), image TEXT, created DATE, updated DATE)");

function create_products(db){
    db.run(sql)
}


module.exports = {create_products}