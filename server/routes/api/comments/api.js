import express from "express";
import models from '../models';
const router = express.Router();


router.get('/commentsPosts', (req, res) => {
    models.post.find({})
    .then(posts => {
        res.json({posts});
    })
    .catch(err => {
        res.json({err});
    });
});
router.post("/commentsPosts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{title, text} = req.body;
    models.post.create({
        title,
        text
    }).then(post => res.json({post}))
});
router.get("/commentsPosts/:id", (req, res) => {
    const id = req.params.id;
    models.post.findOne({_id: id})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/commentsPosts/:id", (req, res) => {
    const id = req.params.id;
    models.post.findByIdAndDelete(id)
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/commentsPosts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{id, title, text, _id} = req.body;
    const newPost = {id, title, text};
    models.post.findOneAndUpdate({_id: id}, newPost, {new: true})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});

module.exports = router;