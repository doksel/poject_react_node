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
    if(!req.body) return res.sendStatus(400);
    const{title, text} = req.body;
    
    models.post.create({
        title,
        text
    }).then(post => console.log('created', post.id))
});
router.get("/posts/:id", (req, res) => {
    // const BSON = require('mongodb').BSONPure;
    // const obj_id = BSON.ObjectID.createFromHexString(req.params.id);
    const id = req.params.id;
    models.post.findOne({_id: id}).then(post => {
        res.json({post});
        // res.send(`Пост = ${req.body}`);
    });
});
router.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    models.post.findByIdAndDelete(id).then(post => {
        res.json({post});
        // res.send(`Пост = ${req.body}`);
    });
});
router.put("/posts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(1);
    console.log(req.body);
    const{id, title, text} = req.body;
    const newPost = {id, title, text};
    models.post.findOneAndUpdate({_id:id}, newPost).then(post => {
        console.log('update', post.id)
    })
});


module.exports = router;