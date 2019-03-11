const express = require("express");
const router = express.Router();
const models = require('../models');
let data = [
    {
        id: 1,
        name: 'Andriy',
        sername: 'Fedorchenko',
        age: 40
    }
]
router.get('/users', (req, res) => {
    models.userData.find({}).then(users => {
        res.json({users});
    });
    // res.json({data})
});
router.post("/users", (req, res) => {
    res.send("Добавление пользователя");
});
router.get("/users/:id", function(req, res){
    res.send(`Товар = ${req.params.id}`);
});
router.delete("/users/:id", function(req, res){
    res.send(`Удаление пользователя`);
});
router.put("/users", function(req, res){
    res.send("Изменение пользователя");
});


module.exports = router;