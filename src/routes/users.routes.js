const { Router} = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request,response,next){
    console.log("voce passou pelo middleware")
    if(!request.body.isAdmin ){
        return response.json({message: "user unauthorized"})
    }
    next();
}


//como é uma classe tenho que instanciar ele na memoria. Guardar espaço pra ele
const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);


usersRoutes.get("/message/:id/:user", (request,response) => {

    const {id ,user} = request.params

     response.send(`
     Id da mensagem ${id}
     Para usuario ${user}
     `);
})

//http://localhost:3333/users?page=10&limit=qualquer 
usersRoutes.get("/", (request,response) => {

    const {page ,limit} = request.query

     response.send(`
     Pagina ${page}
     Limit ${limit}
     `);
})

module.exports = usersRoutes;