import express from "express";
import models from '../models';
const router = express.Router();


router.get('/posts', (req, res) => {
    models.Post.find({}).then(posts => {
        res.json({posts});
    });
});
router.post("/posts", (req, res) => {
    res.send("Добавление поста");
});
router.get("/posts/:id", function(req, res){
    res.send(`Пост = ${req.params.id}`);
});
router.delete("/posts/:id", function(req, res){
    res.send(`Удаление поста`);
});
router.put("/posts", function(req, res){
    res.send("Изменение поста");
});


module.exports = router;