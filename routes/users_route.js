const user_controller = require("../controller/user_controller.js")

  function create_user_routes(app){
    app.get('/', user_controller.getAllUsers)
    app.post('/register' , user_controller.register)
    app.post('/login' , user_controller.login)

}



module.exports = {create_user_routes}