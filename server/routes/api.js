import express from "express";
import models from '../models';
const router = express.Router();


// USERS
router.get('/users', (req, res) => {
    models.userData.find({}).then(users => {
        res.json({users});
    });
});
router.post("/users", (req, res) => {
    res.send("Добавление пользователя");
});
router.get("/users/:id", function(req, res){
    res.send(`Пользователь = ${req.params.id}`);
});
router.delete("/users/:id", function(req, res){
    res.send(`Удаление пользователя`);
});
router.put("/users", function(req, res){
    res.send("Изменение пользователя");
});


// POSTS
router.get('/posts', (req, res) => {
    models.post.find({}).then(posts => {
        res.json({posts});
    });
});
router.post("/posts", (req, res) => {
    res.send("Добавление пользователя");
});
router.get("/posts/:id", function(req, res){
    res.send(`Пользователь = ${req.params.id}`);
});
router.delete("/posts/:id", function(req, res){
    res.send(`Удаление пользователя`);
});
router.put("/posts", function(req, res){
    res.send("Изменение пользователя");
});


module.exports = router;