const { Router} = require("express");
const usersRoutes = Router();

usersRoutes.get("/message/:id/:user", (request,response) => {

    const {id ,user} = request.params

     response.send(`
     Id da mensagem ${id}
     Para usuario ${user}
     `);
})
usersRoutes.post("/", (request,response) => {

    const { name,email } = request.body
    //response.json(`Usuario: ${name}, email: ${email}`)
    response.json({ name,email})


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