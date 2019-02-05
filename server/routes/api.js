const express = require("express");
const router = express.Router();
const Users = require('../models/users');

router.get("/", function(req, res){
    Users.find({}).then(users => {
        res.render('index',{users:users})
    });
    res.send(`список пользователей`);
});
router.get("/users/:id", function(req, res){
    res.send(`Товар `);
});
router.post("/users", function(req, res){
    res.send("Добавление товара");
});
router.delete("/users/:id", function(req, res){
    res.send(`Товар `);
});
router.put("/users", function(req, res){
    res.send("Изменение товара");
});

module.exports = router;