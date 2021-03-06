const express = require ("express");
const models = require ('../../models');
const router = express.Router();


router.get('/', (req, res) => {
    models.post.find({})
    .then(posts => {
        res.json({posts});
    })
    .catch(err => {
        res.json({err});
    });
});
router.post("/", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    if(req.body.title == '' || req.body.text == '') return res.sendStatus(400);
    const{title, text} = req.body;
    models.post.create({
        title,
        text
    }).then(post => res.json({post}))
});
router.get("/:id", (req, res) => {
    const id = req.params.id;
    models.post.findOne({_id: id})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    models.post.findByIdAndDelete(id)
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{id, title, text, _id} = req.body;
    const newPost = {id, _id, title, text};
    models.post.findOneAndUpdate({_id}, newPost, {new: true})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});

module.exports = router;