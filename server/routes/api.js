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
    const title = req.body.title.trim().replace(/ +(?= )/g, '');
    const text = req.body.text;
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
    const{_id, title, text} = req.body;
    const newPost = {title, text};
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
    models.commentPost.find({})
    .then(comments => {
        res.json({comments});
    })
    .catch(err => {
        res.json({err});
    });
});
router.post("/commentsPosts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{text, idPost} = req.body;
    models.commentPost.create({
        text,
        idPost
    }).then(comment => res.json({comment}))
});
router.get("/commentsPosts/:id", (req, res) => {
    const id = req.params.id;
    models.commentPost.findOne({_id: id})
    .then(comment => {
        res.json({comment});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/commentsPosts/:id", (req, res) => {
    const id = req.params.id;
    models.commentPost.findByIdAndDelete(id)
    .then(comment => {
        res.json({comment});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/commentsPosts", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{text, _id} = req.body;
    const newComment = {text};
    models.commentPost.findOneAndUpdate({_id}, newComment, {new: true})
    .then(comment => {
        res.json({comment});
    })
    .catch(err => {
        res.json({err});
    });
});

// USERS
router.get('/users', (req, res) => {
    models.userRegister.find({})
    .then(users => {
        res.json({users});
    })
    .catch(err => {
        res.json({err});
    });
});
router.post("/users", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{text, idPost} = req.body;
    models.userRegister.create({
        text,
        idPost
    }).then(comment => res.json({comment}))
});
router.get("/users/:id", (req, res) => {
    const id = req.params.id;
    models.userRegister.findOne({_id: id})
    .then(comment => {
        res.json({comment});
    })
    .catch(err => {
        res.json({err});
    });
});
router.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    models.userRegister.findByIdAndDelete(id)
    .then(comment => {
        res.json({comment});
    })
    .catch(err => {
        res.json({err});
    });
});
router.put("/users", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{text, _id} = req.body;
    const newComment = {text};
    models.userRegister.findOneAndUpdate({_id}, newComment, {new: true})
    .then(comment => {
        res.json({comment});
    })
    .catch(err => {
        res.json({err});
    });
});

// POST is register
router.post("/register", (req, res)=>{
    console.log(req.body);
    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if(!login || !password || !passwordConfirm){
        const fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');
        if(!passwordConfirm) fields.push('passwordConfirm');
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields
        });
    } else if(!/^[a-zA-Z0-9]+$/.test(login)){
        res.json({
            ok: false,
            error: 'Только латинские буквы и цифры!',
            fields: ['login']
        });
    } else if(login.length < 3 || login.length > 16){
        res.json({
            ok: false,
            error: 'Длина логина должна быть от 3 до 16 символов!',
            fields: ['login']
        });
    } else if(password !== passwordConfirm){
        res.json({
            ok: false,
            error: 'Пароли не совпадают!',
            fields: ['password', 'passwordConfirm']
        });
    } else{
        models.userRegister.findOne({
            login
        }).then(user => {
            if(!user){
                bcrypt.hash(password, null, null ,(err, hash) => {
                    models.userRegister.create({
                        login,
                        email,
                        password: hash
                    }).then(user => {
                        console.log(user);
                        req.session.userId = user.id;
                        req.session.userLogin = user.login;
                        res.json({
                            ok: true
                        });
                        // res.redirect('/');
                    }).catch(err => {
                        console.log(err);
                        res.json({
                            ok: false,
                            error: 'Ошибка, попробуйте позже!'
                        })
                    })
                });
            }else{
                res.json({
                    ok: false,
                    error: 'Имя занято!',
                    fields: ['login']
                });
            }
        })
    }
});

// POST is login
router.post("/login", (req, res)=>{
    const login = req.body.login;
    const password = req.body.password;
    if(!login || !password){
        const fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields
        });
    } else(
        models.userRegister.findOne({
            login
        }).then(user => {
            if(!user){
                res.json({
                    ok: false,
                    error: 'Логин и пароль не верны!',
                    fields: ['login', 'password']
                });
            } else{
                bcrypt.compare(password, user.password, function(err, result) {
                    if(!result){
                        res.json({
                            ok: false,
                            error: 'Логин и пароль не верны!',
                            fields: ['login', 'password']
                        });
                    }else{
                        req.session.userId = user.id;
                        req.session.userLogin = user.login;
                        res.json({
                            ok: true
                        });
                        res.render('index');
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.json({
                ok: false,
                error: 'Ошибка, попробуйте позже!'
            })
        })
    )
});

module.exports = router;