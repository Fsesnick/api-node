const express = require("express");

const routes = require("./routes")

const app = express();
app.use(express.json()); //pra avisar que vamos usar JSON pro body das requisições POST

app.use(routes);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));