import express from "express";
import models from '../models';
const router = express.Router();


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


module.exports = router;