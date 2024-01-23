// classe permite que tenha varias funções dentro delas
/**
 * index - GET para listar vários registros
 * show - GET para exibir um registro específico
 * create - POST para criar um registro.
 * update - PUT para atualizar um registro
 * delete - DELETE para remover um registro
 */

class UsersController{

create(request, response){
        const { name,email,password } = request.body
        //response.json(`Usuario: ${name}, email: ${email}`)
        response.json({ name,email,password})
        }
}

module.exports = UsersController;