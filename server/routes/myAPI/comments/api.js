import express from "express";
import models from '../models';
const router = express.Router();


router.get('/commentsPosts', (req, res) => {
    models.commentPost.find({})
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
    models.commentPost.create({
        title,
        text
    }).then(post => res.json({post}))
});
router.get("/commentsPosts/:id", (req, res) => {
    const id = req.params.id;
    models.commentPost.findOne({_id: id})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/commentsPosts/:id", (req, res) => {
    const id = req.params.id;
    models.commentPost.findByIdAndDelete(id)
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/commentsPosts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{id, text, _id} = req.body;
    const newComment = {id, text, _id};
    models.commentPost.findOneAndUpdate({_id: id}, newComment, {new: true})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});

module.exports = router;