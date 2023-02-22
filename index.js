const express = require("express")
const app = express();
const PORT = 3000;
const cors = require('cors')

const users = require("./users.json");

app.use((cors));

app.get("/", (req, res) => {

    res.send({ res: true, code: 200, users: users })
})

app.get("/:id", (req, res) => {
    const { id } = req.params;
    const results = users.filter(user => user.id === Number(id));
    res.status(200).send({ res: true, users: results });
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
})