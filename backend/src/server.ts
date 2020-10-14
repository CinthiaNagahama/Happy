import express from 'express';

const app = express();

app.use(express.json);

// Rota = conjunto
// Recurso = usuários

/* Método HTTP:
    GET -> Buscar uma informação (Lista ou item)
    POST -> Criar uma informação
    PUT -> Editar uma informação
    DELETE -> Deletar uma informação
*/

/* Parâmetros:
    Query Params -> http://localhost:3333/users?search=diego -> (? busca & concatecação)
    Route Params -> http://localhost:3333/users/1 -> (Identificar um recurso)
    Body -> http://localhost:3333/users (Corpo da requisição)
*/
/*
app.post('/users/:id', (request, response) => {
    console.log(request.query); // Devolve {message: 'Hello World'}
    console.log(request.params); // Devolve o id
    console.log(request.body); // Devolve o body

    return response.json({ message: 'Hello World!' });
});
*/

app.get('/users', (request, response) => {
    return response.json({ message: 'Hello Wolrd' });
});

app.listen(3333);