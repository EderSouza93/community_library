import express from 'express';
const app = express();

app.use(express.json());

const users = []

// METHOD => GET, POST, PUT/PATCH, DELETE - API RESTful
// NAME => / - sempre no plural
// Callback functions => Onde excutamos o backend (lógica, regra de negócio)

app.post('/users', (req, res) => {
    const body = req.body
    users.push(body)
    res.status(201).send("Usuário criado com sucesso!")
  });

app.get("/users", (req, res) => {
  res.send({message: "Esses são os users", users})
})


app.listen(3000, () => console.log("Server is running on port 3000"));

