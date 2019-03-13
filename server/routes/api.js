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
    const{title, text} = req.body;
    
    models.post.create({
        title,
        text
    }).then(post => console.log('created', post.id))
});
router.get("/posts/:id", (req, res) => {
    // const BSON = require('mongodb').BSONPure;
    // const obj_id = BSON.ObjectID.createFromHexString(req.params.id);
    models.post.findOne({id: req.params.id}).then(post => {
        res.json({post});
        // res.send(`Пост = ${req.body}`);
    });
});
router.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    models.post.findOne({id: id}).then(post => {
        res.json({post});
    });

});
router.put("/posts", (req, res) => {
    const id = req.params.id;
    models.post.findOne({id: id}).then(post => {
        res.json({post});
    });
    // models.post.create({
    //     id,
    //     title,
    //     text
    // }).then(post => console.log('updated', post.id))
});


module.exports = router;