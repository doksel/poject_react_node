import express from "express";
import models from '../models';
const router = express.Router();


router.get('/', (req, res) => {
    models.post.find({}).then(posts => {
        res.json({posts});
    });
});
router.post("/posts", (req, res) => {
    const{title, text} = req.body;
    
    models.post.create({
        title,
        text
    }).then(post => console.log('created', post.id))
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