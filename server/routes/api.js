import express from "express";
import models from '../models';
const router = express.Router();


// USERS
router.get('/users', (req, res) => {
    models.userData.find({})
    .then(users => {
        res.json({users});
    })
    .catch(err => {
        res.json({err});
    });
});
router.post("/users", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{name, sername, age} = req.body;
    models.userData.create({
        name,
        sername,
        age
    }).then(user => res.json({user}))
    .catch(err => {
        res.json({err});
    });
});
router.get("/users/:id", function(req, res){
    const id = req.params.id;
    models.userData.findOne({_id: id})
    .then(user => {
        res.json({user});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/users/:id", function(req, res){
    const id = req.params.id;
    models.userData.findByIdAndDelete(id)
    .then(user => {
        res.json({user});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/users", function(req, res){
    if(!req.body) return res.sendStatus(400);
    const{id, name, sername, _id} = req.body;
    const newUser = {id, name, sername};
    models.userData.findOneAndUpdate({_id: id}, newUser, {new: true})
    .then(user => {
        res.json({user});
    })
    .catch(err => {
        res.json({err});
    });
});


// POSTS
router.get('/posts', (req, res) => {
    models.post.find({})
    .then(posts => {
        res.json({posts});
    })
    .catch(err => {
        res.json({err});
    });
});
router.post("/posts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    if(req.body.title == '' || req.body.text == '') return res.sendStatus(400);
    const{title, text} = req.body;
    models.post.create({
        title,
        text
    }).then(post => res.json({post}))
});
router.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    models.post.findOne({_id: id})
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    models.post.findByIdAndDelete(id)
    .then(post => {
        res.json({post});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/posts", (req, res) => {
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

// POSTS COMMENTS 
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