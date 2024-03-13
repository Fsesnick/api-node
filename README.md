# api-node
App backend que utiliza express para gerenciar rotas 
>> node src/server.js  
>> npm start


# Curl pra testes 

curl --location 'localhost:3333/users' \
--header 'Content-Type: application/json' \
--data '{
"name" : "Fer",
 "email": "email",
 "password": "123",
 "isAdmin": true
 
}'

curl --location 'localhost:3333/users?page=1&limit=20' \
--data ''