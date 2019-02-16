const express = require("express");
const router = express.Router();
const Users = require('../models/userData');

router.get("/", function(req, res){
    Users.find({}).then(users => {
        res.render('index_api',{users:users})
    });
});
router.get("/users/:id", function(req, res){
    res.send(`Товар = ${req.params.id}`);
});
router.post("/users", function(req, res){
    res.send("Добавление товара");
});
router.delete("/users/:id", function(req, res){
    res.send(`Удаление товара`);
});
router.put("/users", function(req, res){
    res.send("Изменение товара");
});

module.exports = router;