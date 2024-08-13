const express = require('express')
const corretora = require('./controllers/corretora')
const app = express()
const port = 5000

app.use(express.json())

/* Como pegar os dados que vem do cliente */
// app.get("/:usuario/:repositorio", (req, res) => {
    
//     console.log("antes do ?:", req.params.usuario, req.params.repositorio)
//     console.log("depois do ?:", req.query.id, req.query.idade)
//     console.log("corpo da requisição: ", req.body.cidade, req.body.bairro)

//     res.send("Tá frio demais")
// })
/* Como pegar os dados que vem do cliente */

app.get("/corretora", (req, res) => {
    res.json(corretora.index())
})

app.post("/corretora", (req, res) => {
    const code = corretora.store(req.body)
    res.status(code).json()
})

app.get("/corretora/:id", (req, res) => {
    res.json(corretora.show(req.params.id))
})

app.put("/corretora/:id", (req, res) => {
    const code = corretora.update(req.body, req.params.id);
    res.status(code).json()
})

app.delete("/corretora/:id", (req, res) => {
    const code = corretora.destroy(req.params.id)
    res.status(code).json()
})

app.listen(port, () => {
    console.log("Conexão estabelecida")
})
