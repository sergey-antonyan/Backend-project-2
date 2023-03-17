const sql = ("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255) ,email VARCHAR(255), password VARCHAR(255), role VARCHAR(255))");

function create_users(db){
    db.run(sql)
}

module.exports = {create_users}