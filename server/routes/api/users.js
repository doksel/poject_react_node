import express from "express";
import models from '../../models';
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

module.exports = router;